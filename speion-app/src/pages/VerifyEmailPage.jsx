import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { sendVerification, logOut } from '../services/authService';
import { auth } from '../services/firebase';

const VerifyEmailPage = () => {
  const { user, isVerified } = useAuth();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [cooldown, setCooldown] = useState(0);

  // Auto-poll to check if email has been verified
  useEffect(() => {
    if (isVerified) {
      navigate('/onboarding', { replace: true });
      return;
    }

    const interval = setInterval(async () => {
      if (auth.currentUser) {
        await auth.currentUser.reload();
        if (auth.currentUser.emailVerified) {
          navigate('/onboarding', { replace: true });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isVerified, navigate]);

  // Cooldown timer
  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
    return () => clearTimeout(timer);
  }, [cooldown]);

  const handleResend = async () => {
    setMessage('');
    setError('');
    try {
      await sendVerification();
      setMessage('Verification email sent! Check your inbox.');
      setCooldown(60);
    } catch (err) {
      if (err.code === 'auth/too-many-requests') {
        setError('Too many requests. Please wait before trying again.');
      } else {
        setError(err.message);
      }
    }
  };

  const handleLogout = async () => {
    await logOut();
    navigate('/login', { replace: true });
  };

  return (
    <div className="auth-layout">
      <div className="auth-container">
        <div className="auth-brand">
          <div className="auth-brand-logo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
          <h1>Speion Group</h1>
        </div>

        <div className="auth-card">
          <div className="verify-content">
            <div className="verify-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>

            <h2>Check your email</h2>
            <p>
              We sent a verification link to<br />
              <span className="verify-email-highlight">{user?.email}</span>
            </p>

            {message && <div className="alert alert-success">{message}</div>}
            {error && <div className="alert alert-error">{error}</div>}

            <div className="verify-actions">
              <button
                className="btn btn-primary"
                onClick={handleResend}
                disabled={cooldown > 0}
                id="resend-verification"
              >
                {cooldown > 0 ? `Resend in ${cooldown}s` : 'Resend Verification Email'}
              </button>
              <button
                className="btn btn-secondary"
                onClick={handleLogout}
                id="verify-logout"
              >
                Use a different account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage;
