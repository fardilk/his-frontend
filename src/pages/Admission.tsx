import DaftarPasien from './admission/DaftarPasien'

const Admission: React.FC = () => {
  return (
    <section className="p-6 space-y-4">
      <h1 className="text-xl font-semibold">Admission</h1>
      <div className="bg-white rounded shadow p-4">
        <DaftarPasien />
      </div>
    </section>
  )
}

export default Admission
