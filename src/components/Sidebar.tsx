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
  const [role, setRole] = useState<string>('Administrator')

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  const menuItems: MenuItem[] = [
    ...(menusByRole[role as 'Administrator' | 'Admisi'] || []),
    { label: 'Logout', action: handleLogout },
  ]

  return (
    <aside className="bg-white shadow-lg w-56 h-screen flex flex-col rounded-r-xl overflow-hidden">
      <div className="flex flex-col items-center gap-3 p-4 border-b">
        <div className="flex items-center gap-3">
          <img alt="Profile" src="/doctor.png" className="w-12 h-12 rounded-full object-cover" />
          <div className="leading-none">
            <p className="font-semibold text-sm">{user?.name || 'John Doe'}</p>
            <p className="text-xs text-gray-500">{role}</p>
          </div>
        </div>
        <div className="relative w-full">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="appearance-none w-full border border-gray-300 rounded-md text-sm py-1 pl-2 pr-6 focus:outline-none"
          >
            <option value="Administrator">Administrator</option>
            <option value="Admisi">Admisi</option>
          </select>
          <div className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2">
            <svg
              className="w-4 h-4 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map(item => (
            <li key={item.label}>
              {item.path ? (
                <Link
                  to={item.path}
                  className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={item.action}
                  className={
                    item.label === 'Logout'
                      ? 'w-full flex items-center justify-center p-2 text-sm text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-md'
                      : 'flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm transition-colors'
                  }
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
