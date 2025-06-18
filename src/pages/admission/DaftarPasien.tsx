import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'

interface Pasien {
  noRm: string
  nama: string
  tanggalLahir: string
  alamat: string
  status: string
}

const mockData: Pasien[] = [
  {
    noRm: '001',
    nama: 'John Doe',
    tanggalLahir: '1990-01-01',
    alamat: 'Jakarta',
    status: 'Aktif',
  },
  {
    noRm: '002',
    nama: 'Jane Smith',
    tanggalLahir: '1985-05-12',
    alamat: 'Bandung',
    status: 'Non Aktif',
  },
]

const DaftarPasien: React.FC = () => {
  const navigate = useNavigate()

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Daftar Pasien</h2>
        <Button onClick={() => navigate('/admission/form-pasien-baru')}>
          Daftarkan Pasien
        </Button>
      </div>
      <table className="min-w-full text-sm text-left border border-gray-200">
        <thead>
          <tr>
            <th className="px-3 py-2 border-b">No RM</th>
            <th className="px-3 py-2 border-b">Nama Pasien</th>
            <th className="px-3 py-2 border-b">Tanggal Lahir</th>
            <th className="px-3 py-2 border-b">Alamat</th>
            <th className="px-3 py-2 border-b">Status</th>
            <th className="px-3 py-2 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((p, index) => (
            <tr key={index}>
              <td className="px-3 py-2 border-b">{p.noRm}</td>
              <td className="px-3 py-2 border-b">{p.nama}</td>
              <td className="px-3 py-2 border-b">{p.tanggalLahir}</td>
              <td className="px-3 py-2 border-b">{p.alamat}</td>
              <td className="px-3 py-2 border-b">{p.status}</td>
              <td className="px-3 py-2 border-b space-x-2">
                <Button variant="secondary" className="edit-btn">Edit</Button>
                <Button variant="secondary" className="delete-btn">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default DaftarPasien
