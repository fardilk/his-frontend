import React from 'react'

interface Props {
  value: string
  onChange: (value: string) => void
}

const HubunganKeluargaPanel: React.FC<Props> = ({ value, onChange }) => (
  <fieldset>
    <legend>Family Relationship</legend>
    <div>
      <label>Search Family Patient:</label>
      <input type="text" value={value} onChange={e => onChange(e.target.value)} />
    </div>
  </fieldset>
)

export default HubunganKeluargaPanel
