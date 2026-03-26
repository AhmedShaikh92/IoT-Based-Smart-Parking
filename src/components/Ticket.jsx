import React, { useState, useEffect, useCallback, useRef } from 'react';
import { unbookSlot, extendSlot } from '../services/api';
import { toast } from './Toast';
import { Clock, LogOut, Plus, AlertTriangle, CheckCircle, Zap, Timer } from 'lucide-react';

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  @keyframes spin        { to { transform: rotate(360deg); } }
  @keyframes urgentPulse { 0%,100% { opacity:1; } 50% { opacity:0.5; } }
  @keyframes fadeIn      { from { opacity:0; } to { opacity:1; } }
  @keyframes modalIn     { from { opacity:0; transform:scale(0.95) translateY(10px); } to { opacity:1; transform:scale(1) translateY(0); } }

  .tk-root {
    max-width: 480px;
    margin: 0 auto;
    background: #0d0d0d;
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 20px;
    overflow: hidden;
    font-family: 'Sora', sans-serif;
  }

  /* Header */
  .tk-header {
    background: #141414;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    padding: 20px 24px;
  }

  .tk-header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
  }

  .tk-logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .tk-logo-icon {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: #d4a847;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .tk-logo-sup {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    color: #4a4a4a;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 2px;
  }

  .tk-logo-title {
    font-size: 15px;
    font-weight: 800;
    color: #f0ede8;
    letter-spacing: -0.02em;
  }

  .tk-status-badge {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 700;
    border: 1px solid;
  }

  .tk-ticket-num {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.06);
    padding: 6px 12px;
    border-radius: 8px;
  }

  .tk-ticket-num-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    color: #4a4a4a;
    text-transform: uppercase;
    letter-spacing: 0.12em;
  }

  .tk-ticket-num-val {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 13px;
    font-weight: 900;
    color: #f0ede8;
    letter-spacing: 0.08em;
  }

  .tk-ext-badge {
    display: inline-flex;
    align-items: center;
    background: rgba(212,168,71,0.1);
    border: 1px solid rgba(212,168,71,0.2);
    padding: 4px 10px;
    border-radius: 8px;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    color: #d4a847;
    margin-left: 8px;
  }

  /* Zigzag */
  .tk-tear {
    position: relative;
    height: 16px;
    background: #0d0d0d;
    overflow: hidden;
  }

  /* Body */
  .tk-body {
    padding: 20px 24px 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  /* Slot + Duration */
  .tk-slot-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 12px;
    overflow: hidden;
  }

  .tk-slot-cell {
    padding: 14px 16px;
    text-align: center;
  }

  .tk-slot-cell:first-child {
    background: rgba(255,255,255,0.02);
    border-right: 1px solid rgba(255,255,255,0.06);
  }

  .tk-cell-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #4a4a4a;
    margin-bottom: 6px;
  }

  .tk-slot-number {
    font-size: 36px;
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1;
    color: #f0ede8;
  }

  .tk-duration-value {
    font-size: 22px;
    font-weight: 900;
    letter-spacing: -0.02em;
    color: #d4a847;
    line-height: 1;
  }

  .tk-duration-sub {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    color: #4a4a4a;
    margin-top: 3px;
  }

  /* Time cards */
  .tk-times {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .tk-time-card {
    background: #141414;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 10px;
    padding: 12px 14px;
  }

  .tk-time-card-label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #4a4a4a;
    margin-bottom: 6px;
  }

  .tk-time-card-value {
    font-size: 13px;
    font-weight: 700;
    color: #f0ede8;
  }

  /* Countdown */
  .tk-countdown {
    border-radius: 12px;
    border: 1px solid;
    padding: 16px;
    text-align: center;
  }

  .tk-countdown-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 12px;
  }

  .tk-countdown-time {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 44px;
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1;
    font-variant-numeric: tabular-nums;
  }

  .tk-countdown-expired {
    font-size: 18px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .tk-progress-track {
    margin-top: 14px;
    height: 4px;
    background: rgba(255,255,255,0.06);
    border-radius: 999px;
    overflow: hidden;
  }

  .tk-progress-bar {
    height: 100%;
    border-radius: 999px;
    transition: width 1s linear;
  }

  .tk-progress-pct {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    color: #4a4a4a;
    margin-top: 6px;
  }

  .tk-urgent { animation: urgentPulse 1s ease-in-out infinite; }

  /* Barcode */
  .tk-barcode {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 2px;
    height: 24px;
    opacity: 0.08;
  }

  .tk-barcode-bar {
    width: 2px;
    border-radius: 1px;
    background: #f0ede8;
  }

  /* Actions */
  .tk-actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .tk-btn {
    width: 100%;
    padding: 13px;
    border-radius: 10px;
    border: none;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    font-family: 'Sora', sans-serif;
    transition: all 0.15s;
  }

  .tk-btn-extend {
    background: #d4a847;
    color: #0d0d0d;
  }
  .tk-btn-extend:hover:not(:disabled) { background: #e0b856; }
  .tk-btn-extend:disabled { opacity: 0.5; cursor: not-allowed; }

  .tk-btn-release {
    background: transparent;
    color: #6a6a6a;
    border: 1px solid rgba(255,255,255,0.08) !important;
  }
  .tk-btn-release:hover:not(:disabled) { background: rgba(255,255,255,0.04); color: #f0ede8; }
  .tk-btn-release:disabled { opacity: 0.4; cursor: not-allowed; }

  .tk-spinner {
    width: 14px; height: 14px;
    border-radius: 50%;
    display: inline-block;
    flex-shrink: 0;
    animation: spin 0.65s linear infinite;
  }

  /* Expiry Dialog */
  .tk-overlay {
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    font-family: 'Sora', sans-serif;
    animation: fadeIn 0.2s ease;
  }

  .tk-dialog {
    width: 100%;
    max-width: 380px;
    background: #0d0d0d;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 20px;
    overflow: hidden;
    animation: modalIn 0.25s ease;
  }

  .tk-dialog-header {
    background: #141414;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
  }

  .tk-ring-wrap { position: relative; width: 72px; height: 72px; }

  .tk-ring-center {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 900;
  }

  .tk-dialog-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    font-weight: 800;
    color: #f0ede8;
  }

  .tk-dialog-sub {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 12px;
    color: #6a6a6a;
    text-align: center;
  }

  .tk-dialog-body {
    padding: 20px 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .tk-dialog-desc {
    font-size: 13px;
    color: #6a6a6a;
    text-align: center;
    line-height: 1.6;
  }

  .tk-dialog-desc em {
    font-style: normal;
    color: #d4a847;
    font-weight: 600;
  }

  .tk-dialog-actions {
    display: flex;
    gap: 10px;
  }

  .tk-dialog-btn {
    flex: 1;
    padding: 12px;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    font-family: 'Sora', sans-serif;
    transition: all 0.15s;
  }

  .tk-dialog-btn-out {
    background: transparent;
    border: 1px solid rgba(255,255,255,0.08);
    color: #6a6a6a;
  }
  .tk-dialog-btn-out:hover:not(:disabled) { color: #f0ede8; border-color: rgba(255,255,255,0.18); }

  .tk-dialog-btn-extend {
    background: #d4a847;
    border: none;
    color: #0d0d0d;
  }
  .tk-dialog-btn-extend:hover:not(:disabled) { background: #e0b856; }

  .tk-dialog-btn:disabled { opacity: 0.4; cursor: not-allowed; }
`;

/* ─── Countdown ───────────────────────────────────────────────────────────── */
function useCountdown(expiresAt) {
  const calc = useCallback(() => {
    const diff = new Date(expiresAt).getTime() - Date.now();
    if (diff <= 0) return { total: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    return {
      total: diff,
      hours:   Math.floor(diff / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
      expired: false,
    };
  }, [expiresAt]);

  const [remaining, setRemaining] = useState(calc);
  useEffect(() => {
    setRemaining(calc());
    const tick = setInterval(() => setRemaining(calc()), 1000);
    return () => clearInterval(tick);
  }, [calc]);
  return remaining;
}

/* ─── Spinner ─────────────────────────────────────────────────────────────── */
function Spinner({ color = '#0d0d0d' }) {
  return (
    <span
      className="tk-spinner"
      style={{ border: `2px solid ${color}40`, borderTopColor: color }}
    />
  );
}

/* ─── Expiry Dialog ───────────────────────────────────────────────────────── */
const AUTO_EXTEND_SECONDS = 30;
const AUTO_EXTEND_MINUTES = 30;

function ExpiryDialog({ slotId, slotNumber, onExtended, onClockOut }) {
  const [secs, setSecs]     = useState(AUTO_EXTEND_SECONDS);
  const [acting, setActing] = useState(false);
  const hasActed = useRef(false);

  useEffect(() => {
    const tick = setInterval(() => {
      setSecs(s => { if (s <= 1) { clearInterval(tick); return 0; } return s - 1; });
    }, 1000);
    return () => clearInterval(tick);
  }, []);

  useEffect(() => {
    if (secs === 0 && !hasActed.current) handleExtend(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secs]);

  const handleExtend = async (isAuto = false) => {
    if (hasActed.current) return;
    hasActed.current = true;
    setActing(true);
    try {
      const res = await extendSlot(slotId, AUTO_EXTEND_MINUTES);
      toast.success(isAuto
        ? `No response — auto-added ${AUTO_EXTEND_MINUTES} min to Slot ${slotNumber}.`
        : `+${AUTO_EXTEND_MINUTES} min added to Slot ${slotNumber}.`
      );
      onExtended(res.data.data);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to extend.');
      hasActed.current = false;
      setActing(false);
    }
  };

  const handleClockOut = async () => {
    if (hasActed.current) return;
    hasActed.current = true;
    setActing(true);
    try {
      await unbookSlot(slotId);
      toast.success('Clocked out. Slot released.');
      onClockOut();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to release.');
      hasActed.current = false;
      setActing(false);
    }
  };

  const pct   = secs / AUTO_EXTEND_SECONDS;
  const r     = 28;
  const circ  = 2 * Math.PI * r;
  const isLow = secs <= 10;

  return (
    <div
      className="tk-overlay"
      style={{ background: 'rgba(6,4,18,0.88)', backdropFilter: 'blur(12px)' }}
    >
      <div className="tk-dialog">
        <div className="tk-dialog-header">
          {/* Ring */}
          <div className="tk-ring-wrap">
            <svg width="72" height="72" style={{ transform: 'rotate(-90deg)' }}>
              <circle cx="36" cy="36" r={r} fill="none" stroke="#1e1e1e" strokeWidth="4" />
              <circle
                cx="36" cy="36" r={r} fill="none"
                stroke={isLow ? '#ef4444' : '#d4a847'}
                strokeWidth="4"
                strokeDasharray={`${circ * pct} ${circ}`}
                strokeLinecap="round"
                style={{ transition: 'stroke-dasharray 1s linear' }}
              />
            </svg>
            <div
              className="tk-ring-center"
              style={{ color: isLow ? '#ef4444' : '#d4a847', animation: isLow ? 'urgentPulse 0.8s infinite' : 'none' }}
            >
              {secs}
            </div>
          </div>

          <div className="tk-dialog-title">
            <AlertTriangle size={18} color="#d4a847" strokeWidth={2.5} />
            Time's Up!
          </div>
          <p className="tk-dialog-sub">
            Slot <strong style={{ color: '#f0ede8' }}>{slotNumber}</strong>
            {' · '}Auto-extending in{' '}
            <strong style={{ color: isLow ? '#ef4444' : '#d4a847' }}>{secs}s</strong>
          </p>
        </div>

        <div className="tk-dialog-body">
          <p className="tk-dialog-desc">
            Your parking time has expired. Extend or clock out.
            <br />
            No response = <em>+{AUTO_EXTEND_MINUTES} min auto-added</em>
          </p>

          <div className="tk-dialog-actions">
            <button onClick={handleClockOut} disabled={acting} className="tk-dialog-btn tk-dialog-btn-out">
              {acting ? <Spinner color="#6a6a6a" /> : <LogOut size={14} strokeWidth={2.5} />}
              Clock Out
            </button>
            <button onClick={() => handleExtend(false)} disabled={acting} className="tk-dialog-btn tk-dialog-btn-extend">
              {acting ? <Spinner color="#0d0d0d" /> : <Plus size={14} strokeWidth={3} />}
              +{AUTO_EXTEND_MINUTES} Min
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Ticket ─────────────────────────────────────────────────────────── */
export default function Ticket({ booking: initialBooking, onUnbooked, onExtended }) {
  const [booking, setBooking]           = useState(initialBooking);
  const [unloading, setUnloading]       = useState(false);
  const [extending, setExtending]       = useState(false);
  const [showExpiryDialog, setShowExpiryDialog] = useState(false);
  const dialogShownRef = useRef(false);

  useEffect(() => { setBooking(initialBooking); }, [initialBooking]);

  const remaining = useCountdown(booking.expiresAt);
  const { hours, minutes, seconds, expired, total } = remaining;

  useEffect(() => {
    if (expired && !dialogShownRef.current) {
      dialogShownRef.current = true;
      setShowExpiryDialog(true);
    }
  }, [expired]);

  const durationMs  = booking.durationMinutes * 60 * 1000;
  const progressPct = expired ? 100 : Math.max(0, Math.min(100, ((durationMs - total) / durationMs) * 100));
  const isUrgent    = total > 0 && total < 5 * 60 * 1000;
  const isWarning   = total > 0 && total < 15 * 60 * 1000;

  const pad = n => String(n).padStart(2, '0');
  const fmtDate = iso => new Date(iso).toLocaleString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  const fmtDur  = mins => { const h = Math.floor(mins / 60), m = mins % 60; return m > 0 ? `${h}h ${m}m` : h > 0 ? `${h}h` : `${mins}m`; };

  // Colors per state
  const accentColor = expired ? '#ef4444' : isUrgent ? '#f97316' : isWarning ? '#f59e0b' : '#d4a847';
  const accentBg    = expired
    ? { background: 'rgba(127,29,29,0.2)',   borderColor: 'rgba(153,27,27,0.3)'       }
    : isUrgent
    ? { background: 'rgba(124,45,18,0.2)',   borderColor: 'rgba(154,52,18,0.3)'       }
    : isWarning
    ? { background: 'rgba(120,53,15,0.15)',  borderColor: 'rgba(146,64,14,0.3)'       }
    : { background: 'rgba(212,168,71,0.06)', borderColor: 'rgba(212,168,71,0.2)'      };

  const barColor = expired ? '#ef4444' : isUrgent ? '#f97316' : isWarning ? '#f59e0b' : '#d4a847';

  const statusBadgeStyle = {
    background:  `${accentColor}18`,
    borderColor: `${accentColor}35`,
    color:       accentColor,
    animation:   isUrgent && !expired ? 'urgentPulse 1s infinite' : 'none',
  };

  const statusIcon  = expired  ? <AlertTriangle size={12} strokeWidth={2.5} />
                    : isUrgent ? <Zap           size={12} strokeWidth={2.5} />
                    : isWarning? <Timer         size={12} strokeWidth={2.5} />
                    :            <CheckCircle   size={12} strokeWidth={2.5} />;
  const statusLabel = expired ? 'Expired' : isUrgent ? 'Urgent' : isWarning ? 'Ending Soon' : 'Active';

  const handleExtendedLocal = (data) => {
    setShowExpiryDialog(false);
    dialogShownRef.current = false;
    const updated = { ...booking, expiresAt: data.newExpiresAt, durationMinutes: data.newDurationMinutes };
    setBooking(updated);
    onExtended?.(updated);
  };

  const handleClockOut = () => { setShowExpiryDialog(false); onUnbooked?.(); };

  const handleManualExtend = async () => {
    setExtending(true);
    try {
      const res = await extendSlot(booking.slotId, 30);
      toast.success(`+30 min added to Slot ${booking.slot?.slotNumber}.`);
      handleExtendedLocal(res.data.data);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Extension failed.');
    } finally {
      setExtending(false);
    }
  };

  const handleUnbook = async () => {
    setUnloading(true);
    try {
      await unbookSlot(booking.slotId);
      toast.success('Slot released early.');
      onUnbooked?.();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to release slot.');
      setUnloading(false);
    }
  };

  return (
    <>
      <style>{STYLES}</style>

      <div className="tk-root">

        {/* Header */}
        <div className="tk-header">
          <div className="tk-header-row">
            <div className="tk-logo">
              <div className="tk-logo-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#0d0d0d">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div>
                <div className="tk-logo-sup">Smart Parking</div>
                <div className="tk-logo-title">Parking Ticket</div>
              </div>
            </div>
            <div className="tk-status-badge" style={statusBadgeStyle}>
              {statusIcon}
              {statusLabel}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 6 }}>
            <div className="tk-ticket-num">
              <span className="tk-ticket-num-label">Ticket</span>
              <span className="tk-ticket-num-val">
                {booking.ticketNumber || booking.bookingId?.slice(0, 12).toUpperCase()}
              </span>
            </div>
            {booking.extensionCount > 0 && (
              <span className="tk-ext-badge">Extended ×{booking.extensionCount}</span>
            )}
          </div>
        </div>

        {/* Zigzag tear */}
        <div className="tk-tear">
          <svg viewBox="0 0 480 16" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
            <path
              d="M0,0 L0,16 L480,16 L480,0 Q472,14 464,0 Q456,14 448,0 Q440,14 432,0 Q424,14 416,0 Q408,14 400,0 Q392,14 384,0 Q376,14 368,0 Q360,14 352,0 Q344,14 336,0 Q328,14 320,0 Q312,14 304,0 Q296,14 288,0 Q280,14 272,0 Q264,14 256,0 Q248,14 240,0 Q232,14 224,0 Q216,14 208,0 Q200,14 192,0 Q184,14 176,0 Q168,14 160,0 Q152,14 144,0 Q136,14 128,0 Q120,14 112,0 Q104,14 96,0 Q88,14 80,0 Q72,14 64,0 Q56,14 48,0 Q40,14 32,0 Q24,14 16,0 Q8,14 0,0Z"
              fill="#141414"
            />
          </svg>
        </div>

        {/* Body */}
        <div className="tk-body">

          {/* Slot + Duration */}
          <div className="tk-slot-row">
            <div className="tk-slot-cell">
              <div className="tk-cell-label">Slot</div>
              <div className="tk-slot-number">{booking.slot?.slotNumber || '—'}</div>
            </div>
            <div className="tk-slot-cell">
              <div className="tk-cell-label">Duration</div>
              <div className="tk-duration-value">{fmtDur(booking.durationMinutes)}</div>
              <div className="tk-duration-sub">{booking.durationMinutes} min</div>
            </div>
          </div>

          {/* Times */}
          <div className="tk-times">
            {[
              { label: 'Booked At',  value: fmtDate(booking.bookingTime), icon: <CheckCircle size={11} color="#34d399" strokeWidth={2.5} /> },
              { label: 'Expires At', value: fmtDate(booking.expiresAt),   icon: <Clock       size={11} color="#d4a847" strokeWidth={2.5} /> },
            ].map(({ label, value, icon }) => (
              <div key={label} className="tk-time-card">
                <div className="tk-time-card-label">{icon} {label}</div>
                <div className="tk-time-card-value">{value}</div>
              </div>
            ))}
          </div>

          {/* Countdown */}
          <div className="tk-countdown" style={accentBg}>
            <div className="tk-countdown-label" style={{ color: accentColor }}>
              {expired ? 'Time Expired' : 'Time Remaining'}
            </div>

            {expired ? (
              <div className="tk-countdown-expired" style={{ color: accentColor }}>
                <AlertTriangle size={18} strokeWidth={2.5} />
                Checking with you…
              </div>
            ) : (
              <div
                className={`tk-countdown-time ${isUrgent ? 'tk-urgent' : ''}`}
                style={{ color: accentColor }}
              >
                {pad(hours)}:{pad(minutes)}:{pad(seconds)}
              </div>
            )}

            <div className="tk-progress-track">
              <div
                className="tk-progress-bar"
                style={{ width: `${progressPct}%`, background: barColor }}
              />
            </div>
            <div className="tk-progress-pct">{Math.round(progressPct)}% elapsed</div>
          </div>

          {/* Barcode */}
          <div className="tk-barcode">
            {[3,6,4,8,3,5,9,4,6,3,7,5,4,8,3,6,4,9,5,3,7,4,6,8,3,5,4,9,6,3,7,5,4,8,3,6,4,7,5,3].map((h, i) => (
              <div key={i} className="tk-barcode-bar" style={{ height: h * 3 }} />
            ))}
          </div>

          {/* Actions */}
          {!expired && (
            <div className="tk-actions">
              <button
                onClick={handleManualExtend}
                disabled={extending}
                className="tk-btn tk-btn-extend"
              >
                {extending ? <Spinner color="#0d0d0d" /> : <Plus size={16} strokeWidth={3} />}
                Add 30 Min
              </button>
              <button
                onClick={handleUnbook}
                disabled={unloading}
                className="tk-btn tk-btn-release"
              >
                {unloading ? <Spinner color="#6a6a6a" /> : <LogOut size={14} strokeWidth={2.5} />}
                {unloading ? 'Releasing…' : 'Release Slot Early'}
              </button>
            </div>
          )}

        </div>
      </div>

      {showExpiryDialog && (
        <ExpiryDialog
          slotId={booking.slotId}
          slotNumber={booking.slot?.slotNumber}
          onExtended={handleExtendedLocal}
          onClockOut={handleClockOut}
        />
      )}
    </>
  );
}