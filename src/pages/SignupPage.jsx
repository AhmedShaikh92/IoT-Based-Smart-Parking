import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signup } from '../services/api';
import { toast } from '../components/Toast';

/* ─── Global Styles ───────────────────────────────────────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .sp-root {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0d0d0d;
    font-family: 'Sora', sans-serif;
    color: #f0ede8;
    padding: 24px;
  }

  .sp-card {
    width: 100%;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  /* Logo */
  .sp-logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .sp-logo-icon {
    width: 32px;
    height: 32px;
    background: #d4a847;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .sp-logo-text {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #f0ede8;
  }

  /* Header */
  .sp-header {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .sp-header h1 {
    font-size: 28px;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: #f0ede8;
    line-height: 1.1;
  }

  .sp-header p {
    font-size: 13px;
    color: #575757;
    line-height: 1.6;
  }

  /* Form */
  .sp-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .sp-field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .sp-label {
    font-size: 11px;
    font-weight: 500;
    font-family: 'IBM Plex Mono', monospace;
    color: #919191;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    transition: color 0.15s;
  }

  .sp-label.active { color: #d4a847; }

  .sp-input-wrap {
    position: relative;
  }

  .sp-input {
    width: 100%;
    padding: 13px 16px;
    background: #141414;
    border: 1px solid #2e2e2e;
    border-radius: 8px;
    color: #f0ede8;
    font-family: 'Sora', sans-serif;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    caret-color: #d4a847;
    -webkit-appearance: none;
  }
  .sp-input::placeholder { color: #3a3a3a; }
  .sp-input:focus {
    border-color: #d4a847;
    box-shadow: 0 0 0 3px rgba(212,168,71,0.08);
  }
  .sp-input--padded { padding-right: 46px; }

  .sp-toggle-pass {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    color: #4a4a4a;
    padding: 4px;
    display: flex;
    align-items: center;
    line-height: 0;
    transition: color 0.15s;
  }
  .sp-toggle-pass:hover { color: #d4a847; }

  /* Admin note */
  .sp-notice {
    padding: 13px 15px;
    background: rgba(212,168,71,0.06);
    border: 1px solid rgba(212,168,71,0.18);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .sp-notice-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #d4a847;
  }

  .sp-notice-text {
    font-size: 12px;
    color: #6a6a6a;
    line-height: 1.55;
  }

  /* Button */
  .sp-btn {
    width: 100%;
    padding: 14px;
    background: #d4a847;
    border: none;
    border-radius: 8px;
    color: #0d0d0d;
    font-family: 'Sora', sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.04em;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s, opacity 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 4px;
  }
  .sp-btn:hover:not(:disabled) { background: #e0b856; transform: translateY(-1px); }
  .sp-btn:active:not(:disabled) { transform: translateY(0); }
  .sp-btn:disabled { opacity: 0.5; cursor: not-allowed; }

  /* Footer */
  .sp-footer {
    text-align: center;
    font-size: 13px;
    color: #4a4a4a;
  }

  .sp-link {
    color: #d4a847;
    font-weight: 600;
    text-decoration: none;
    transition: opacity 0.15s;
  }
  .sp-link:hover { opacity: 0.75; text-decoration: underline; }

  /* Spinner */
  .sp-spinner {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 2px solid rgba(13,13,13,0.25);
    border-top-color: #0d0d0d;
    animation: spin 0.65s linear infinite;
    display: inline-block;
    flex-shrink: 0;
  }

  /* Staggered entrance */
  .fade-1 { animation: fadeUp 0.45s ease both 0.05s; }
  .fade-2 { animation: fadeUp 0.45s ease both 0.12s; }
  .fade-3 { animation: fadeUp 0.45s ease both 0.19s; }
  .fade-4 { animation: fadeUp 0.45s ease both 0.26s; }
  .fade-5 { animation: fadeUp 0.45s ease both 0.33s; }
  .fade-6 { animation: fadeUp 0.45s ease both 0.40s; }
`;

/* ─── Icons ───────────────────────────────────────────────────────────────── */
const EyeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ─── Component ───────────────────────────────────────────────────────────── */
export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      toast.error('Please fill in all fields.');
      return;
    }
    setLoading(true);
    try {
      await signup(form);
      toast.success('Account created! Please log in.');
      navigate('/login');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Signup failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{STYLES}</style>

      <div className="sp-root">
        <div className="sp-card">

          {/* Logo */}
          <div className="sp-logo fade-1">
            <div className="sp-logo-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#0d0d0d">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <span className="sp-logo-text">IoT Based · Smart Parking</span>
          </div>

          {/* Header */}
          <div className="sp-header fade-2">
            <h1>Create account</h1>
            <p>Sign up to access booking parking slots.</p>
          </div>

          {/* Form */}
          <form className="sp-form" onSubmit={handleSubmit}>

            {/* Name */}
            <div className="sp-field fade-3">
              <label className={`sp-label${focused === 'name' ? ' active' : ''}`}>Full Name</label>
              <div className="sp-input-wrap">
                <input
                  className="sp-input"
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  autoComplete="name"
                />
              </div>
            </div>

            {/* Email */}
            <div className="sp-field fade-4">
              <label className={`sp-label${focused === 'email' ? ' active' : ''}`}>Email Address</label>
              <div className="sp-input-wrap">
                <input
                  className="sp-input"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Password */}
            <div className="sp-field fade-5">
              <label className={`sp-label${focused === 'password' ? ' active' : ''}`}>Password</label>
              <div className="sp-input-wrap">
                <input
                  className="sp-input sp-input--padded"
                  name="password"
                  type={showPass ? 'text' : 'password'}
                  placeholder="Min. 8 characters"
                  value={form.password}
                  onChange={handleChange}
                  onFocus={() => setFocused('password')}
                  onBlur={() => setFocused(null)}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="sp-toggle-pass"
                  onClick={() => setShowPass(!showPass)}
                  tabIndex={-1}
                  aria-label={showPass ? 'Hide password' : 'Show password'}
                >
                  {showPass ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>
            {/* Submit */}
            <button type="submit" className="sp-btn fade-6" disabled={loading}>
              {loading
                ? <><span className="sp-spinner" /> Creating account…</>
                : <>Create Account <ArrowIcon /></>
              }
            </button>

          </form>

          {/* Footer */}
          <p className="sp-footer fade-6">
            Already have an account?&nbsp;
            <Link to="/login" className="sp-link">Sign in</Link>
          </p>

        </div>
      </div>
    </>
  );
}