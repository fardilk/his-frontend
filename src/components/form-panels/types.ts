export interface IdentityNumberForm {
  nationality: string
  idType: string
  idNumber: string
}

export interface PatientDataForm {
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

export interface AddressForm {
  searchRegion: string
  village: string
  subDistrict: string
  city: string
  province: string
  regionCode: string
  rt: string
  rw: string
}

export interface ContactForm {
  countryCode: string
  phoneNumber: string
  email: string
}

export interface EmergencyContactForm {
  relationship: string
  name: string
  countryCode: string
  phoneNumber: string
  email: string
  address: string
}

export interface FormState {
  emergency: boolean
  identityNumber: IdentityNumberForm
  patientData: PatientDataForm
  identityAddress: AddressForm
  sameAsIdentity: boolean
  domicileAddress: AddressForm
  contact: ContactForm
  emergencyContact: EmergencyContactForm
  familyPatient: string
}

export type SectionKey =
  | 'identityNumber'
  | 'patientData'
  | 'identityAddress'
  | 'domicileAddress'
  | 'contact'
  | 'emergencyContact'

export type SimpleKey = 'emergency' | 'sameAsIdentity' | 'familyPatient'

export const initialState: FormState = {
  emergency: false,
  identityNumber: { nationality: '', idType: '', idNumber: '' },
  patientData: {
    salutation: '',
    fullName: '',
    placeOfBirth: '',
    dateOfBirth: '',
    gender: '',
    maritalStatus: '',
    country: '',
    bloodType: '',
    religion: '',
    language: '',
    ethnicity: '',
    lastEducation: '',
    occupation: '',
  },
  identityAddress: {
    searchRegion: '',
    village: '',
    subDistrict: '',
    city: '',
    province: '',
    regionCode: '',
    rt: '',
    rw: '',
  },
  sameAsIdentity: false,
  domicileAddress: {
    searchRegion: '',
    village: '',
    subDistrict: '',
    city: '',
    province: '',
    regionCode: '',
    rt: '',
    rw: '',
  },
  contact: { countryCode: '', phoneNumber: '', email: '' },
  emergencyContact: {
    relationship: '',
    name: '',
    countryCode: '',
    phoneNumber: '',
    email: '',
    address: '',
  },
  familyPatient: '',
}
