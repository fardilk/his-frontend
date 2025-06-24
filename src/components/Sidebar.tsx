import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import { useAuth } from '../auth/AuthContext'
import ProfilePicture from './ProfilePicture'

interface MenuItem {
  label: string
  icon: string
  path: string
  action?: () => void
}

const menus: MenuItem[] = [
  { label: 'Dashboard', icon: 'fa-solid fa-chart-line', path: '#' },
  { label: 'Admission', icon: 'fa-solid fa-hospital-user', path: '#' },
  { label: 'Radiologi', icon: 'fa-solid fa-x-ray', path: '#' },
  { label: 'Laboratorium', icon: 'fa-solid fa-vials', path: '#' },
  { label: 'Farmasi', icon: 'fa-solid fa-prescription-bottle-alt', path: '#' },
  { label: 'Kasir', icon: 'fa-solid fa-cash-register', path: '#' },
];

const Sidebar: React.FC = () => {
  const [active, setActive] = useState<string>('Dashboard')
  const [role, setRole] = useState<string>('Administrator')
  const { user, logout } = useAuth()

  const menuItems: MenuItem[] = [
    ...menus,
    { label: 'Logout', icon: '', path: '', action: logout }
  ]

  return (
    <aside className="bg-white shadow-lg w-56 h-screen flex flex-col rounded-r-xl overflow-hidden">
      <div className="flex flex-col items-center gap-3 p-4 border-b">
        <ProfilePicture
          name={user?.name || 'John Doe'}
          role={role}
          imageSrc="/doctor.png"
        />
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
                  onClick={() => setActive(item.label)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                    active === item.label ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.icon && <i className={`${item.icon} w-4 text-center`}></i>}
                  {item.label}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={item.action}
                  className="w-full flex items-center justify-center p-2 text-sm text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-md"
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
