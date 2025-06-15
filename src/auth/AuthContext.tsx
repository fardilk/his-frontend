import React, { createContext, useContext } from 'react';

interface AuthContextType {
  login: (email: string, callback: () => void) => void
  logout: (callback: () => void) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const login = (email: string, callback: () => void) => {
    console.log(`Logged in as ${email}`)
    callback()
  }

  const logout = (callback: () => void) => {
    localStorage.removeItem('his_token')
    localStorage.removeItem('his_role')
    callback()
  }

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
