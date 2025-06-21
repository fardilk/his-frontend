import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../auth/AuthContext'

interface MenuItem {
  path?: string
  label: string
  action?: () => void
}

const menusByRole: Record<'Administrator' | 'Admisi', MenuItem[]> = {
  Administrator: [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/admission', label: 'Admission' },
    { path: '/doctor', label: 'Doctor' },
  ],
  Admisi: [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/admission', label: 'Admission' },
  ],
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
    ...menusByRole[role as 'Administrator' | 'Admisi'],
    { label: 'Logout', action: handleLogout },
  ]

  return (
    <aside className="bg-white shadow-lg rounded-lg p-4 w-40 h-screen flex flex-col">
      <div className="p-3 rounded-md border border-gray-200 bg-gray-50 mb-6 flex items-center">
        <img
          src="/doctor.png"
          alt="Profile"
          className="w-[30px] h-[30px] rounded-md border border-gray-300 object-cover mr-3"
        />
        <div>
          <p className="text-sm font-semibold text-gray-700">{user?.name || 'John Doe'}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <span className="text-xs">Admisi</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={role === 'Administrator'}
            onChange={() =>
              setRole((prev) =>
                prev === 'Administrator' ? 'Admisi' : 'Administrator'
              )
            }
          />
          <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:left-[2px] after:top-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-4" />
        </label>
        <span className="text-xs">Administrator</span>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map(item => (
            <li key={item.label} className="text-sm font-medium text-gray-700">
              {item.path ? (
                <Link
                  to={item.path}
                  className="block p-2 rounded-md hover:bg-gray-100 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={item.action}
                  className="w-full text-left p-2 rounded-md hover:bg-gray-100"
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
