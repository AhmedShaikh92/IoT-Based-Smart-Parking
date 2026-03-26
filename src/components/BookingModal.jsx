import React, { useState } from 'react';
import { bookSlot } from '../services/api';
import { toast } from './Toast';
import { X, Clock, Zap, Calendar, MapPin, CheckCircle, Loader2, Edit3 } from 'lucide-react';

const DURATIONS = [
  { label: '30 min', minutes: 30,  Icon: Zap      },
  { label: '1 hour', minutes: 60,  Icon: Clock    },
  { label: '2 hours',minutes: 120, Icon: Clock    },
  { label: '4 hours',minutes: 240, Icon: Clock    },
  { label: '8 hours',minutes: 480, Icon: Calendar },
  { label: 'Custom', minutes: null, Icon: Edit3   },
];

export default function BookingModal({ slot, onClose, onBooked }) {
  const [selected, setSelected]         = useState(60);
  const [customMinutes, setCustomMinutes] = useState('');
  const [isCustom, setIsCustom]         = useState(false);
  const [loading, setLoading]           = useState(false);

  // ── original logic, untouched ──────────────────────────────────────────────
  const effectiveMinutes = isCustom ? parseInt(customMinutes) || 0 : selected;
  const expiryTime = effectiveMinutes > 0
    ? new Date(Date.now() + effectiveMinutes * 60 * 1000)
    : null;

  const formatExpiry = (date) => {
    if (!date) return '—';
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) +
      ', ' + date.toLocaleDateString([], { month: 'short', day: 'numeric' });
  };

  const formatDuration = (mins) => {
    if (!mins) return '—';
    if (mins < 60) return `${mins} min`;
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return m > 0 ? `${h}h ${m}m` : `${h} hour${h > 1 ? 's' : ''}`;
  };

  const handleConfirm = async () => {
    const mins = effectiveMinutes;
    if (!mins || mins < 15) { toast.error('Minimum booking duration is 15 minutes.'); return; }
    if (mins > 1440)        { toast.error('Maximum booking duration is 24 hours.');   return; }
    setLoading(true);
    try {
      const res = await bookSlot(slot.id, mins);
      toast.success(`Slot ${slot.slotNumber} booked for ${formatDuration(mins)}! 🎉`);
      onBooked?.(res.data.data);
      onClose();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Booking failed.');
    } finally {
      setLoading(false);
    }
  };
  // ── end original logic ──────────────────────────────────────────────────────

  const isDisabled = loading || effectiveMinutes < 15;

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 2000,
        background: 'rgba(0,0,0,0.78)',
        backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 16,
      }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .bm * { box-sizing: border-box; }
        .bm { font-family: 'Sora', sans-serif; }
        .mono { font-family: 'IBM Plex Mono', monospace; }
        @keyframes bmIn { from { opacity:0; transform:translateY(14px) scale(0.98); } to { opacity:1; transform:translateY(0) scale(1); } }
        .bm-panel { animation: bmIn 0.32s cubic-bezier(0.16,1,0.3,1) both; }
        .dur-pill { transition: border-color 0.13s, background 0.13s; }
        .dur-pill:hover:not(.dp-on) { border-color: rgba(212,168,71,0.45) !important; }
        .xbtn:hover { background: rgba(255,255,255,0.09) !important; }
        .cbtn { transition: opacity 0.13s, transform 0.09s; }
        .cbtn:hover:not([disabled]) { opacity: 0.86; }
        .cbtn:active:not([disabled]) { transform: scale(0.982); }
        .cinput:focus { outline: none; border-color: #d4a847 !important; }
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button { -webkit-appearance:none; margin:0; }
        @keyframes spin { to { transform:rotate(360deg); } }
      `}</style>

      <div className="bm bm-panel" style={{
        width: '100%', maxWidth: 380,
        background: '#0d0d0d',
        border: '1px solid #222',
        borderRadius: 18, overflow: 'hidden',
      }}>

        {/* ── Header ── */}
        <div style={{
          padding: '18px 20px 14px',
          borderBottom: '1px solid #1a1a1a',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 34, height: 34, borderRadius: 9,
              background: '#141414', border: '1px solid #252525',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <MapPin size={14} strokeWidth={1.5} color="#d4a847" />
            </div>
            <div>
              <p className="mono" style={{ margin: 0, fontSize: 9, color: '#444', letterSpacing: '0.11em' }}>
                PARKING RESERVATION
              </p>
              <p style={{ margin: 0, fontSize: 18, fontWeight: 800, color: '#f2f2f2', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
                Slot {slot.slotNumber}
              </p>
            </div>
          </div>
          <button className="xbtn" onClick={onClose} style={{
            width: 30, height: 30, borderRadius: '50%',
            background: 'transparent', border: '1px solid #252525',
            color: '#555', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <X size={13} strokeWidth={2} />
          </button>
        </div>

        {/* ── Body ── */}
        <div style={{ padding: '16px 20px 20px' }}>

          <p className="mono" style={{ margin: '0 0 9px', fontSize: 9, color: '#444', letterSpacing: '0.11em' }}>
            DURATION
          </p>

          {/* Duration grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 7, marginBottom: 14 }}>
            {DURATIONS.map(({ label, minutes, Icon }) => {
              const isThisCustom = minutes === null;
              const isActive = isThisCustom ? isCustom : (!isCustom && selected === minutes);
              return (
                <button
                  key={label}
                  className={`dur-pill${isActive ? ' dp-on' : ''}`}
                  onClick={() => {
                    if (isThisCustom) setIsCustom(true);
                    else { setIsCustom(false); setSelected(minutes); }
                  }}
                  style={{
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center', gap: 5,
                    padding: '9px 4px', borderRadius: 9,
                    border: `1px solid ${isActive ? '#d4a847' : '#1e1e1e'}`,
                    background: isActive ? 'rgba(212,168,71,0.07)' : '#111',
                    cursor: 'pointer',
                  }}
                >
                  <Icon size={13} strokeWidth={1.5} color={isActive ? '#d4a847' : '#383838'} />
                  <span className="mono" style={{
                    fontSize: 10, letterSpacing: '0.02em',
                    color: isActive ? '#d4a847' : '#484848',
                    fontWeight: isActive ? 500 : 400,
                    whiteSpace: 'nowrap',
                  }}>
                    {label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Custom input */}
          {isCustom && (
            <div style={{ marginBottom: 14 }}>
              <p className="mono" style={{ margin: '0 0 7px', fontSize: 9, color: '#444', letterSpacing: '0.11em' }}>
                MINUTES · 15–1440
              </p>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <input
                  type="number" min="15" max="1440"
                  value={customMinutes}
                  onChange={e => setCustomMinutes(e.target.value)}
                  placeholder="e.g. 90"
                  autoFocus
                  className="cinput mono"
                  style={{
                    flex: 1, background: '#111', border: '1px solid #252525',
                    borderRadius: 8, padding: '9px 12px',
                    color: '#f0f0f0', fontSize: 14, fontWeight: 500,
                  }}
                />
                <span className="mono" style={{ fontSize: 11, color: '#555', whiteSpace: 'nowrap' }}>
                  = {formatDuration(parseInt(customMinutes) || 0)}
                </span>
              </div>
              <p className="mono" style={{ margin: '5px 0 0', fontSize: 9, color: '#333' }}>
                Min 15 min · Max 24 hours (1440 min)
              </p>
            </div>
          )}

          {/* Summary strip */}
          <div style={{
            background: '#111', border: '1px solid #1a1a1a',
            borderRadius: 11, padding: '12px 14px', marginBottom: 14,
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', rowGap: 12 }}>
              {[
                { label: 'SLOT',       value: slot.slotNumber,                   amber: false },
                { label: 'DURATION',   value: formatDuration(effectiveMinutes),  amber: false },
                { label: 'START',      value: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), amber: false },
                { label: 'EXPIRES',    value: formatExpiry(expiryTime),          amber: true  },
              ].map(({ label, value, amber }) => (
                <div key={label}>
                  <p className="mono" style={{ margin: '0 0 3px', fontSize: 8, color: '#333', letterSpacing: '0.12em' }}>
                    {label}
                  </p>
                  <p className="mono" style={{
                    margin: 0, fontSize: 12, fontWeight: 500,
                    color: amber ? '#d4a847' : '#b8b8b8',
                    letterSpacing: '0.01em',
                  }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Confirm button */}
          <button
            className="cbtn"
            onClick={handleConfirm}
            disabled={isDisabled}
            style={{
              width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              padding: '13px 16px', borderRadius: 11, border: 'none',
              background: isDisabled ? '#151515' : '#d4a847',
              color: isDisabled ? '#2a2a2a' : '#0d0d0d',
              fontFamily: "'Sora', sans-serif",
              fontWeight: 700, fontSize: 13, letterSpacing: '-0.01em',
              cursor: isDisabled ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? (
              <>
                <Loader2 size={14} strokeWidth={2} style={{ animation: 'spin 0.8s linear infinite' }} />
                <span>Confirming...</span>
              </>
            ) : (
              <>
                <CheckCircle size={14} strokeWidth={2} />
                <span>Confirm Booking · {formatDuration(effectiveMinutes)}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}