import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../auth/AuthContext'

interface MenuItem {
  path?: string
  label: string
  action?: () => void
}

const menusByRole: Record<string, MenuItem[]> = {
  Administrator: [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/admission', label: 'Admission' },
    { path: '/config', label: 'Config' },
  ],
  Admisi: [{ path: '/admission', label: 'Admission' }],
  Dokter: [{ path: '/dashboard', label: 'Dashboard' }],
}

const Sidebar: React.FC = () => {
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const initialRole =
    typeof user?.role === 'string' ? user.role : user?.role?.name || 'Administrator'
  const [role, setRole] = useState<string>(initialRole)

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  const menuItems: MenuItem[] = [
    ...(menusByRole[role] ?? []),
    { label: 'Logout', action: handleLogout },
  ]

  return (
    <aside className="bg-white shadow-lg rounded-lg p-4 w-64 h-screen flex flex-col">
      <div className="p-3 rounded-md border border-gray-200 bg-gray-50 mb-6 flex items-center">
        <img
          src="/doctor.png"
          alt="Profile"
          className="w-12 h-12 rounded-full border border-gray-300 object-cover mr-3"
        />
        <div>
          <p className="text-sm font-semibold text-gray-700">{user?.name || 'John Doe'}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
      >
        <option value="Administrator">Administrator</option>
        <option value="Admisi">Admisi</option>
        <option value="Dokter">Dokter</option>
      </select>

      <nav className="flex-1">
        <ul className="space-y-2">
          <li
            onClick={handleLogout}
            className="p-2 rounded-md hover:bg-gray-100 cursor-pointer text-sm font-medium text-gray-700 transition-colors duration-200"
          >
            Logout
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
