import { useState } from 'react'

const FormPasienBaru: React.FC = () => {
  const [nama, setNama] = useState('')
  const [alamat, setAlamat] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ nama, alamat })
    setNama('')
    setAlamat('')
  }

  return (
    <form onSubmit={handleSubmit} className="form-pasien-baru">
      <h2>Form Pasien Baru</h2>
      <div>
        <label>Nama Pasien</label>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
      </div>
      <div>
        <label>Alamat</label>
        <input
          type="text"
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default FormPasienBaru
