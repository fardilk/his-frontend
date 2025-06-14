import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import './LoginPage.css'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({ email: '', password: '' })
  const navigate = useNavigate()
  const auth = useAuth()

  const validate = () => {
    const newErrors = { email: '', password: '' }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Invalid email'
    }
    if (!password) {
      newErrors.password = 'Password required'
    }
    setErrors(newErrors)
    return !newErrors.email && !newErrors.password
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    auth.login(email, () => navigate('/'))
  }

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
            <a href="#" className="forgot">Forgot your password?</a>
          </div>
          <button type="submit" className="login-button">LOGIN</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
