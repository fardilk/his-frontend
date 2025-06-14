import { useAuth } from '../auth/AuthContext'

const Header = () => {
  const { user, logout } = useAuth()
  return (
    <header className="header">
      <h1>Hospital IS</h1>
      {user && <button onClick={() => logout(() => {})}>Logout</button>}
    </header>
  )
}

export default Header
