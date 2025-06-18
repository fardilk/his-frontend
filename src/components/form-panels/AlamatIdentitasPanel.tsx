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
  <fieldset className="border rounded p-4 space-y-3">
    <legend className="font-medium">Identity Address</legend>
    <div className="space-y-1">
      <label className="block text-sm">Search Region:</label>
      <input className="w-full border rounded p-2" type="text" value={data.searchRegion} onChange={e => onChange('searchRegion', e.target.value)} />
    </div>
    <div className="space-y-1">
      <label className="block text-sm">Village:</label>
      <input className="w-full border rounded p-2" type="text" value={data.village} onChange={e => onChange('village', e.target.value)} />
    </div>
    <div className="space-y-1">
      <label className="block text-sm">Sub-district:</label>
      <input className="w-full border rounded p-2" type="text" value={data.subDistrict} onChange={e => onChange('subDistrict', e.target.value)} />
    </div>
    <div className="space-y-1">
      <label className="block text-sm">City/Regency:</label>
      <input className="w-full border rounded p-2" type="text" value={data.city} onChange={e => onChange('city', e.target.value)} />
    </div>
    <div className="space-y-1">
      <label className="block text-sm">Province:</label>
      <input className="w-full border rounded p-2" type="text" value={data.province} onChange={e => onChange('province', e.target.value)} />
    </div>
    <div className="space-y-1">
      <label className="block text-sm">Region Code:</label>
      <input className="w-full border rounded p-2" type="text" value={data.regionCode} onChange={e => onChange('regionCode', e.target.value)} />
    </div>
    <div className="space-y-1">
      <label className="block text-sm">RT:</label>
      <input className="w-full border rounded p-2" type="text" value={data.rt} onChange={e => onChange('rt', e.target.value)} />
    </div>
    <div className="space-y-1">
      <label className="block text-sm">RW:</label>
      <input className="w-full border rounded p-2" type="text" value={data.rw} onChange={e => onChange('rw', e.target.value)} />
    </div>
  </fieldset>
)

export default AlamatIdentitasPanel
