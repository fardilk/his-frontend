import React from 'react'

interface Props {
  value: string
  onChange: (value: string) => void
}

const HubunganKeluargaPanel: React.FC<Props> = ({ value, onChange }) => (
  <fieldset className="border rounded p-4 space-y-3">
    <legend className="font-medium">Family Relationship</legend>
    <div className="space-y-1">
      <label className="block text-sm">Search Family Patient:</label>
      <input
        className="w-full border rounded p-2"
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  </fieldset>
)

export default HubunganKeluargaPanel
