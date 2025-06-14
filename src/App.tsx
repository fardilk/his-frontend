import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './auth/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route untuk login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Route yang diproteksi */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Optional: tambahkan route default atau 404 */}
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
