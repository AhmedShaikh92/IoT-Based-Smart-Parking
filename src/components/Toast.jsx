import React, { useEffect, useState } from 'react';

let addToastFn = null;
export const toast = {
  success: (msg) => addToastFn?.({ msg, type: 'success' }),
  error: (msg) => addToastFn?.({ msg, type: 'error' }),
  info: (msg) => addToastFn?.({ msg, type: 'info' }),
};

export default function ToastContainer() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    addToastFn = ({ msg, type }) => {
      const id = Date.now();
      setToasts((prev) => [...prev, { id, msg, type }]);
      setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3500);
    };
    return () => { addToastFn = null; };
  }, []);

  return (
    <div style={{
      position: 'fixed', bottom: 24, right: 24, zIndex: 9999,
      display: 'flex', flexDirection: 'column', gap: 10,
    }}>
      {toasts.map((t) => (
        <div key={t.id} style={{
          padding: '12px 20px',
          borderRadius: 12,
          color: '#fff',
          fontSize: 14,
          fontWeight: 500,
          boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
          background: t.type === 'success' ? '#10b981'
            : t.type === 'error' ? '#ef4444' : '#6366f1',
          animation: 'slideIn 0.3s ease',
          maxWidth: 320,
          lineHeight: 1.4,
        }}>
          {t.msg}
        </div>
      ))}
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}