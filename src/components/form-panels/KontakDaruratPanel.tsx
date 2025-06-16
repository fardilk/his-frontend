import React from 'react'

interface Props {
  data: {
    relationship: string
    name: string
    countryCode: string
    phoneNumber: string
    email: string
    address: string
  }
  onChange: (field: string, value: string) => void
}

const KontakDaruratPanel: React.FC<Props> = ({ data, onChange }) => (
  <fieldset>
    <legend>Emergency Contact</legend>
    <div>
      <label>Relationship:</label>
      <select value={data.relationship} onChange={e => onChange('relationship', e.target.value)}>
        <option value="">-- Select --</option>
        <option value="Ortu">Ortu</option>
        <option value="Pasangan">Pasangan</option>
        <option value="Teman">Teman</option>
      </select>
    </div>
    <div>
      <label>Name:</label>
      <input type="text" value={data.name} onChange={e => onChange('name', e.target.value)} />
    </div>
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
    <div>
      <label>Address:</label>
      <input type="text" value={data.address} onChange={e => onChange('address', e.target.value)} />
    </div>
  </fieldset>
)

export default KontakDaruratPanel
