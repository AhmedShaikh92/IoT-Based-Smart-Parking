import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/api";
import { saveAuth } from "../utils/auth";
import { toast } from "../components/Toast";

/* ─── Global Styles ───────────────────────────────────────────────────────── */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .ps-root {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0d0d0d;
    font-family: 'Sora', sans-serif;
    color: #f0ede8;
    padding: 24px;
  }

  .ps-card {
    width: 100%;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .ps-logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .ps-logo-icon {
    width: 32px;
    height: 32px;
    background: #d4a847;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .ps-logo-text {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #f0ede8;
    line-height: 1.3;
  }

  .ps-header {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .ps-header h1 {
    font-size: 28px;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: #f0ede8;
    line-height: 1.1;
  }

  .ps-header p {
    font-size: 13px;
    color: #575757;
    line-height: 1.6;
  }

  .ps-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .ps-field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .ps-field-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ps-label {
    font-size: 11px;
    font-weight: 500;
    font-family: 'IBM Plex Mono', monospace;
    color: #919191;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .ps-forgot {
    font-size: 11px;
    font-family: 'IBM Plex Mono', monospace;
    color: #3a3a3a;
    text-decoration: none;
    transition: color 0.15s;
  }
  .ps-forgot:hover { color: #d4a847; }

  .ps-input-wrap {
    position: relative;
  }

  .ps-input {
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
  }
  .ps-input::placeholder { color: #3a3a3a; }
  .ps-input:focus {
    border-color: #d4a847;
    box-shadow: 0 0 0 3px rgba(212,168,71,0.08);
  }
  .ps-input--padded { padding-right: 46px; }

  .ps-toggle-pass {
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
  .ps-toggle-pass:hover { color: #d4a847; }

  .ps-btn {
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
    margin-top: 8px;
  }
  .ps-btn:hover:not(:disabled) { background: #e0b856; transform: translateY(-1px); }
  .ps-btn:active:not(:disabled) { transform: translateY(0); }
  .ps-btn:disabled { opacity: 0.5; cursor: not-allowed; }

  .ps-footer {
    text-align: center;
    font-size: 13px;
    color: #4a4a4a;
  }

  .ps-link {
    color: #d4a847;
    font-weight: 600;
    text-decoration: none;
    transition: opacity 0.15s;
  }
  .ps-link:hover { opacity: 0.75; text-decoration: underline; }

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

const Spinner = () => (
  <span style={{
    width: 15, height: 15,
    borderRadius: "50%",
    border: "2px solid rgba(13,13,13,0.25)",
    borderTopColor: "#0d0d0d",
    animation: "spin 0.65s linear infinite",
    display: "inline-block",
    flexShrink: 0,
  }} />
);

/* ─── Component ───────────────────────────────────────────────────────────── */
export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      toast.error("Please enter your credentials.");
      return;
    }
    setLoading(true);
    try {
      const res = await login(form);
      const { token, user } = res.data.data;
      saveAuth(token, user);
      toast.success(`Welcome back, ${user.name.split(" ")[0]}.`);
      navigate(user.role === "admin" ? "/admin" : "/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid credentials. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{STYLES}</style>

      <div className="ps-root">
        <div className="ps-card">

          {/* Logo */}
          <div className="ps-logo fade-1">
            <div className="ps-logo-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#0d0d0d">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <span className="ps-logo-text">IoT Based · Smart Parking</span>
          </div>

          {/* Header */}
          <div className="ps-header fade-2">
            <h1>Sign in</h1>
            <p>Enter your details to book a parking slot.</p>
          </div>

          {/* Form */}
          <form className="ps-form" onSubmit={handleSubmit}>

            {/* Email */}
            <div className="ps-field fade-3">
              <label className="ps-label">Email Address</label>
              <div className="ps-input-wrap">
                <input
                  className="ps-input"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Password */}
            <div className="ps-field fade-4">
              <div className="ps-field-header">
                <label className="ps-label">Password</label>
                <a href="#" className="ps-forgot">Forgot?</a>
              </div>
              <div className="ps-input-wrap">
                <input
                  className="ps-input ps-input--padded"
                  name="password"
                  type={showPass ? "text" : "password"}
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="ps-toggle-pass"
                  onClick={() => setShowPass(!showPass)}
                  tabIndex={-1}
                  aria-label={showPass ? "Hide password" : "Show password"}
                >
                  {showPass ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button type="submit" className="ps-btn fade-5" disabled={loading}>
              {loading ? <><Spinner /> Signing in…</> : "Sign In"}
            </button>

          </form>

          {/* Footer */}
          <p className="ps-footer fade-6">
            No account?&nbsp;
            <Link to="/signup" className="ps-link">Create one</Link>
          </p>

        </div>
      </div>
    </>
  );
}