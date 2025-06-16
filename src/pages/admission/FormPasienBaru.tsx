import { useState } from 'react'
import NomorIdentitasPanel from '../../components/form-panels/NomorIdentitasPanel'
import DataPasienPanel from '../../components/form-panels/DataPasienPanel'
import AlamatIdentitasPanel from '../../components/form-panels/AlamatIdentitasPanel'
import AlamatDomisiliPanel from '../../components/form-panels/AlamatDomisiliPanel'
import KontakPanel from '../../components/form-panels/KontakPanel'
import KontakDaruratPanel from '../../components/form-panels/KontakDaruratPanel'
import HubunganKeluargaPanel from '../../components/form-panels/HubunganKeluargaPanel'

const FormPasienBaru: React.FC = () => {
  const [form, setForm] = useState({
    emergency: false,
    identityNumber: { nationality: '', idType: '', idNumber: '' },
    patientData: { salutation: '', fullName: '', placeOfBirth: '', dateOfBirth: '', gender: '', maritalStatus: '', country: '', bloodType: '', religion: '', language: '', ethnicity: '', lastEducation: '', occupation: '' },
    identityAddress: { searchRegion: '', village: '', subDistrict: '', city: '', province: '', regionCode: '', rt: '', rw: '' },
    sameAsIdentity: false,
    domicileAddress: { searchRegion: '', village: '', subDistrict: '', city: '', province: '', regionCode: '', rt: '', rw: '' },
    contact: { countryCode: '', phoneNumber: '', email: '' },
    emergencyContact: { relationship: '', name: '', countryCode: '', phoneNumber: '', email: '', address: '' },
    familyPatient: ''
  })

  const [showPopup, setShowPopup] = useState(false)

  const handleChange = (section: string, field: string, value: any) => {
    setForm(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }))
  }

  const handleSimpleChange = (field: string, value: any) => {
    setForm(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(form)
    setShowPopup(true)
    setTimeout(() => setShowPopup(false), 2000)
  }

  return (
    <div>
      <h2>Registrasi Pasien Baru</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="checkbox"
              checked={form.emergency}
              onChange={(e) => handleSimpleChange('emergency', e.target.checked)}
            />
            Register as Emergency Patient
          </label>
        </div>

        <NomorIdentitasPanel
          data={form.identityNumber}
          onChange={(field, value) => handleChange('identityNumber', field, value)}
        />

        <DataPasienPanel
          data={form.patientData}
          onChange={(field, value) => handleChange('patientData', field, value)}
        />

        <AlamatIdentitasPanel
          data={form.identityAddress}
          onChange={(field, value) => handleChange('identityAddress', field, value)}
        />

        <AlamatDomisiliPanel
          sameAsIdentity={form.sameAsIdentity}
          data={form.domicileAddress}
          onSameAsIdentityChange={(value) => handleSimpleChange('sameAsIdentity', value)}
          onChange={(field, value) => handleChange('domicileAddress', field, value)}
        />

        <KontakPanel
          data={form.contact}
          onChange={(field, value) => handleChange('contact', field, value)}
        />

        <KontakDaruratPanel
          data={form.emergencyContact}
          onChange={(field, value) => handleChange('emergencyContact', field, value)}
        />

        <HubunganKeluargaPanel
          value={form.familyPatient}
          onChange={(value) => handleSimpleChange('familyPatient', value)}
        />

        <div style={{ marginTop: '1rem' }}>
          <button type="button" onClick={() => alert('Cancelled')}>
            Cancel
          </button>
          <button type="submit" style={{ marginLeft: '0.5rem' }}>
            Save
          </button>
        </div>
      </form>

      {showPopup && (
        <div style={{ marginTop: '1rem', color: 'green' }}>
          Data Tersimpan
        </div>
      )}
    </div>
  )
}

export default FormPasienBaru
