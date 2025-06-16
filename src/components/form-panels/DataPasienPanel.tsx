import React from 'react'

interface Props {
  data: {
    salutation: string
    fullName: string
    placeOfBirth: string
    dateOfBirth: string
    gender: string
    maritalStatus: string
    country: string
    bloodType: string
    religion: string
    language: string
    ethnicity: string
    lastEducation: string
    occupation: string
  }
  onChange: (field: string, value: string) => void
}

const DataPasienPanel: React.FC<Props> = ({ data, onChange }) => (
  <fieldset>
    <legend>Patient Data</legend>
    <div>
      <label>Upload Photo:</label>
      <input type="file" disabled />
    </div>
    <div>
      <label>Salutation:</label>
      <select value={data.salutation} onChange={e => onChange('salutation', e.target.value)}>
        <option value="">-- Select --</option>
        <option value="Tn">Tn</option>
        <option value="Ny">Ny</option>
        <option value="Sdri">Sdri</option>
      </select>
    </div>
    <div>
      <label>Full Name:</label>
      <input type="text" value={data.fullName} onChange={e => onChange('fullName', e.target.value)} />
    </div>
    <div>
      <label>Place of Birth:</label>
      <input type="text" value={data.placeOfBirth} onChange={e => onChange('placeOfBirth', e.target.value)} />
    </div>
    <div>
      <label>Date of Birth:</label>
      <input type="date" value={data.dateOfBirth} onChange={e => onChange('dateOfBirth', e.target.value)} />
    </div>
    <div>
      <label>Gender:</label>
      <select value={data.gender} onChange={e => onChange('gender', e.target.value)}>
        <option value="">-- Select --</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
    <div>
      <label>Marital Status:</label>
      <select value={data.maritalStatus} onChange={e => onChange('maritalStatus', e.target.value)}>
        <option value="">-- Select --</option>
        <option value="Single">Single</option>
        <option value="Married">Married</option>
        <option value="Divorced">Divorced</option>
      </select>
    </div>
    <div>
      <label>Country:</label>
      <select value={data.country} onChange={e => onChange('country', e.target.value)}>
        <option value="">-- Select --</option>
        <option value="Indonesia">Indonesia</option>
        <option value="USA">USA</option>
      </select>
    </div>
    <div>
      <label>Blood Type:</label>
      <select value={data.bloodType} onChange={e => onChange('bloodType', e.target.value)}>
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
    <div>
      <label>Religion:</label>
      <select value={data.religion} onChange={e => onChange('religion', e.target.value)}>
        <option value="">-- Select --</option>
        <option value="Islam">Islam</option>
        <option value="Christian">Christian</option>
        <option value="Catholic">Catholic</option>
      </select>
    </div>
    <div>
      <label>Language:</label>
      <select value={data.language} onChange={e => onChange('language', e.target.value)}>
        <option value="">-- Select --</option>
        <option value="Indonesian">Indonesian</option>
        <option value="English">English</option>
        <option value="Javanese">Javanese</option>
        <option value="Minang">Minang</option>
        <option value="Sundanese">Sundanese</option>
      </select>
    </div>
    <div>
      <label>Ethnicity:</label>
      <select value={data.ethnicity} onChange={e => onChange('ethnicity', e.target.value)}>
        <option value="">-- Select --</option>
        <option value="Batak">Batak</option>
        <option value="Minang">Minang</option>
        <option value="Sundanese">Sundanese</option>
        <option value="Javanese">Javanese</option>
      </select>
    </div>
    <div>
      <label>Last Education:</label>
      <select value={data.lastEducation} onChange={e => onChange('lastEducation', e.target.value)}>
        <option value="">-- Select --</option>
        <option value="SD">SD</option>
        <option value="SMP">SMP</option>
        <option value="SMA">SMA</option>
        <option value="S1">S1</option>
        <option value="S2">S2</option>
        <option value="S3">S3</option>
      </select>
    </div>
    <div>
      <label>Occupation:</label>
      <select value={data.occupation} onChange={e => onChange('occupation', e.target.value)}>
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
