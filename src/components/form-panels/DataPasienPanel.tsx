import React from 'react'
import { PatientDataForm } from './types'

interface Props {
  data: PatientDataForm
  onChange: <K extends keyof PatientDataForm>(
    field: K,
    value: PatientDataForm[K],
  ) => void
}

const DataPasienPanel: React.FC<Props> = ({ data, onChange }) => (
  <fieldset className="border rounded p-4 space-y-3">
    <legend className="font-medium">Patient Data</legend>
    
    <div className="space-y-1">
      <label className="block text-sm">Upload Photo:</label>
      <input className="w-full border rounded p-2" type="file" disabled />
    </div>
    
    <div className="space-y-1">
      <label className="block text-sm">Salutation:</label>
      <select className="w-full border rounded p-2" value={data.salutation} onChange={e => onChange('salutation', e.target.value)}>
        <option value="">-- Select --</option>
        <option value="Tn">Tn</option>
        <option value="Ny">Ny</option>
        <option value="Sdri">Sdri</option>
      </select>
    </div>
    
    <div className="space-y-1">
      <label className="block text-sm">Full Name:</label>
      <input className="w-full border rounded p-2" type="text" value={data.fullName} onChange={e => onChange('fullName', e.target.value)} />
    </div>
    
    <div className="space-y-1">
      <label className="block text-sm">Place of Birth:</label>
      <input className="w-full border rounded p-2" type="text" value={data.placeOfBirth} onChange={e => onChange('placeOfBirth', e.target.value)} />
    </div>
    
    <div className="space-y-1">
      <label className="block text-sm">Date of Birth:</label>
      <input className="w-full border rounded p-2" type="date" value={data.dateOfBirth} onChange={e => onChange('dateOfBirth', e.target.value)} />
    </div>
    
    <div className="space-y-1">
      <label className="block text-sm">Gender:</label>
      <select className="w-full border rounded p-2" value={data.gender} onChange={e => onChange('gender', e.target.value)}>
        <option value="">-- Select --</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
    
    <div className="space-y-1">
      <label className="block text-sm">Marital Status:</label>
      <select className="w-full border rounded p-2" value={data.maritalStatus} onChange={e => onChange('maritalStatus', e.target.value)}>
        <option value="">-- Select --</option>
        <option value="Single">Single</option>
        <option value="Married">Married</option>
        <option value="Divorced">Divorced</option>
      </select>
    </div>
    
    <div className="space-y-1">
      <label className="block text-sm">Country:</label>
      <select className="w-full border rounded p-2" value={data.country} onChange={e => onChange('country', e.target.value)}>
        <option value="">-- Select --</option>
        <option value="Indonesia">Indonesia</option>
        <option value="USA">USA</option>
      </select>
    </div>
    
    <div className="space-y-1">
      <label className="block text-sm">Blood Type:</label>
      <select className="w-full border rounded p-2" value={data.bloodType} onChange={e => onChange('bloodType', e.target.value)}>
        <option value="">-- Select --</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
      </select>
    </div>
    
    <div className="space-y-1">
      <label className="block text-sm">Religion:</label>
      <select className="w-full border rounded p-2" value={data.religion} onChange={e => onChange('religion', e.target.value)}>
        <option value="">-- Select --</option>
        <option value="Islam">Islam</option>
        <option value="Christian">Christian</option>
        <option value="Catholic">Catholic</option>
      </select>
    </div>
    
    <div className="space-y-1">
      <label className="block text-sm">Language:</label>
      <select className="w-full border rounded p-2" value={data.language} onChange={e => onChange('language', e.target.value)}>
        <option value="">-- Select --</option>
        <option value="Indonesian">Indonesian</option>
        <option value="English">English</option>
        <option value="Javanese">Javanese</option>
        <option value="Minang">Minang</option>
        <option value="Sundanese">Sundanese</option>
      </select>
    </div>
    
    <div className="space-y-1">
      <label className="block text-sm">Ethnicity:</label>
      <select className="w-full border rounded p-2" value={data.ethnicity} onChange={e => onChange('ethnicity', e.target.value)}>
        <option value="">-- Select --</option>
        <option value="Batak">Batak</option>
        <option value="Minang">Minang</option>
        <option value="Sundanese">Sundanese</option>
        <option value="Javanese">Javanese</option>
      </select>
    </div>
    
    <div className="space-y-1">
      <label className="block text-sm">Last Education:</label>
      <select className="w-full border rounded p-2" value={data.lastEducation} onChange={e => onChange('lastEducation', e.target.value)}>
        <option value="">-- Select --</option>
        <option value="SD">SD</option>
        <option value="SMP">SMP</option>
        <option value="SMA">SMA</option>
        <option value="S1">S1</option>
        <option value="S2">S2</option>
        <option value="S3">S3</option>
      </select>
    </div>
    
    <div className="space-y-1">
      <label className="block text-sm">Occupation:</label>
      <select className="w-full border rounded p-2" value={data.occupation} onChange={e => onChange('occupation', e.target.value)}>
        <option value="">-- Select --</option>
        <option value="Teacher">Teacher</option>
        <option value="Military">Military</option>
        <option value="Entrepreneur">Entrepreneur</option>
        <option value="Civil Servant">Civil Servant</option>
        <option value="Other">Other</option>
      </select>
    </div>
  </fieldset>
)

export default DataPasienPanel
