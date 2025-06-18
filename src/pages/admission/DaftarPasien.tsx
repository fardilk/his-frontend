import { useNavigate } from 'react-router-dom'

interface Pasien {
  noRm: string
  mrn: string
  nama: string
  tanggalLahir: string
  alamat: string
  status: string
}

const mockData: Pasien[] = [
  {
    noRm: '001',
    mrn: 'RJ000001',
    nama: 'John Doe',
    tanggalLahir: '1990-01-01',
    alamat: 'Jakarta',
    status: 'Aktif',
  },
  {
    noRm: '002',
    mrn: 'RJ000002',
    nama: 'Jane Smith',
    tanggalLahir: '1985-05-12',
    alamat: 'Bandung',
    status: 'Non Aktif',
  },
]

const DaftarPasien: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h2>Daftar Pasien</h2>
      <button onClick={() => navigate('/admission/form-pasien-baru')}>
        Daftarkan Pasien
      </button>
      <table className="pasien-table">
        <thead>
          <tr>
            <th>No RM</th>
            <th>MRN</th>
            <th>Nama Pasien</th>
            <th>Tanggal Lahir</th>
            <th>Alamat</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((p, index) => (
            <tr key={index}>
              <td>{p.noRm}</td>
              <td>{p.mrn}</td>
              <td>{p.nama}</td>
              <td>{p.tanggalLahir}</td>
              <td>{p.alamat}</td>
              <td>{p.status}</td>
              <td>
                <button className="edit-btn">Edit</button>{' '}
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DaftarPasien
