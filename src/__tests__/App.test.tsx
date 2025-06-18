import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'
import { AuthProvider } from '../auth/AuthContext'
import { BrowserRouter } from 'react-router-dom'

describe('App Component', () => {
  it('renders the App component without crashing', () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    )

    // Example assertion: adjust according to App content
    // expect(screen.getByText(/dashboard/i)).toBeInTheDocument()
  })
})
