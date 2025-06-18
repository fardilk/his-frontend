import React from 'react'
import { EmergencyContactForm } from './types'

interface Props {
  data: EmergencyContactForm
  onChange: <K extends keyof EmergencyContactForm>(
    field: K,
    value: EmergencyContactForm[K],
  ) => void
}

const KontakDaruratPanel: React.FC<Props> = ({ data, onChange }) => (
  <fieldset className="border rounded p-4 space-y-3">
    <legend className="font-medium">Emergency Contact</legend>
    <div className="space-y-1">
      <label className="block text-sm">Relationship:</label>
      <select className="w-full border rounded p-2" value={data.relationship} onChange={e => onChange('relationship', e.target.value)}>
        <option value="">-- Select --</option>
        <option value="Ortu">Ortu</option>
        <option value="Pasangan">Pasangan</option>
        <option value="Teman">Teman</option>
      </select>
    </div>
    <div className="space-y-1">
      <label className="block text-sm">Name:</label>
      <input className="w-full border rounded p-2" type="text" value={data.name} onChange={e => onChange('name', e.target.value)} />
    </div>
    <div className="space-y-1">
      <label className="block text-sm">Country Code:</label>
      <select className="w-full border rounded p-2" value={data.countryCode} onChange={e => onChange('countryCode', e.target.value)}>
        <option value="">-- Select --</option>
        <option value="62">+62</option>
        <option value="1">+1</option>
      </select>
    </div>
    <div className="space-y-1">
      <label className="block text-sm">Phone Number:</label>
      <input className="w-full border rounded p-2" type="text" value={data.phoneNumber} onChange={e => onChange('phoneNumber', e.target.value)} />
    </div>
    <div className="space-y-1">
      <label className="block text-sm">Email:</label>
      <input className="w-full border rounded p-2" type="email" value={data.email} onChange={e => onChange('email', e.target.value)} />
    </div>
    <div className="space-y-1">
      <label className="block text-sm">Address:</label>
      <input className="w-full border rounded p-2" type="text" value={data.address} onChange={e => onChange('address', e.target.value)} />
    </div>
  </fieldset>
)

export default KontakDaruratPanel
