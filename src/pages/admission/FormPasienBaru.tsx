import { useState } from 'react'
import NomorIdentitasPanel from '../../components/form-panels/NomorIdentitasPanel'
import DataPasienPanel from '../../components/form-panels/DataPasienPanel'
import AlamatIdentitasPanel from '../../components/form-panels/AlamatIdentitasPanel'
import AlamatDomisiliPanel from '../../components/form-panels/AlamatDomisiliPanel'
import KontakPanel from '../../components/form-panels/KontakPanel'
import KontakDaruratPanel from '../../components/form-panels/KontakDaruratPanel'
import HubunganKeluargaPanel from '../../components/form-panels/HubunganKeluargaPanel'
import {
  FormState,
  SectionKey,
  SimpleKey,
  initialState,
} from '../../components/form-panels/types'


const FormPasienBaru: React.FC = () => {
  const [form, setForm] = useState<FormState>(initialState)

  const [showPopup, setShowPopup] = useState(false)

  const handleChange = <S extends SectionKey>(
    section: S,
    field: keyof FormState[S],
    value: FormState[S][keyof FormState[S]],
  ) => {
    setForm(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }))
  }

  const handleSimpleChange = <S extends SimpleKey>(
    field: S,
    value: FormState[S],
  ) => {
    setForm(prev => ({
      ...prev,
      [field]: value,
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
