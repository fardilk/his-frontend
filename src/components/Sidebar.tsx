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
    <aside className="sidebar-container">
      <div className="sidebar-header">
        <ProfilePicture
          name={user?.name || 'John Doe'}
          role={role}
          imageSrc="/doctor.png"
        />
        <div className="role-select-wrapper">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="role-select"
          >
            <option value="Administrator">Administrator</option>
            <option value="Admisi">Admisi</option>
          </select>
          <div className="role-select-icon-wrapper">
            <svg
              className="role-select-icon"
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

      <nav className="sidebar-nav">
        <ul className="sidebar-list">
          {menuItems.map(item => (
            <li key={item.label}>
              {item.path ? (
                <Link
                  to={item.path}
                  onClick={() => setActive(item.label)}
                  className={[
                    'sidebar-item',
                    active === item.label && 'active',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {item.icon && <i className={`${item.icon} sidebar-icon`}></i>}
                  {item.label}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={item.action}
                  className="sidebar-action-btn"
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
