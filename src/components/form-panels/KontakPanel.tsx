import React from 'react'
import { ContactForm } from './types'
const baseButtonClasses =
  'px-4 py-2 rounded focus:outline-none focus:ring text-sm font-bold transition'
const secondaryButton = `${baseButtonClasses} bg-gray-200 text-gray-800 hover:bg-gray-300`

interface Props {
  data: ContactForm
  onChange: <K extends keyof ContactForm>(
    field: K,
    value: ContactForm[K],
  ) => void
}

const KontakPanel: React.FC<Props> = ({ data, onChange }) => (
  <fieldset className="border rounded p-4 space-y-3">
    <legend className="font-medium">Phone &amp; Email</legend>
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
    <button type="button" className={secondaryButton}>
      Add Contact
    </button>
  </fieldset>
)

export default KontakPanel
