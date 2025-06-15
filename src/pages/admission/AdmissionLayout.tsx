import { Outlet } from 'react-router-dom'

const AdmissionLayout: React.FC = () => {
  return (
    <div className="admission-module">
      <Outlet />
    </div>
  )
}

export default AdmissionLayout
