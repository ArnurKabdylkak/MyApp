import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './loginpage.css';
import { authenticateUser } from './auth';
import LanguageSwitcher from './LanguageSwitcher';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const isAuthenticated = await authenticateUser(email, password);
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      // Обработка ошибки входа
    }
  };

  return (
    <div className="login-container">
      <LanguageSwitcher />
      <div className="quote-section">
        <div className="quote-content">
          <p>
            {t('quote')}
          </p>
          <p className="author">{t('quoteAuthor')}</p>
        </div>
      </div>

      <div className="login-section">
        <div className="login-form">
          <h2>{t('loginToYourAccount')}</h2>
          <p className="subtitle">{t('withRegisteredEmail')}</p>
          
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">{t('emailAddress')}*</label>
              <input
                type="email"
                id="email"
                placeholder={t('enterEmailAddress')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">{t('enterPassword')}*</label>
              <input
                type="password"
                id="password"
                placeholder={t('password')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group checkbox">
              <input
                type="checkbox"
                id="remember"
                checked={rememberPassword}
                onChange={(e) => setRememberPassword(e.target.checked)}
              />
              <label htmlFor="remember">{t('rememberMyPassword')}</label>
            </div>
            
            <button type="submit" className="login-button">{t('login')}</button>
          </form>
          
          <div className="or-divider">{t('or')}</div>
          
          <button className="google-login">
            <img src="/google-icon.png" alt="Google" />
            {t('loginWithGoogle')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;