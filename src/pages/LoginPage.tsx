
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'
import { useAuth } from '../auth/AuthContext'


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
      <div className="flex flex-1 items-center justify-center bg-gray-100">
        <div className="h-4/5 w-4/5 bg-[url('/doctor.png')] bg-contain bg-center bg-no-repeat" />
      </div>
      <div className="flex flex-1 items-center justify-center bg-white">
        <form onSubmit={handleSubmit} className="w-4/5 max-w-sm space-y-4 rounded-lg border border-gray-300 bg-gray-50 p-5">
          <h2 className="mb-5 text-center text-3xl font-bold">Welcome!</h2>
          {errorMessage && <div className="text-center text-red-500">{errorMessage}</div>}

          <div className="space-y-1">
            <input
              type="email"
              placeholder="Your E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded border border-gray-300 p-2 text-sm"
            />
            {errors.email && <span className="block text-xs text-red-500">{errors.email}</span>}
          </div>

          <div className="space-y-1">
            <input
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded border border-gray-300 p-2 text-sm"
            />
            {errors.password && <span className="block text-xs text-red-500">{errors.password}</span>}
          </div>

          <div className="mb-4 flex items-center justify-between">
            <label className="text-xs">
              <input type="checkbox" className="mr-1" /> Remember my password
            </label>
            <a href="#" className="text-xs text-blue-500 hover:underline">
              Forgot your password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded bg-blue-500 p-2 font-bold text-white hover:bg-blue-700"
          >
            {loading ? 'Loading...' : 'LOGIN'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
