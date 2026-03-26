import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import {
  getSlots, createSlot, updateSlot, deleteSlot,
  getAllBookings, getStats, getAllUsers, promoteUser,
} from "../services/api";
import { toast } from "../components/Toast";
import {
  ParkingSquare, CheckCircle2, Car, BarChart2, ClipboardList,
  Users, Shield, UserCircle, Plus, Trash2, ChevronUp, AlertTriangle, X,
} from "lucide-react";

// ── shared tokens ────────────────────────────────────────────────────────────
const C = {
  bg:      "#0a0a0a",
  surface: "#111111",
  border:  "#1e1e1e",
  border2: "#2a2a2a",
  text:    "#f0f0f0",
  muted:   "#4a4a4a",
  dim:     "#2e2e2e",
  amber:   "#d4a847",
  amberBg: "rgba(212,168,71,0.08)",
  amberBorder: "#d4a847",
  green:   "#22c55e",
  greenBg: "rgba(34,197,94,0.1)",
  red:     "#ef4444",
  redBg:   "rgba(239,68,68,0.1)",
  blue:    "#38bdf8",
  blueBg:  "rgba(56,189,248,0.1)",
};

const FONT_SANS = "'Sora', sans-serif";
const FONT_MONO = "'IBM Plex Mono', monospace";

// ── tiny helpers ─────────────────────────────────────────────────────────────
const pill = (bg, color, text) => (
  <span style={{
    padding: "3px 10px", borderRadius: 999, fontSize: 11,
    fontFamily: FONT_MONO, fontWeight: 500, letterSpacing: "0.04em",
    background: bg, color,
  }}>{text}</span>
);

const fmtDate = (v) => {
  if (!v) return "—";
  const d = v._seconds ? new Date(v._seconds * 1000) : new Date(v);
  return d.toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "numeric", minute: "2-digit", hour12: true });
};

// ── sub-components ───────────────────────────────────────────────────────────
function MonoLabel({ children, style = {} }) {
  return <p style={{ margin: 0, fontFamily: FONT_MONO, fontSize: 9, color: C.muted, letterSpacing: "0.11em", ...style }}>{children}</p>;
}

function SectionCard({ children, style = {} }) {
  return (
    <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, overflow: "hidden", ...style }}>
      {children}
    </div>
  );
}

function Th({ children }) {
  return (
    <th style={{ padding: "12px 18px", textAlign: "left", fontFamily: FONT_MONO, fontSize: 9, color: C.muted, letterSpacing: "0.1em", borderBottom: `1px solid ${C.border}`, whiteSpace: "nowrap" }}>
      {children}
    </th>
  );
}

function Td({ children, style = {} }) {
  return <td style={{ padding: "13px 18px", borderBottom: `1px solid ${C.border}`, fontSize: 13, color: C.text, verticalAlign: "middle", ...style }}>{children}</td>;
}

function DarkInput({ value, onChange, onKeyDown, onFocus, onBlur, placeholder, type = "text", style = {} }) {
  return (
    <input
      value={value} onChange={onChange} onKeyDown={onKeyDown} type={type}
      placeholder={placeholder}
      onFocus={e => { e.target.style.borderColor = C.amber; if (onFocus) onFocus(e); }}
      onBlur={e => { e.target.style.borderColor = C.border2; if (onBlur) onBlur(e); }}
      style={{
        background: C.bg, border: `1px solid ${C.border2}`, borderRadius: 9,
        padding: "9px 13px", color: C.text, fontFamily: FONT_MONO,
        fontSize: 13, outline: "none", transition: "border-color 0.15s", ...style,
      }}
    />
  );
}

function AmberBtn({ onClick, disabled, loading, children, style = {} }) {
  return (
    <button
      onClick={onClick} disabled={disabled}
      style={{
        display: "flex", alignItems: "center", gap: 7,
        padding: "9px 18px", borderRadius: 9, border: "none",
        background: disabled ? C.dim : C.amber,
        color: disabled ? C.muted : "#0a0a0a",
        fontFamily: FONT_SANS, fontWeight: 700, fontSize: 13,
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "opacity 0.15s", whiteSpace: "nowrap", ...style,
      }}
    >
      {loading && <SpinIcon />}
      {children}
    </button>
  );
}

function SpinIcon() {
  return (
    <span style={{
      width: 13, height: 13, borderRadius: "50%",
      border: "2px solid rgba(10,10,10,0.3)", borderTopColor: "#0a0a0a",
      display: "inline-block", animation: "spin 0.7s linear infinite", flexShrink: 0,
    }} />
  );
}

function LoadingSkeleton() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {[...Array(5)].map((_, i) => (
        <div key={i} style={{
          height: 50, borderRadius: 10,
          background: `linear-gradient(90deg, ${C.surface} 25%, ${C.border} 50%, ${C.surface} 75%)`,
          backgroundSize: "200% 100%", animation: "shimmer 1.5s infinite",
        }} />
      ))}
    </div>
  );
}

function EmptyState({ Icon, title, desc }) {
  return (
    <div style={{ textAlign: "center", padding: "60px 20px" }}>
      <Icon size={40} strokeWidth={1} color={C.muted} style={{ marginBottom: 12 }} />
      <p style={{ fontFamily: FONT_SANS, fontWeight: 700, fontSize: 16, color: C.text, margin: "0 0 6px" }}>{title}</p>
      <p style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.muted, margin: 0 }}>{desc}</p>
    </div>
  );
}

// ── main component ───────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const [slots, setSlots]               = useState([]);
  const [bookings, setBookings]         = useState([]);
  const [users, setUsers]               = useState([]);
  const [stats, setStats]               = useState(null);
  const [loading, setLoading]           = useState(true);
  const [tab, setTab]                   = useState("slots");
  const [newSlotNumber, setNewSlotNumber] = useState("");
  const [adding, setAdding]             = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [updatingSlot, setUpdatingSlot] = useState(null);
  const [promoteEmail, setPromoteEmail] = useState("");
  const [promoting, setPromoting]       = useState(null);

  // ── original logic, untouched ─────────────────────────────────────────────
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [sRes, bRes, stRes, uRes] = await Promise.all([
        getSlots(), getAllBookings(), getStats(), getAllUsers(),
      ]);
      setSlots(sRes.data.data || []);
      setBookings(bRes.data.data || []);
      setStats(stRes.data.data || null);
      setUsers(uRes.data.data || []);
    } catch (err) {
      toast.error("Failed to load dashboard data.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => fetchData(), 10000);
    return () => clearInterval(interval);
  }, [fetchData]);

  const handleAddSlot = async () => {
    if (!newSlotNumber.trim()) { toast.error("Enter a slot number."); return; }
    setAdding(true);
    try {
      await createSlot(newSlotNumber.trim().toUpperCase());
      toast.success(`Slot ${newSlotNumber.toUpperCase()} added!`);
      setNewSlotNumber("");
      fetchData();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add slot.");
    } finally {
      setAdding(false);
    }
  };

  const handleUpdateStatus = async (slot, status) => {
    setUpdatingSlot(slot.id);
    try {
      await updateSlot(slot.id, { status });
      toast.success(`Slot ${slot.slotNumber} → ${status}`);
      fetchData();
    } catch (err) {
      toast.error("Update failed.");
    } finally {
      setUpdatingSlot(null);
    }
  };

  const handleDelete = async (slot) => {
    try {
      await deleteSlot(slot.id);
      toast.success(`Slot ${slot.slotNumber} deleted.`);
      setConfirmDelete(null);
      fetchData();
    } catch (err) {
      toast.error("Delete failed.");
    }
  };

  const handlePromoteByEmail = async () => {
    if (!promoteEmail.trim()) { toast.error("Enter an email address."); return; }
    setPromoting("manual");
    try {
      const res = await promoteUser(promoteEmail.trim());
      toast.success(res.data.message || "User promoted to admin!");
      setPromoteEmail("");
      fetchData();
    } catch (err) {
      toast.error(err.response?.data?.message || "Promotion failed.");
    } finally {
      setPromoting(null);
    }
  };

  const handlePromoteUser = async (user) => {
    setPromoting(user.userId);
    try {
      const res = await promoteUser(user.email);
      toast.success(res.data.message || `${user.name} promoted to admin!`);
      fetchData();
    } catch (err) {
      toast.error(err.response?.data?.message || "Promotion failed.");
    } finally {
      setPromoting(null);
    }
  };
  // ── end original logic ────────────────────────────────────────────────────

  const TABS = [
    { id: "slots",    label: "Slots",    Icon: ParkingSquare },
    { id: "bookings", label: "Bookings", Icon: ClipboardList },
    { id: "users",    label: "Users",    Icon: Users },
  ];

  const STATS = stats ? [
    { label: "TOTAL SLOTS", value: stats.totalSlots,    Icon: ParkingSquare, color: C.amber,  bg: C.amberBg  },
    { label: "FREE",        value: stats.freeSlots,     Icon: CheckCircle2,  color: C.green,  bg: C.greenBg  },
    { label: "OCCUPIED",    value: stats.occupiedSlots, Icon: Car,           color: C.red,    bg: C.redBg    },
    { label: "OCCUPANCY",   value: stats.occupancyRate, Icon: BarChart2,     color: C.amber,  bg: C.amberBg  },
    { label: "BOOKINGS",    value: stats.totalBookings, Icon: ClipboardList, color: C.blue,   bg: C.blueBg   },
    { label: "USERS",       value: users.length,        Icon: Users,         color: C.blue,   bg: C.blueBg   },
  ] : [];

  return (
    <div style={{ minHeight: "100vh", background: C.bg, fontFamily: FONT_SANS }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
        .tab-btn:hover { border-color: ${C.amber} !important; color: ${C.amber} !important; }
        .row-hover:hover td { background: #161616 !important; }
        .del-btn:hover { border-color: ${C.red} !important; color: ${C.red} !important; }
        select option { background: ${C.surface}; color: ${C.text}; }
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .tab-bar { gap: 6px !important; }
          .tab-btn { padding: 8px 12px !important; font-size: 12px !important; }
          .add-row { flex-direction: column !important; align-items: stretch !important; }
          .add-row input { max-width: 100% !important; }
          .promote-row { flex-direction: column !important; }
          .promote-row input { max-width: 100% !important; }
          .overflow-x { overflow-x: auto; -webkit-overflow-scrolling: touch; }
        }
      `}</style>

      <Navbar />

      <div style={{ maxWidth: 1300, margin: "0 auto", padding: "28px 16px" }}>

        {/* ── Page header ── */}
        <div style={{ marginBottom: 28 }}>
          <span style={{
            display: "inline-block", padding: "3px 12px", borderRadius: 999,
            fontFamily: FONT_MONO, fontSize: 10, letterSpacing: "0.1em",
            background: C.amberBg, color: C.amber, border: `1px solid rgba(212,168,71,0.25)`,
            marginBottom: 10,
          }}>
            ADMIN PANEL
          </span>
          <h1 style={{ margin: 0, fontSize: 28, fontWeight: 800, color: C.text, letterSpacing: "-0.04em", lineHeight: 1.1 }}>
            Control Center
          </h1>
          <p style={{ margin: "6px 0 0", fontFamily: FONT_MONO, fontSize: 11, color: C.muted }}>
            Manage parking slots · View bookings · Administer users
          </p>
        </div>

        {/* ── Stats grid ── */}
        {stats && (
          <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 10, marginBottom: 28 }}>
            {STATS.map(({ label, value, Icon, color, bg }) => (
              <div key={label} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: "14px 16px" }}>
                <div style={{ width: 28, height: 28, borderRadius: 7, background: bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                  <Icon size={14} strokeWidth={1.5} color={color} />
                </div>
                <div style={{ fontSize: 22, fontWeight: 800, color, letterSpacing: "-0.03em", lineHeight: 1 }}>{value}</div>
                <MonoLabel style={{ marginTop: 4 }}>{label}</MonoLabel>
              </div>
            ))}
          </div>
        )}

        {/* ── Tabs ── */}
        <div className="tab-bar" style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
          {TABS.map(({ id, label, Icon }) => {
            const active = tab === id;
            return (
              <button key={id} className="tab-btn" onClick={() => setTab(id)} style={{
                display: "flex", alignItems: "center", gap: 7,
                padding: "9px 18px", borderRadius: 9,
                border: `1px solid ${active ? C.amber : C.border2}`,
                background: active ? C.amberBg : "transparent",
                color: active ? C.amber : C.muted,
                fontFamily: FONT_SANS, fontWeight: 700, fontSize: 13,
                cursor: "pointer", transition: "border-color 0.15s, color 0.15s",
              }}>
                <Icon size={13} strokeWidth={1.5} />
                {label}
              </button>
            );
          })}
        </div>

        {/* ══════════════════ SLOTS TAB ══════════════════ */}
        {tab === "slots" && (
          <div>
            {/* Add slot */}
            <SectionCard style={{ marginBottom: 14, overflow: "visible" }}>
              <div className="add-row" style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                  <Plus size={14} strokeWidth={2} color={C.amber} />
                  <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.amber, letterSpacing: "0.08em" }}>ADD SLOT</span>
                </div>
                <DarkInput
                  value={newSlotNumber}
                  onChange={e => setNewSlotNumber(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleAddSlot()}
                  placeholder="e.g. A-101"
                  style={{ flex: 1, minWidth: 140, maxWidth: 220 }}
                />
                <AmberBtn onClick={handleAddSlot} disabled={adding} loading={adding}>
                  {adding ? "Adding…" : "Add Slot"}
                </AmberBtn>
              </div>
            </SectionCard>

            {/* Slots table */}
            {loading ? <LoadingSkeleton /> : slots.length === 0 ? (
              <SectionCard><EmptyState Icon={ParkingSquare} title="No slots yet" desc="Add your first parking slot above." /></SectionCard>
            ) : (
              <SectionCard>
                <div className="overflow-x">
                  <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 560 }}>
                    <thead><tr>
                      {["SLOT", "STATUS", "BOOKED BY", "LAST UPDATED", "ACTIONS"].map(h => <Th key={h}>{h}</Th>)}
                    </tr></thead>
                    <tbody>
                      {slots.map(slot => (
                        <tr key={slot.id} className="row-hover">
                          <Td><span style={{ fontFamily: FONT_MONO, fontWeight: 500, color: C.amber, fontSize: 13 }}>{slot.slotNumber}</span></Td>
                          <Td>
                            {slot.status === "free"
                              ? pill(C.greenBg, C.green, "FREE")
                              : pill(C.redBg,   C.red,   "OCCUPIED")}
                          </Td>
                          <Td style={{ fontFamily: FONT_MONO, fontSize: 12, color: C.muted }}>{slot.bookedBy || "—"}</Td>
                          <Td style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.muted }}>{fmtDate(slot.updatedAt)}</Td>
                          <Td>
                            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                              <select
                                value={slot.status}
                                disabled={updatingSlot === slot.id}
                                onChange={e => handleUpdateStatus(slot, e.target.value)}
                                style={{
                                  background: C.bg, border: `1px solid ${C.border2}`, borderRadius: 7,
                                  padding: "5px 9px", fontFamily: FONT_MONO, fontSize: 11,
                                  color: slot.status === "free" ? C.green : C.red,
                                  cursor: "pointer", outline: "none",
                                }}
                              >
                                <option value="free">Free</option>
                                <option value="occupied">Occupied</option>
                              </select>
                              <button
                                className="del-btn"
                                onClick={() => setConfirmDelete(slot)}
                                style={{
                                  display: "flex", alignItems: "center", justifyContent: "center",
                                  width: 30, height: 30, borderRadius: 7,
                                  border: `1px solid ${C.border2}`, background: "transparent",
                                  color: C.muted, cursor: "pointer", transition: "border-color 0.15s, color 0.15s",
                                }}
                              >
                                <Trash2 size={13} strokeWidth={1.5} />
                              </button>
                            </div>
                          </Td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </SectionCard>
            )}
          </div>
        )}

        {/* ══════════════════ BOOKINGS TAB ══════════════════ */}
        {tab === "bookings" && (
          <div>
            {loading ? <LoadingSkeleton /> : bookings.length === 0 ? (
              <SectionCard><EmptyState Icon={ClipboardList} title="No bookings yet" desc="Bookings will appear here when users book slots." /></SectionCard>
            ) : (
              <SectionCard>
                <div className="overflow-x">
                  <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 480 }}>
                    <thead><tr>
                      {["SLOT ID", "USER", "BOOKED AT", "STATUS"].map(h => <Th key={h}>{h}</Th>)}
                    </tr></thead>
                    <tbody>
                      {bookings.map(b => (
                        <tr key={b.id} className="row-hover">
                          <Td><span style={{ fontFamily: FONT_MONO, color: C.amber, fontSize: 12 }}>{b.slotId}</span></Td>
                          <Td>
                            <div style={{ fontWeight: 700, fontSize: 13, color: C.text }}>{b.userName || "—"}</div>
                            <div style={{ fontFamily: FONT_MONO, fontSize: 10, color: C.muted, marginTop: 2 }}>{b.userId}</div>
                          </Td>
                          <Td style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.muted }}>{fmtDate(b.bookingTime)}</Td>
                          <Td>
                            {b.status === "active"
                              ? pill(C.greenBg, C.green, "ACTIVE")
                              : pill(C.dim,     C.muted, b.status?.toUpperCase())}
                          </Td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </SectionCard>
            )}
          </div>
        )}

        {/* ══════════════════ USERS TAB ══════════════════ */}
        {tab === "users" && (
          <div>
            {/* Promote by email */}
            <SectionCard style={{ marginBottom: 14, overflow: "visible" }}>
              <div style={{ padding: "16px 20px", borderBottom: `1px solid ${C.border}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                  <Shield size={13} strokeWidth={1.5} color={C.amber} />
                  <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.amber, letterSpacing: "0.08em" }}>PROMOTE TO ADMIN</span>
                </div>
                <p style={{ margin: 0, fontFamily: FONT_MONO, fontSize: 10, color: C.muted }}>Grant admin privileges by email address</p>
              </div>
              <div className="promote-row" style={{ padding: "14px 20px", display: "flex", gap: 12, flexWrap: "wrap" }}>
                <DarkInput
                  value={promoteEmail}
                  onChange={e => setPromoteEmail(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handlePromoteByEmail()}
                  placeholder="user@example.com"
                  type="email"
                  style={{ flex: 1, minWidth: 200, maxWidth: 320 }}
                />
                <AmberBtn onClick={handlePromoteByEmail} disabled={promoting === "manual"} loading={promoting === "manual"}>
                  {promoting === "manual" ? "Promoting…" : "Promote"}
                </AmberBtn>
              </div>
            </SectionCard>

            {/* Users table */}
            {loading ? <LoadingSkeleton /> : users.length === 0 ? (
              <SectionCard><EmptyState Icon={Users} title="No users yet" desc="Users will appear here after they sign up." /></SectionCard>
            ) : (
              <SectionCard>
                {/* Table header row */}
                <div style={{ padding: "12px 18px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontWeight: 700, fontSize: 14, color: C.text }}>All Users</span>
                    <span style={{ fontFamily: FONT_MONO, fontSize: 10, color: C.amber, background: C.amberBg, padding: "2px 8px", borderRadius: 999 }}>{users.length}</span>
                  </div>
                  <span style={{ fontFamily: FONT_MONO, fontSize: 10, color: C.muted }}>
                    {users.filter(u => u.role === "admin").length} admin · {users.filter(u => u.role === "user").length} user
                  </span>
                </div>
                <div className="overflow-x">
                  <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 520 }}>
                    <thead><tr>
                      {["USER", "EMAIL", "ROLE", "JOINED", "ACTIONS"].map(h => <Th key={h}>{h}</Th>)}
                    </tr></thead>
                    <tbody>
                      {users.map(u => (
                        <tr key={u.userId} className="row-hover">
                          <Td>
                            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                              <div style={{
                                width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
                                background: u.role === "admin" ? C.amberBg : C.blueBg,
                                border: `1px solid ${u.role === "admin" ? "rgba(212,168,71,0.3)" : "rgba(56,189,248,0.3)"}`,
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontFamily: FONT_MONO, fontWeight: 500, fontSize: 12,
                                color: u.role === "admin" ? C.amber : C.blue,
                              }}>
                                {u.name?.[0]?.toUpperCase() || "?"}
                              </div>
                              <span style={{ fontWeight: 700, fontSize: 13, color: C.text }}>{u.name}</span>
                            </div>
                          </Td>
                          <Td style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.muted }}>{u.email}</Td>
                          <Td>
                            {u.role === "admin"
                              ? pill(C.amberBg, C.amber, "ADMIN")
                              : pill(C.blueBg,  C.blue,  "USER")}
                          </Td>
                          <Td style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.muted }}>
                            {u.createdAt
                              ? (u.createdAt._seconds
                                  ? new Date(u.createdAt._seconds * 1000).toLocaleDateString()
                                  : new Date(u.createdAt).toLocaleDateString())
                              : "—"}
                          </Td>
                          <Td>
                            {u.role !== "admin" ? (
                              <button
                                onClick={() => handlePromoteUser(u)}
                                disabled={promoting === u.userId}
                                style={{
                                  display: "flex", alignItems: "center", gap: 6,
                                  padding: "5px 12px", borderRadius: 7,
                                  border: `1px solid ${promoting === u.userId ? C.border2 : "rgba(212,168,71,0.4)"}`,
                                  background: "transparent",
                                  color: promoting === u.userId ? C.muted : C.amber,
                                  fontFamily: FONT_MONO, fontSize: 11,
                                  cursor: promoting === u.userId ? "not-allowed" : "pointer",
                                  transition: "all 0.15s",
                                }}
                              >
                                {promoting === u.userId ? <SpinIcon /> : <ChevronUp size={11} strokeWidth={2} />}
                                {promoting === u.userId ? "Promoting…" : "Make Admin"}
                              </button>
                            ) : (
                              <span style={{ fontFamily: FONT_MONO, fontSize: 10, color: C.muted, fontStyle: "italic" }}>
                                Already admin
                              </span>
                            )}
                          </Td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </SectionCard>
            )}
          </div>
        )}
      </div>

      {/* ── Delete confirm modal ── */}
      {confirmDelete && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 1000,
          background: "rgba(0,0,0,0.8)", backdropFilter: "blur(6px)",
          display: "flex", alignItems: "center", justifyContent: "center", padding: 16,
        }}>
          <div style={{
            background: C.surface, border: `1px solid ${C.border}`,
            borderRadius: 16, padding: "28px 24px", maxWidth: 340, width: "100%", textAlign: "center",
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12, background: C.redBg,
              display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px",
            }}>
              <AlertTriangle size={20} strokeWidth={1.5} color={C.red} />
            </div>
            <h3 style={{ margin: "0 0 8px", fontSize: 17, fontWeight: 800, color: C.text, letterSpacing: "-0.02em" }}>
              Delete Slot?
            </h3>
            <p style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.muted, marginBottom: 24, lineHeight: 1.6 }}>
              Are you sure you want to delete slot{" "}
              <span style={{ color: C.amber }}>{confirmDelete.slotNumber}</span>? This cannot be undone.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={() => setConfirmDelete(null)}
                style={{
                  flex: 1, padding: "11px", borderRadius: 9,
                  border: `1px solid ${C.border2}`, background: "transparent",
                  color: C.muted, fontFamily: FONT_SANS, fontWeight: 700, fontSize: 13, cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(confirmDelete)}
                style={{
                  flex: 1, padding: "11px", borderRadius: 9, border: "none",
                  background: C.red, color: "#fff",
                  fontFamily: FONT_SANS, fontWeight: 700, fontSize: 13, cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}