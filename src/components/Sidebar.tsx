import { Link } from 'react-router-dom'

const Sidebar: React.FC = () => (
  <aside className="sidebar bg-gray-100 p-4">
    <nav>
      <ul className="space-y-2">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/admission">Admission</Link>
        </li>
      </ul>
    </nav>
  </aside>
)

export default Sidebar
