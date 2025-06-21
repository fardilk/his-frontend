
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'
import { useAuth } from '../auth/AuthContext'
import '../styles/global.css';


interface FormErrors {
  email?: string
  password?: string
}

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})

  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const validationErrors: FormErrors = {}
    if (!email) validationErrors.email = 'Email is required'
    if (!password) validationErrors.password = 'Password is required'

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors)
      return
    }
    setErrors({})
    setLoading(true)
    setErrorMessage('')

    try {
      const res = await api.post('/login', { email, password })
      const { token, user } = res.data
      login(token, user)
      navigate('/dashboard', { replace: true })
    } catch (err: any) {
      const message = err.response?.data?.message || 'Login failed'
      setErrorMessage(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen font-sans">
  <div className="flex-1 flex items-center justify-center bg-gray-100">
    <div
      className="w-4/5 h-4/5 bg-center bg-contain bg-no-repeat"
      style={{ backgroundImage: "url('/your-illustration.png')" }}
    />
  </div>
  <div className="flex-1 flex items-center justify-center bg-white">
    <form onSubmit={handleSubmit} className="w-4/5 max-w-sm p-5 border border-gray-300 rounded-lg bg-gray-50">
      <h2 className="text-center mb-5">Welcome!</h2>
      {errorMessage && <div className="text-red-500 text-xs mt-1 block">{errorMessage}</div>}
      
      <div className="mb-4">
        <input
          type="email"
          placeholder="Your E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 text-sm border border-gray-300 rounded"
        />
        {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>}
      </div>

      <div className="mb-4">
        <input
          type="password"
          placeholder="Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 text-sm border border-gray-300 rounded"
        />
        {errors.password && <span className="text-red-500 text-xs mt-1 block">{errors.password}</span>}
      </div>

      <div className="flex justify-between items-center mb-4">
        <label className="text-xs">
          <input type="checkbox" /> Remember my password
        </label>
        <a href="#" className="text-xs text-blue-500 hover:underline">Forgot your password?</a>
      </div>

      <button type="submit" disabled={loading} className="w-full p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded cursor-pointer">
        {loading ? 'Loading...' : 'LOGIN'}
      </button>
    </form>
  </div>
</div>

  )
}

export default LoginPage
