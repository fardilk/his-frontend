import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import api from '../services/api';
import './LoginPage.css';

interface FormErrors {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<FormErrors>({ email: '', password: '' });
  const navigate = useNavigate();
  const auth = useAuth();

  const validate = (): boolean => {
    const newErrors: FormErrors = { email: '', password: '' };

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Invalid email';
    }
    if (!password) {
      newErrors.password = 'Password required';
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await api.post('/login', { email, password });
      const { token } = res.data;

      if (token) {
        localStorage.setItem('token', token);
        auth.login(email, () => navigate('/'));
      }
    } catch {
      alert('Login failed. Check credentials.');
    }
  };

  return (
    <div className="login-page">
      <div className="left-panel">
        <div className="illustration" />
      </div>
      <div className="right-panel">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Welcome!</h2>
          <div className="form-group">
            <input
              type="email"
              placeholder="Your E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <div className="actions">
            <label className="remember">
              <input type="checkbox" /> Remember my password
            </label>
            <a href="#" className="forgot">
              Forgot your password?
            </a>
          </div>
          <button type="submit" className="login-button">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
