import React from 'react'
import { ContactForm } from './types'
import Button from '../Button'

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
    <Button type="button" variant="secondary">Add Contact</Button>
  </fieldset>
)

export default KontakPanel
