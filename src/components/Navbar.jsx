import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LogOut, LayoutDashboard, ShieldCheck, MapPin } from 'lucide-react';
import { logout, getUser, getRole } from '../utils/auth';

export default function Navbar() {
  const navigate = useNavigate();
  const user = getUser();
  const role = getRole();
  const isAdmin = role === 'admin';

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <style>{`
        .nav-link {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          border-radius: 7px;
          font-size: 13px;
          font-weight: 600;
          color: #6a6a6a;
          text-decoration: none;
          transition: color 0.15s, background 0.15s;
          white-space: nowrap;
        }
        .nav-link:hover {
          color: #f0ede8;
          background: rgba(255,255,255,0.05);
        }
        .nav-logout {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          border-radius: 7px;
          font-size: 13px;
          font-weight: 600;
          color: #6a6a6a;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: color 0.15s, background 0.15s;
          white-space: nowrap;
          font-family: inherit;
        }
        .nav-logout:hover {
          color: #f0ede8;
          background: rgba(255,255,255,0.05);
        }
        /* Hide nav text labels on small screens, show only icons */
        @media (max-width: 520px) {
          .nav-label { display: none; }
          .nav-link, .nav-logout { padding: 6px 8px; }
          .user-name { display: none; }
          .nav-divider { display: none; }
        }
      `}</style>

      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        height: 56,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 16px',
        background: '#0d0d0d',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        gap: 8,
        minWidth: 0,
      }}>

        {/* ── Logo ── */}
        <Link
          to={isAdmin ? '/admin' : '/dashboard'}
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            textDecoration: 'none', flexShrink: 0,
          }}
        >
          <div style={{
            width: 30, height: 30, borderRadius: 7,
            background: '#d4a847',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <MapPin size={14} color="#0d0d0d" strokeWidth={2.5} />
          </div>
          {/* Hide full logo text on very small screens */}
          <span style={{
            fontSize: 13, fontWeight: 700, letterSpacing: '-0.02em',
            color: '#f0ede8', lineHeight: 1.2, whiteSpace: 'nowrap',
          }}
            className="nav-label"
          >
            IoT Based · Smart Parking
          </span>
        </Link>

        {/* ── Right side ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 2, minWidth: 0, flexShrink: 0 }}>

          {/* Nav links — hidden on mobile */}
          {isAdmin && (
            <Link to="/admin" className="nav-link">
              <ShieldCheck size={14} strokeWidth={2} />
              <span className="nav-label">Admin Panel</span>
            </Link>
          )}

          <Link to="/dashboard" className="nav-link">
            <LayoutDashboard size={14} strokeWidth={2} />
            <span className="nav-label">Slots</span>
          </Link>

          {/* Divider */}
          <div className="nav-divider" style={{ width: 1, height: 18, background: 'rgba(255,255,255,0.08)', margin: '0 4px' }} />

          {/* User pill */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '5px 10px', borderRadius: 7,
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.06)',
            flexShrink: 0,
          }}>
            {/* Avatar */}
            <div style={{
              width: 22, height: 22, borderRadius: '50%',
              background: '#d4a847',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: '#0d0d0d' }}>
                {user?.name?.[0]?.toUpperCase() || 'U'}
              </span>
            </div>

            {/* Name — hidden on small screens */}
            <span className="user-name" style={{ fontSize: 13, fontWeight: 600, color: '#c4bfb5', whiteSpace: 'nowrap' }}>
              {user?.name?.split(' ')[0]}
            </span>

            {/* Role badge */}
            <span style={{
              fontSize: 9, fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase', padding: '2px 7px', borderRadius: 999,
              ...(isAdmin
                ? { background: 'rgba(212,168,71,0.15)', color: '#d4a847', border: '1px solid rgba(212,168,71,0.25)' }
                : { background: 'rgba(255,255,255,0.06)', color: '#6a6a6a', border: '1px solid rgba(255,255,255,0.08)' }
              ),
            }}>
              {role}
            </span>
          </div>

          {/* Logout */}
          <button onClick={handleLogout} className="nav-logout">
            <LogOut size={14} strokeWidth={2} />
            <span className="nav-label">Logout</span>
          </button>

        </div>
      </nav>
    </>
  );
}