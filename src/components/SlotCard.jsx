import React, { useState } from 'react';
import { unbookSlot } from '../services/api';
import { toast } from './Toast';
import BookingModal from './BookingModal';
import { Ticket, RotateCcw, Lock, Ban } from 'lucide-react';

const STYLES = `
  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes pulse-dot { 0%,100% { opacity:1; } 50% { opacity:0.3; } }

  .sc-card {
    position: relative;
    border-radius: 12px;
    border: 1px solid;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-family: 'Sora', sans-serif;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    overflow: hidden;
  }
  .sc-card:hover { transform: translateY(-2px); }

  .sc-card-free {
    background: #141414;
    border-color: rgba(255,255,255,0.08);
  }
  .sc-card-free:hover { border-color: rgba(255,255,255,0.14); }

  .sc-card-mine {
    background: #141414;
    border-color: rgba(212,168,71,0.3);
  }

  .sc-card-taken {
    background: #111;
    border-color: rgba(255,255,255,0.04);
  }

  .sc-card-blocked {
    background: #111;
    border-color: rgba(255,255,255,0.04);
  }

  /* Ribbon */
  .sc-ribbon {
    position: absolute;
    top: 12px;
    right: -22px;
    width: 88px;
    background: #d4a847;
    color: #0d0d0d;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 3px 0;
    text-align: center;
    transform: rotate(35deg);
  }

  /* Header row */
  .sc-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .sc-slot-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #4a4a4a;
    margin-bottom: 4px;
  }

  .sc-slot-number {
    font-size: 28px;
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1;
  }

  .sc-badge {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 700;
    border: 1px solid;
  }

  .sc-badge-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }

  .sc-badge-dot-pulse { animation: pulse-dot 2s ease-in-out infinite; }

  /* Icon area */
  .sc-icon-area {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
  }

  .sc-icon-box {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Action buttons */
  .sc-btn {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: none;
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

  .sc-btn-book {
    background: #d4a847;
    color: #0d0d0d;
  }
  .sc-btn-book:hover { background: #e0b856; }

  .sc-btn-unbook {
    background: transparent;
    color: #6a6a6a;
    border: 1px solid rgba(255,255,255,0.08) !important;
  }
  .sc-btn-unbook:hover { background: rgba(255,255,255,0.04); color: #f0ede8; }
  .sc-btn-unbook:disabled { opacity: 0.4; cursor: not-allowed; }

  .sc-info-box {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-family: 'Sora', sans-serif;
  }

  .sc-info-blocked {
    border: 1px dashed rgba(255,255,255,0.08);
    color: #3a3a3a;
    background: transparent;
  }

  .sc-info-taken {
    background: rgba(127,29,29,0.15);
    border: 1px solid rgba(153,27,27,0.2);
    color: #7f1d1d;
  }

  .sc-spinner {
    width: 13px;
    height: 13px;
    border-radius: 50%;
    border: 2px solid rgba(13,13,13,0.25);
    border-top-color: #0d0d0d;
    animation: spin 0.65s linear infinite;
    display: inline-block;
    flex-shrink: 0;
  }
`;

export default function SlotCard({ slot, currentUserId, hasActiveBooking, onRefresh }) {
  const [showModal, setShowModal] = useState(false);
  const [localStatus, setLocalStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const effectiveStatus = localStatus ?? slot.status;
  const isFree    = effectiveStatus === 'free';
  const isMySlot  = effectiveStatus === 'occupied' && slot.bookedBy === currentUserId;
  const canBook   = isFree && !hasActiveBooking;
  const isBlocked = isFree && hasActiveBooking;
  const isTaken   = !isFree && !isMySlot;

  const handleBooked = () => { setLocalStatus('occupied'); onRefresh?.(); };

  const handleUnbook = async () => {
    if (loading) return;
    setLoading(true);
    setLocalStatus('free');
    try {
      await unbookSlot(slot.id);
      toast.success(`Slot ${slot.slotNumber} released.`);
      onRefresh?.();
    } catch (err) {
      setLocalStatus(null);
      toast.error(err.response?.data?.message || 'Failed to release slot.');
    } finally {
      setLoading(false);
    }
  };

  const cardClass = isMySlot ? 'sc-card sc-card-mine'
    : canBook    ? 'sc-card sc-card-free'
    : isTaken    ? 'sc-card sc-card-taken'
    :               'sc-card sc-card-blocked';

  // Badge colors
  const badgeStyle = isMySlot
    ? { background: 'rgba(212,168,71,0.12)', borderColor: 'rgba(212,168,71,0.25)', color: '#d4a847' }
    : canBook
    ? { background: 'rgba(16,185,129,0.1)',  borderColor: 'rgba(16,185,129,0.25)', color: '#34d399' }
    : isTaken
    ? { background: 'rgba(127,29,29,0.15)',  borderColor: 'rgba(153,27,27,0.25)', color: '#f87171' }
    : { background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)', color: '#3a3a3a' };

  const badgeLabel = isMySlot ? 'Yours' : canBook ? 'Free' : isTaken ? 'Taken' : 'Locked';
  const dotColor   = isMySlot ? '#d4a847' : canBook ? '#34d399' : isTaken ? '#f87171' : '#3a3a3a';
  const numColor   = isMySlot ? '#d4a847' : canBook ? '#f0ede8' : '#3a3a3a';

  // Icon box style
  const iconBoxStyle = isMySlot
    ? { background: 'rgba(212,168,71,0.08)', borderColor: 'rgba(212,168,71,0.2)' }
    : canBook
    ? { background: 'rgba(16,185,129,0.08)', borderColor: 'rgba(16,185,129,0.2)' }
    : isTaken
    ? { background: 'rgba(127,29,29,0.15)',  borderColor: 'rgba(153,27,27,0.2)'  }
    : { background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)' };

  return (
    <>
      <style>{STYLES}</style>

      <div className={cardClass} style={{ opacity: loading ? 0.6 : 1 }}>

        {isMySlot && <div className="sc-ribbon">Mine</div>}

        {/* Header */}
        <div className="sc-header">
          <div>
            <div className="sc-slot-label">Slot</div>
            <div className="sc-slot-number" style={{ color: numColor }}>{slot.slotNumber}</div>
          </div>
          <div className="sc-badge" style={badgeStyle}>
            <span
              className="sc-badge-dot"
              style={{
                background: dotColor,
                animation: canBook ? 'pulse-dot 2s ease-in-out infinite' : 'none',
              }}
            />
            {badgeLabel}
          </div>
        </div>

        {/* Icon */}
        <div className="sc-icon-area">
          {loading ? (
            <span className="sc-spinner" style={{ borderTopColor: '#d4a847', borderColor: 'rgba(212,168,71,0.2)' }} />
          ) : (
            <div className="sc-icon-box" style={iconBoxStyle}>
              {isMySlot  && <Ticket   size={17} color="#d4a847" strokeWidth={1.8} />}
              {canBook   && <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#34d399' }} />}
              {isTaken   && <Ban      size={15} color="#7f1d1d" strokeWidth={1.8} />}
              {isBlocked && <Lock     size={14} color="#3a3a3a" strokeWidth={1.8} />}
            </div>
          )}
        </div>

        {/* Action */}
        <div>
          {canBook && (
            <button className="sc-btn sc-btn-book" onClick={() => setShowModal(true)}>
              <Ticket size={14} strokeWidth={2.5} />
              Book &amp; Get Ticket
            </button>
          )}

          {isBlocked && (
            <div className="sc-info-box sc-info-blocked">
              <Lock size={12} strokeWidth={2} />
              Release your slot first
            </div>
          )}

          {isMySlot && (
            <button className="sc-btn sc-btn-unbook" onClick={handleUnbook} disabled={loading}>
              {loading
                ? <><span className="sc-spinner" style={{ borderTopColor: '#6a6a6a', borderColor: 'rgba(106,106,106,0.2)' }} /> Releasing…</>
                : <><RotateCcw size={13} strokeWidth={2.5} /> Unbook Slot</>}
            </button>
          )}

          {isTaken && (
            <div className="sc-info-box sc-info-taken">
              <Ban size={12} strokeWidth={2} />
              Not Available
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <BookingModal
          slot={slot}
          onClose={() => setShowModal(false)}
          onBooked={handleBooked}
        />
      )}
    </>
  );
}