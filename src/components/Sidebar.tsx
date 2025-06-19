import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../auth/AuthContext'

interface MenuItem {
  path?: string
  label: string
  icon: string
  action?: () => void
}

const menusByRole: Record<string, MenuItem[]> = {
  Administrator: [
    { path: '/dashboard', label: 'Dashboard', icon: 'fa-solid fa-chart-line' },
    { path: '/admission', label: 'Admission', icon: 'fa-solid fa-hospital-user' },
    { path: '/config', label: 'Config', icon: 'fa-solid fa-sliders' },
  ],
  Admisi: [
    { path: '/admission', label: 'Admission', icon: 'fa-solid fa-hospital-user' },
  ],
  Dokter: [
    { path: '/dashboard', label: 'Dashboard', icon: 'fa-solid fa-chart-line' },
  ],
}

const Sidebar: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const initialRole =
    typeof user?.role === 'string' ? user.role : user?.role?.name || 'Administrator'
  const [role, setRole] = useState<string>(initialRole)

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value)
  }

  const name = user?.name || 'Administrator'
  const currentRole = role

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  const menuItems: MenuItem[] = [
    ...(menusByRole[currentRole] ?? []),
    { label: 'Logout', icon: 'fa-solid fa-right-from-bracket', action: handleLogout },
  ]

  return (
  <aside className="h-screen w-64 bg-white shadow-lg overflow-auto p-4 space-y-4">
    {/* Profile Section */}
    <div className="flex flex-col items-center space-y-2 p-3 rounded-lg bg-gray-50 shadow-inner">
      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300 shadow">
        <img
          src={profileImage || 'public/doctor.png'}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center">
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-xs text-gray-500">{currentRole}</p>
      </div>
    </div>

    {/* Role Switcher */}
    <div>
      <select
        value={role}
        onChange={handleRoleChange}
        className="w-full p-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="Administrator" disabled={currentRole === 'Administrator'}>
          Administrator
        </option>
        <option value="Admisi" disabled={currentRole === 'Admisi'}>
          Admisi
        </option>
        <option value="Dokter" disabled={currentRole === 'Dokter'}>
          Dokter
        </option>
      </select>
    </div>

    {/* Menu */}
    <nav>
      <ul className="space-y-1">
        {menuItems.map((item) => {
          const active = item.path ? location.pathname.startsWith(item.path) : false
          return (
            <li key={item.label}>
              {item.path ? (
                <Link
                  to={item.path}
                  className={`flex items-center space-x-2 p-2 rounded-lg ${
                    active ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
                  }`}
                >
                  <i className={`${item.icon} w-4`} />
                  <span className="text-sm">{item.label}</span>
                </Link>
              ) : (
                <button
                  onClick={item.action}
                  className="flex items-center w-full space-x-2 p-2 rounded-lg hover:bg-gray-100"
                >
                  <i className={`${item.icon} w-4`} />
                  <span className="text-sm">{item.label}</span>
                </button>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  </aside>
)

export default Sidebar
