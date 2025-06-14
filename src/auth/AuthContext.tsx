import { createContext, useContext, useState, ReactNode } from 'react'

interface AuthContextType {
  user: string | null
  login: (username: string, cb: () => void) => void
  logout: (cb: () => void) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null)

  const login = (username: string, cb: () => void) => {
    setUser(username)
    cb()
  }

  const logout = (cb: () => void) => {
    setUser(null)
    cb()
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
