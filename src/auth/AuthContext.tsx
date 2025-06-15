import React, { createContext, useContext, useState, ReactNode } from 'react'

interface User {
  id: number
  name: string
  email: string
  role: string | null
}

interface AuthContextType {
  token: string | null
  user: User | null
  login: (token: string, user: User) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem('his_token')
  )
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('his_user')
    return stored ? (JSON.parse(stored) as User) : null
  })

  const login = (newToken: string, newUser: User) => {
    setToken(newToken)
    setUser(newUser)
    localStorage.setItem('his_token', newToken)
    localStorage.setItem('his_user', JSON.stringify(newUser))
    console.log('Token saved to localStorage:', localStorage.getItem('his_token'))
  }

  const logout = () => {
    setToken(null)
    setUser(null)
    localStorage.removeItem('his_token')
    localStorage.removeItem('his_user')
  }

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
