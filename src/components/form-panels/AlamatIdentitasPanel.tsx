import React from 'react'
import { AddressForm } from './types'

interface Props {
  data: AddressForm
  onChange: <K extends keyof AddressForm>(
    field: K,
    value: AddressForm[K],
  ) => void
}

const AlamatIdentitasPanel: React.FC<Props> = ({ data, onChange }) => (
  <fieldset>
    <legend>Identity Address</legend>
    <div>
      <label>Search Region:</label>
      <input type="text" value={data.searchRegion} onChange={e => onChange('searchRegion', e.target.value)} />
    </div>
    <div>
      <label>Village:</label>
      <input type="text" value={data.village} onChange={e => onChange('village', e.target.value)} />
    </div>
    <div>
      <label>Sub-district:</label>
      <input type="text" value={data.subDistrict} onChange={e => onChange('subDistrict', e.target.value)} />
    </div>
    <div>
      <label>City/Regency:</label>
      <input type="text" value={data.city} onChange={e => onChange('city', e.target.value)} />
    </div>
    <div>
      <label>Province:</label>
      <input type="text" value={data.province} onChange={e => onChange('province', e.target.value)} />
    </div>
    <div>
      <label>Region Code:</label>
      <input type="text" value={data.regionCode} onChange={e => onChange('regionCode', e.target.value)} />
    </div>
    <div>
      <label>RT:</label>
      <input type="text" value={data.rt} onChange={e => onChange('rt', e.target.value)} />
    </div>
    <div>
      <label>RW:</label>
      <input type="text" value={data.rw} onChange={e => onChange('rw', e.target.value)} />
    </div>
  </fieldset>
)

export default AlamatIdentitasPanel
