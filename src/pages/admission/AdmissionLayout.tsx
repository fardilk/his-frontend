import { Outlet } from 'react-router-dom'

const AdmissionLayout: React.FC = () => {
  return (
    <section className="ml-64 p-6 space-y-4">
      <h1 className="text-xl font-semibold">Admission</h1>
      <div className="bg-white rounded shadow p-4">
        <Outlet />
      </div>
    </section>
  )
}

export default AdmissionLayout
