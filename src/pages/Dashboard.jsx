import React, { useState, useEffect, useCallback, useRef } from 'react';
import Navbar from '../components/Navbar';
import SlotCard from '../components/SlotCard';
import Ticket from '../components/Ticket';
import { getSlots, getMyBooking, expireBookings } from '../services/api';
import { toast } from '../components/Toast';
import { getUser } from '../utils/auth';
import { ParkingSquare, CheckCircle2, Car, BarChart3, RefreshCw, Ticket as TicketIcon, ChevronUp, ChevronDown } from 'lucide-react';

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  @keyframes shimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  .db-root {
    min-height: 100vh;
    background: #0d0d0d;
    font-family: 'Sora', sans-serif;
    color: #f0ede8;
  }

  .db-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 24px;
  }

  .db-eyebrow {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #d4a847;
    margin-bottom: 12px;
    animation: fadeUp 0.4s ease both 0.05s;
  }

  .db-heading {
    font-size: 32px;
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.1;
    color: #f0ede8;
    margin-bottom: 8px;
    animation: fadeUp 0.4s ease both 0.1s;
  }

  .db-heading-accent { color: #d4a847; }

  .db-subheading {
    font-size: 14px;
    color: #575757;
    margin-bottom: 36px;
    animation: fadeUp 0.4s ease both 0.15s;
  }

  .db-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin-bottom: 32px;
    animation: fadeUp 0.4s ease both 0.2s;
  }

  @media (max-width: 768px) {
    .db-stats { grid-template-columns: repeat(2, 1fr); }
    .db-container { padding: 24px 16px; }
  }

  .db-stat-card {
    background: #141414;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 12px;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .db-stat-icon {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .db-stat-value {
    font-size: 22px;
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1;
  }

  .db-stat-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #4a4a4a;
    margin-top: 3px;
  }

  /* Booking banner */
  .db-banner {
    border-radius: 12px;
    border: 1px solid;
    padding: 14px 16px;
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 20px;
  }

  .db-banner-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .db-banner-flex { flex: 1; min-width: 0; }

  .db-banner-title {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 3px;
  }

  .db-banner-sub {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
  }

  .db-banner-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 7px 12px;
    border-radius: 8px;
    border: none;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    flex-shrink: 0;
    font-family: 'Sora', sans-serif;
    transition: opacity 0.15s;
    background: none;
  }
  .db-banner-btn:hover { opacity: 0.75; }

  /* Filter bar */
  .db-filter-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 12px;
  }

  .db-filter-group { display: flex; gap: 8px; }

  .db-filter-btn {
    padding: 7px 16px;
    border-radius: 999px;
    border: 1px solid;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    font-family: 'Sora', sans-serif;
    text-transform: capitalize;
    transition: all 0.15s;
  }

  .db-filter-btn-active {
    background: #d4a847;
    color: #0d0d0d;
    border-color: #d4a847;
  }

  .db-filter-btn-inactive {
    background: transparent;
    color: #6a6a6a;
    border-color: rgba(255,255,255,0.08);
  }
  .db-filter-btn-inactive:hover {
    color: #f0ede8;
    border-color: rgba(255,255,255,0.18);
  }

  .db-refresh-area { display: flex; align-items: center; gap: 12px; }

  .db-timestamp {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    color: #3a3a3a;
  }

  .db-refresh-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 7px 12px;
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.08);
    background: transparent;
    color: #6a6a6a;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-family: 'Sora', sans-serif;
    transition: all 0.15s;
  }
  .db-refresh-btn:hover { color: #f0ede8; border-color: rgba(255,255,255,0.18); }
  .db-refresh-btn:disabled { opacity: 0.4; cursor: not-allowed; }

  .db-spin { animation: spin 0.65s linear infinite; }

  /* Grid */
  .db-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    gap: 16px;
  }

  /* Shimmer */
  .db-shimmer {
    border-radius: 12px;
    height: 200px;
    background: linear-gradient(90deg, #1a1a1a 25%, #222 50%, #1a1a1a 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }

  /* Empty state */
  .db-empty {
    text-align: center;
    padding: 80px 20px;
    background: #141414;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 16px;
  }

  .db-empty-icon { font-size: 48px; margin-bottom: 16px; }
  .db-empty-title { font-size: 16px; font-weight: 700; color: #f0ede8; margin-bottom: 6px; }
  .db-empty-sub { font-size: 13px; color: #4a4a4a; }
`;

function getTimeOfDay() {
  const h = new Date().getHours();
  if (h < 12) return 'morning';
  if (h < 17) return 'afternoon';
  return 'evening';
}

export default function Dashboard() {
  const [slots, setSlots]               = useState([]);
  const [activeBooking, setActiveBooking] = useState(null);
  const [loading, setLoading]           = useState(true);
  const [filter, setFilter]             = useState('all');
  const [lastRefresh, setLastRefresh]   = useState(new Date());
  const [showTicket, setShowTicket]     = useState(false);
  const [refreshing, setRefreshing]     = useState(false);

  const user          = getUser();
  const currentUserId = user?.userId;
  const hasAutoOpenedTicket = useRef(false);
  const lastExtendedAt      = useRef(null);

  const fetchSlots = useCallback(async (silent = false) => {
    if (!silent) setLoading(true);
    try {
      const res = await getSlots();
      setSlots(res.data.data || []);
      setLastRefresh(new Date());
    } catch {
      if (!silent) toast.error('Failed to load slots.');
    } finally {
      if (!silent) setLoading(false);
    }
  }, []);

  const fetchMyBooking = useCallback(async () => {
    try {
      const res = await getMyBooking();
      const booking = res.data.data || null;
      setActiveBooking(prev => {
        // If we had an active booking but server says none exists now,
        // the admin force-released it — clean up ticket UI.
        if (prev && !booking) {
          setShowTicket(false);
          hasAutoOpenedTicket.current = false;
          lastExtendedAt.current = null;
          setTimeout(() => toast.info?.('Your parking slot was released by an admin.'), 0);
        }
        return booking;
      });
      if (booking && !hasAutoOpenedTicket.current) {
        hasAutoOpenedTicket.current = true;
        setShowTicket(true);
      }
    } catch { /* silent */ }
  }, []);

  const checkExpiry = useCallback(async () => {
    if (lastExtendedAt.current && Date.now() - lastExtendedAt.current < 90_000) return;
    try {
      const res = await expireBookings();
      if (res.data.data?.expired > 0) {
        fetchSlots(true);
        fetchMyBooking();
        toast.info?.(`${res.data.data.expired} slot(s) auto-released.`);
      }
    } catch { /* silent */ }
  }, [fetchSlots, fetchMyBooking]);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      await Promise.all([fetchSlots(true), fetchMyBooking()]);
      setLoading(false);
    };
    init();
    const s1 = setInterval(() => fetchSlots(true),   8000);
    const s2 = setInterval(() => fetchMyBooking(),   10000);
    const s3 = setInterval(() => checkExpiry(),      30000);
    return () => { clearInterval(s1); clearInterval(s2); clearInterval(s3); };
  }, [fetchSlots, fetchMyBooking, checkExpiry]);

  const handleUnbooked = useCallback(() => {
    setActiveBooking(null);
    setShowTicket(false);
    hasAutoOpenedTicket.current = false;
    lastExtendedAt.current = null;
    fetchSlots(true);
  }, [fetchSlots]);

  const handleExtended = useCallback((updatedBooking) => {
    lastExtendedAt.current = Date.now();
    setActiveBooking(prev => prev ? { ...prev, ...updatedBooking } : prev);
    fetchSlots(true);
  }, [fetchSlots]);

  const handleManualRefresh = async () => {
    setRefreshing(true);
    await Promise.all([fetchSlots(true), fetchMyBooking()]);
    setRefreshing(false);
  };

  const filtered       = filter === 'all' ? slots : slots.filter(s => s.status === filter);
  const freeCount      = slots.filter(s => s.status === 'free').length;
  const occupiedCount  = slots.filter(s => s.status === 'occupied').length;
  const occupancyPct   = slots.length ? Math.round((occupiedCount / slots.length) * 100) : 0;
  const bookingExpired = activeBooking?.expiresAt && new Date(activeBooking.expiresAt) <= new Date();

  const stats = [
    { label: 'Total Slots', value: slots.length,       icon: ParkingSquare, amber: false },
    { label: 'Available',   value: freeCount,           icon: CheckCircle2,  amber: true  },
    { label: 'Occupied',    value: occupiedCount,       icon: Car,           amber: false },
    { label: 'Occupancy',   value: `${occupancyPct}%`, icon: BarChart3,     amber: occupancyPct > 70 },
  ];

  return (
    <>
      <style>{STYLES}</style>
      <div className="db-root">
        <Navbar />

        <div className="db-container">

          {/* Header */}
          <p className="db-eyebrow">Dashboard</p>
          <h1 className="db-heading">
            Good {getTimeOfDay()},{' '}
            <span className="db-heading-accent">{user?.name?.split(' ')[0]}</span>
          </h1>
          <p className="db-subheading">Find and book your parking slot below.</p>

          {/* Stats */}
          <div className="db-stats">
            {stats.map(({ label, value, icon: Icon, amber }) => (
              <div key={label} className="db-stat-card">
                <div
                  className="db-stat-icon"
                  style={{ background: amber ? 'rgba(212,168,71,0.12)' : 'rgba(255,255,255,0.04)' }}
                >
                  <Icon size={16} strokeWidth={2} color={amber ? '#d4a847' : '#4a4a4a'} />
                </div>
                <div>
                  <div className="db-stat-value" style={{ color: amber ? '#d4a847' : '#f0ede8' }}>
                    {value}
                  </div>
                  <div className="db-stat-label">{label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Booking Banner */}
          {activeBooking && (
            <div
              className="db-banner"
              style={{
                background:   bookingExpired ? 'rgba(127,29,29,0.2)'       : 'rgba(212,168,71,0.06)',
                borderColor:  bookingExpired ? 'rgba(153,27,27,0.4)'        : 'rgba(212,168,71,0.2)',
              }}
            >
              <div
                className="db-banner-icon"
                style={{ background: bookingExpired ? 'rgba(153,27,27,0.3)' : 'rgba(212,168,71,0.12)' }}
              >
                <TicketIcon size={18} strokeWidth={2} color={bookingExpired ? '#f87171' : '#d4a847'} />
              </div>
              <div className="db-banner-flex">
                <div className="db-banner-title" style={{ color: bookingExpired ? '#fca5a5' : '#f0ede8' }}>
                  {bookingExpired
                    ? `Slot ${activeBooking.slot?.slotNumber} — Booking Expired`
                    : `Active Booking — Slot ${activeBooking.slot?.slotNumber}`}
                </div>
                <div className="db-banner-sub" style={{ color: bookingExpired ? '#ef4444' : '#d4a847' }}>
                  {bookingExpired
                    ? 'Your time is up. Respond to the dialog to extend or clock out.'
                    : `${activeBooking.ticketNumber} · Expires ${new Date(activeBooking.expiresAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
                </div>
              </div>
              <button
                onClick={() => setShowTicket(v => !v)}
                className="db-banner-btn"
                style={{
                  background: bookingExpired ? 'rgba(153,27,27,0.35)' : 'rgba(212,168,71,0.12)',
                  color:      bookingExpired ? '#fca5a5'               : '#d4a847',
                }}
              >
                {showTicket
                  ? <><ChevronUp size={13} /> Hide</>
                  : <><ChevronDown size={13} /> View Ticket</>}
              </button>
            </div>
          )}

          {/* Ticket Panel */}
          {showTicket && activeBooking && (
            <div style={{ marginBottom: 32 }}>
              <Ticket
                booking={activeBooking}
                onUnbooked={handleUnbooked}
                onExtended={handleExtended}
              />
            </div>
          )}

          {/* Filter + Refresh */}
          <div className="db-filter-bar">
            <div className="db-filter-group">
              {['all', 'free', 'occupied'].map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`db-filter-btn ${filter === f ? 'db-filter-btn-active' : 'db-filter-btn-inactive'}`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="db-refresh-area">
              <span className="db-timestamp">{lastRefresh.toLocaleTimeString()}</span>
              <button
                onClick={handleManualRefresh}
                disabled={refreshing}
                className="db-refresh-btn"
              >
                <RefreshCw
                  size={12}
                  strokeWidth={2.5}
                  style={refreshing ? { animation: 'spin 0.65s linear infinite' } : {}}
                />
                Refresh
              </button>
            </div>
          </div>

          {/* Slots */}
          {loading ? (
            <div className="db-grid">
              {[...Array(6)].map((_, i) => <div key={i} className="db-shimmer" />)}
            </div>
          ) : filtered.length === 0 ? (
            <div className="db-empty">
              <div className="db-empty-icon">
                {filter === 'free' ? '😔' : filter === 'occupied' ? '🎉' : '🅿️'}
              </div>
              <p className="db-empty-title">
                {filter === 'free' ? 'No free slots' : filter === 'occupied' ? 'No occupied slots!' : 'No slots yet'}
              </p>
              <p className="db-empty-sub">
                {filter === 'free' ? 'All slots are currently taken.' : 'All clear!'}
              </p>
            </div>
          ) : (
            <div className="db-grid">
              {filtered.map(slot => (
                <SlotCard
                  key={slot.id}
                  slot={slot}
                  currentUserId={currentUserId}
                  hasActiveBooking={!!activeBooking}
                  onRefresh={() => { fetchSlots(true); fetchMyBooking(); }}
                />
              ))}
            </div>
          )}

        </div>
      </div>
    </>
  );
}