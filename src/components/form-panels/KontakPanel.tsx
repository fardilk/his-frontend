import React from 'react'

interface Props {
  data: {
    countryCode: string
    phoneNumber: string
    email: string
  }
  onChange: (field: string, value: string) => void
}

const KontakPanel: React.FC<Props> = ({ data, onChange }) => (
  <fieldset>
    <legend>Phone &amp; Email</legend>
    <div>
      <label>Country Code:</label>
      <select value={data.countryCode} onChange={e => onChange('countryCode', e.target.value)}>
        <option value="">-- Select --</option>
        <option value="62">+62</option>
        <option value="1">+1</option>
      </select>
    </div>
    <div>
      <label>Phone Number:</label>
      <input type="text" value={data.phoneNumber} onChange={e => onChange('phoneNumber', e.target.value)} />
    </div>
    <div>
      <label>Email:</label>
      <input type="email" value={data.email} onChange={e => onChange('email', e.target.value)} />
    </div>
    <button type="button">Add Contact</button>
  </fieldset>
)

export default KontakPanel
