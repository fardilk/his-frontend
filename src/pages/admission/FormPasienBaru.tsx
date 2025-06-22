import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NomorIdentitasPanel from '../../components/form-panels/NomorIdentitasPanel'
import DataPasienPanel from '../../components/form-panels/DataPasienPanel'
import AlamatIdentitasPanel from '../../components/form-panels/AlamatIdentitasPanel'
import AlamatDomisiliPanel from '../../components/form-panels/AlamatDomisiliPanel'
import KontakPanel from '../../components/form-panels/KontakPanel'
import KontakDaruratPanel from '../../components/form-panels/KontakDaruratPanel'
import HubunganKeluargaPanel from '../../components/form-panels/HubunganKeluargaPanel'
import SuccessToast from '../../components/SuccessToast'

import type { PatientFormState, SectionKey, SimpleKey } from '../../components/form-panels/types'
import { initialState } from '../../components/form-panels/types'

const baseButtonClasses =
  'px-4 py-2 rounded focus:outline-none focus:ring text-sm font-bold transition'
const primaryButton = `${baseButtonClasses} bg-blue-600 text-white hover:bg-blue-700`
const secondaryButton = `${baseButtonClasses} bg-gray-200 text-gray-800 hover:bg-gray-300`


const FormPasienBaru: React.FC = () => {
  const [form, setForm] = useState<PatientFormState>(initialState)

  const [showPopup, setShowPopup] = useState(false)
  const navigate = useNavigate()

  const handleChange = <S extends SectionKey, F extends keyof PatientFormState[S]>(
    section: S,
    field: F,
    value: PatientFormState[S][F],

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

    value: PatientFormState[S],

  ) => {
    setForm(prev => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

  const jsonData = JSON.stringify(form, null, 2)
  console.log("Saved JSON:", jsonData)
  localStorage.setItem('savedPatientData', jsonData)

  setShowPopup(true)

  // Delay before clearing and redirecting
  setTimeout(() => {
    // Clear saved data then navigate back
    localStorage.removeItem('savedPatientData')
    navigate('/admission', { replace: true })
  }, 2000)
}

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Registrasi Pasien Baru</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={form.emergency}
              onChange={(e) => handleSimpleChange('emergency', e.target.checked)}
            />
            <span>Register as Emergency Patient</span>
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

        <div className="pt-4 flex space-x-2">
          <button
            type="button"
            className={secondaryButton}
            onClick={() => navigate('/admission', { replace: true })}
          >
            Cancel
          </button>
          <button type="submit" className={primaryButton}>
            Save
          </button>
        </div>
      </form>

      {showPopup && (
        <SuccessToast
          message="Data Tersimpan"
          onClose={() => setShowPopup(false)}
        />
      )}
    </section>
  )
}

export default FormPasienBaru
