import React from 'react'

interface Props {
  data: {
    nationality: string
    idType: string
    idNumber: string
  }
  onChange: (field: string, value: string) => void
}

const NomorIdentitasPanel: React.FC<Props> = ({ data, onChange }) => (
  <fieldset>
    <legend>Identity Number</legend>
    <div>
      <label>Nationality:</label>
      <select value={data.nationality} onChange={e => onChange('nationality', e.target.value)}>
        <option value="">-- Select --</option>
        <option value="WNI">WNI</option>
        <option value="WNA">WNA</option>
      </select>
    </div>
    <div>
      <label>ID Type:</label>
      <select value={data.idType} onChange={e => onChange('idType', e.target.value)}>
        <option value="">-- Select --</option>
        <option value="KTP">KTP</option>
        <option value="SIM">SIM</option>
        <option value="Passport">Passport</option>
      </select>
    </div>
    <div>
      <label>ID Number:</label>
      <input type="text" value={data.idNumber} onChange={e => onChange('idNumber', e.target.value)} />
    </div>
  </fieldset>
)

export default NomorIdentitasPanel
