import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

interface MenuItem {
  label: string
  icon: string
  path: string
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

  return (
    <aside className="w-64 bg-white shadow h-screen flex flex-col">
      <nav className="flex-1 p-2">
        <ul className="space-y-1">
          {menus.map(menu => (
            <li key={menu.label}>
              <Link
                to={menu.path}
                onClick={() => setActive(menu.label)}
                className={`sidebar-item ${active === menu.label ? 'active' : ''}`}
              >
                <i className={`${menu.icon} w-4 text-center`}></i>
                <span>{menu.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
