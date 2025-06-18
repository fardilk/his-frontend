import React from 'react'
import { IdentityNumberForm } from './types'

interface Props {
  data: IdentityNumberForm
  onChange: <K extends keyof IdentityNumberForm>(
    field: K,
    value: IdentityNumberForm[K],
  ) => void
}

const NomorIdentitasPanel: React.FC<Props> = ({ data, onChange }) => (
  <fieldset className="border rounded p-4 space-y-3">
    <legend className="font-medium">Identity Number</legend>
    <div className="space-y-1">
      <label className="block text-sm">Nationality:</label>
      <select
        className="w-full border rounded p-2"
        value={data.nationality}
        onChange={e => onChange('nationality', e.target.value)}
      >
        <option value="">-- Select --</option>
        <option value="WNI">WNI</option>
        <option value="WNA">WNA</option>
      </select>
    </div>
    <div className="space-y-1">
      <label className="block text-sm">ID Type:</label>
      <select
        className="w-full border rounded p-2"
        value={data.idType}
        onChange={e => onChange('idType', e.target.value)}
      >
        <option value="">-- Select --</option>
        <option value="KTP">KTP</option>
        <option value="SIM">SIM</option>
        <option value="Passport">Passport</option>
      </select>
    </div>
    <div className="space-y-1">
      <label className="block text-sm">ID Number:</label>
      <input
        className="w-full border rounded p-2"
        type="text"
        value={data.idNumber}
        onChange={e => onChange('idNumber', e.target.value)}
      />
    </div>
  </fieldset>
)

export default NomorIdentitasPanel
