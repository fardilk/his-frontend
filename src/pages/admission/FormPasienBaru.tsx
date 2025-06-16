import { useState } from 'react'

const FormPasienBaru: React.FC = () => {
  // Emergency registration
  const [emergency, setEmergency] = useState(false)

  // Identity number panel
  const [nationality, setNationality] = useState('')
  const [idType, setIdType] = useState('')
  const [idNumber, setIdNumber] = useState('')

  // Patient data panel
  const [salutation, setSalutation] = useState('')
  const [fullName, setFullName] = useState('')
  const [placeOfBirth, setPlaceOfBirth] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [gender, setGender] = useState('')
  const [maritalStatus, setMaritalStatus] = useState('')
  const [country, setCountry] = useState('')
  const [bloodType, setBloodType] = useState('')
  const [religion, setReligion] = useState('')
  const [language, setLanguage] = useState('')
  const [ethnicity, setEthnicity] = useState('')
  const [lastEducation, setLastEducation] = useState('')
  const [occupation, setOccupation] = useState('')

  // Identity address
  const [identitySearchRegion, setIdentitySearchRegion] = useState('')
  const [identityVillage, setIdentityVillage] = useState('')
  const [identitySubDistrict, setIdentitySubDistrict] = useState('')
  const [identityCity, setIdentityCity] = useState('')
  const [identityProvince, setIdentityProvince] = useState('')
  const [identityRegionCode, setIdentityRegionCode] = useState('')
  const [identityRt, setIdentityRt] = useState('')
  const [identityRw, setIdentityRw] = useState('')

  // Domicile address
  const [sameAsIdentity, setSameAsIdentity] = useState(false)
  const [domicileSearchRegion, setDomicileSearchRegion] = useState('')
  const [domicileVillage, setDomicileVillage] = useState('')
  const [domicileSubDistrict, setDomicileSubDistrict] = useState('')
  const [domicileCity, setDomicileCity] = useState('')
  const [domicileProvince, setDomicileProvince] = useState('')
  const [domicileRegionCode, setDomicileRegionCode] = useState('')
  const [domicileRt, setDomicileRt] = useState('')
  const [domicileRw, setDomicileRw] = useState('')

  // Phone and email
  const [phoneCountryCode, setPhoneCountryCode] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')

  // Emergency contact
  const [emergencyRelationship, setEmergencyRelationship] = useState('')
  const [emergencyName, setEmergencyName] = useState('')
  const [emergencyCountryCode, setEmergencyCountryCode] = useState('')
  const [emergencyPhone, setEmergencyPhone] = useState('')
  const [emergencyEmail, setEmergencyEmail] = useState('')
  const [emergencyAddress, setEmergencyAddress] = useState('')

  // Family relationship
  const [familyPatient, setFamilyPatient] = useState('')

  const [showPopup, setShowPopup] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const data = {
      emergencyPatient: emergency,
      identityNumber: {
        nationality,
        idType,
        idNumber,
      },
      patientData: {
        salutation,
        fullName,
        placeOfBirth,
        dateOfBirth,
        gender,
        maritalStatus,
        country,
        bloodType,
        religion,
        language,
        ethnicity,
        lastEducation,
        occupation,
      },
      identityAddress: {
        searchRegion: identitySearchRegion,
        village: identityVillage,
        subDistrict: identitySubDistrict,
        city: identityCity,
        province: identityProvince,
        regionCode: identityRegionCode,
        rt: identityRt,
        rw: identityRw,
      },
      domicileAddress: sameAsIdentity
        ? 'SAME_AS_IDENTITY'
        : {
            searchRegion: domicileSearchRegion,
            village: domicileVillage,
            subDistrict: domicileSubDistrict,
            city: domicileCity,
            province: domicileProvince,
            regionCode: domicileRegionCode,
            rt: domicileRt,
            rw: domicileRw,
          },
      contact: {
        countryCode: phoneCountryCode,
        phoneNumber,
        email,
      },
      emergencyContact: {
        relationship: emergencyRelationship,
        name: emergencyName,
        countryCode: emergencyCountryCode,
        phoneNumber: emergencyPhone,
        email: emergencyEmail,
        address: emergencyAddress,
      },
      familyPatient,
    }

    console.log(data)
    setShowPopup(true)
    setTimeout(() => setShowPopup(false), 2000)
  }

  return (
    <div>
      <h2>Registrasi Pasien Baru</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="checkbox"
              checked={emergency}
              onChange={(e) => setEmergency(e.target.checked)}
            />
            Register as Emergency Patient
          </label>
        </div>

        {/* Identity Number Panel */}
        <fieldset>
          <legend>Identity Number</legend>
          <div>
            <label>Nationality:</label>
            <select
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            >
              <option value="">-- Select --</option>
              <option value="WNI">WNI</option>
              <option value="WNA">WNA</option>
            </select>
          </div>
          <div>
            <label>ID Type:</label>
            <select value={idType} onChange={(e) => setIdType(e.target.value)}>
              <option value="">-- Select --</option>
              <option value="KTP">KTP</option>
              <option value="SIM">SIM</option>
              <option value="Passport">Passport</option>
            </select>
          </div>
          <div>
            <label>ID Number:</label>
            <input
              type="text"
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
            />
          </div>
        </fieldset>

        {/* Patient Data Panel */}
        <fieldset>
          <legend>Patient Data</legend>
          <div>
            <label>Upload Photo:</label>
            <input type="file" disabled />
          </div>
          <div>
            <label>Salutation:</label>
            <select
              value={salutation}
              onChange={(e) => setSalutation(e.target.value)}
            >
              <option value="">-- Select --</option>
              <option value="Tn">Tn</option>
              <option value="Ny">Ny</option>
              <option value="Sdri">Sdri</option>
            </select>
          </div>
          <div>
            <label>Full Name:</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <label>Place of Birth:</label>
            <input
              type="text"
              value={placeOfBirth}
              onChange={(e) => setPlaceOfBirth(e.target.value)}
            />
          </div>
          <div>
            <label>Date of Birth:</label>
            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </div>
          <div>
            <label>Gender:</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">-- Select --</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <label>Marital Status:</label>
            <select
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
            >
              <option value="">-- Select --</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
            </select>
          </div>
          <div>
            <label>Country:</label>
            <select value={country} onChange={(e) => setCountry(e.target.value)}>
              <option value="">-- Select --</option>
              <option value="Indonesia">Indonesia</option>
              <option value="USA">USA</option>
            </select>
          </div>
          <div>
            <label>Blood Type:</label>
            <select
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
            >
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
            <select
              value={religion}
              onChange={(e) => setReligion(e.target.value)}
            >
              <option value="">-- Select --</option>
              <option value="Islam">Islam</option>
              <option value="Christian">Christian</option>
              <option value="Catholic">Catholic</option>
            </select>
          </div>
          <div>
            <label>Language:</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
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
            <select
              value={ethnicity}
              onChange={(e) => setEthnicity(e.target.value)}
            >
              <option value="">-- Select --</option>
              <option value="Batak">Batak</option>
              <option value="Minang">Minang</option>
              <option value="Sundanese">Sundanese</option>
              <option value="Javanese">Javanese</option>
            </select>
          </div>
          <div>
            <label>Last Education:</label>
            <select
              value={lastEducation}
              onChange={(e) => setLastEducation(e.target.value)}
            >
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
            <select
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            >
              <option value="">-- Select --</option>
              <option value="Teacher">Teacher</option>
              <option value="Military">Military</option>
              <option value="Entrepreneur">Entrepreneur</option>
              <option value="Civil Servant">Civil Servant</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </fieldset>

        {/* Identity Address */}
        <fieldset>
          <legend>Identity Address</legend>
          <div>
            <label>Search Region:</label>
            <input
              type="text"
              value={identitySearchRegion}
              onChange={(e) => setIdentitySearchRegion(e.target.value)}
            />
          </div>
          <div>
            <label>Village:</label>
            <input
              type="text"
              value={identityVillage}
              onChange={(e) => setIdentityVillage(e.target.value)}
            />
          </div>
          <div>
            <label>Sub-district:</label>
            <input
              type="text"
              value={identitySubDistrict}
              onChange={(e) => setIdentitySubDistrict(e.target.value)}
            />
          </div>
          <div>
            <label>City/Regency:</label>
            <input
              type="text"
              value={identityCity}
              onChange={(e) => setIdentityCity(e.target.value)}
            />
          </div>
          <div>
            <label>Province:</label>
            <input
              type="text"
              value={identityProvince}
              onChange={(e) => setIdentityProvince(e.target.value)}
            />
          </div>
          <div>
            <label>Region Code:</label>
            <input
              type="text"
              value={identityRegionCode}
              onChange={(e) => setIdentityRegionCode(e.target.value)}
            />
          </div>
          <div>
            <label>RT:</label>
            <input
              type="text"
              value={identityRt}
              onChange={(e) => setIdentityRt(e.target.value)}
            />
          </div>
          <div>
            <label>RW:</label>
            <input
              type="text"
              value={identityRw}
              onChange={(e) => setIdentityRw(e.target.value)}
            />
          </div>
        </fieldset>

        {/* Domicile Address */}
        <fieldset>
          <legend>Domicile Address</legend>
          <div>
            <label>
              <input
                type="checkbox"
                checked={sameAsIdentity}
                onChange={(e) => setSameAsIdentity(e.target.checked)}
              />
              Same as Identity Address
            </label>
          </div>
          {!sameAsIdentity && (
            <div>
              <div>
                <label>Search Region:</label>
                <input
                  type="text"
                  value={domicileSearchRegion}
                  onChange={(e) => setDomicileSearchRegion(e.target.value)}
                />
              </div>
              <div>
                <label>Village:</label>
                <input
                  type="text"
                  value={domicileVillage}
                  onChange={(e) => setDomicileVillage(e.target.value)}
                />
              </div>
              <div>
                <label>Sub-district:</label>
                <input
                  type="text"
                  value={domicileSubDistrict}
                  onChange={(e) => setDomicileSubDistrict(e.target.value)}
                />
              </div>
              <div>
                <label>City/Regency:</label>
                <input
                  type="text"
                  value={domicileCity}
                  onChange={(e) => setDomicileCity(e.target.value)}
                />
              </div>
              <div>
                <label>Province:</label>
                <input
                  type="text"
                  value={domicileProvince}
                  onChange={(e) => setDomicileProvince(e.target.value)}
                />
              </div>
              <div>
                <label>Region Code:</label>
                <input
                  type="text"
                  value={domicileRegionCode}
                  onChange={(e) => setDomicileRegionCode(e.target.value)}
                />
              </div>
              <div>
                <label>RT:</label>
                <input
                  type="text"
                  value={domicileRt}
                  onChange={(e) => setDomicileRt(e.target.value)}
                />
              </div>
              <div>
                <label>RW:</label>
                <input
                  type="text"
                  value={domicileRw}
                  onChange={(e) => setDomicileRw(e.target.value)}
                />
              </div>
            </div>
          )}
        </fieldset>

        {/* Phone and Email */}
        <fieldset>
          <legend>Phone &amp; Email</legend>
          <div>
            <label>Country Code:</label>
            <select
              value={phoneCountryCode}
              onChange={(e) => setPhoneCountryCode(e.target.value)}
            >
              <option value="">-- Select --</option>
              <option value="62">+62</option>
              <option value="1">+1</option>
            </select>
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="button">Add Contact</button>
        </fieldset>

        {/* Emergency Contact */}
        <fieldset>
          <legend>Emergency Contact</legend>
          <div>
            <label>Relationship:</label>
            <select
              value={emergencyRelationship}
              onChange={(e) => setEmergencyRelationship(e.target.value)}
            >
              <option value="">-- Select --</option>
              <option value="Ortu">Ortu</option>
              <option value="Pasangan">Pasangan</option>
              <option value="Teman">Teman</option>
            </select>
          </div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={emergencyName}
              onChange={(e) => setEmergencyName(e.target.value)}
            />
          </div>
          <div>
            <label>Country Code:</label>
            <select
              value={emergencyCountryCode}
              onChange={(e) => setEmergencyCountryCode(e.target.value)}
            >
              <option value="">-- Select --</option>
              <option value="62">+62</option>
              <option value="1">+1</option>
            </select>
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              value={emergencyPhone}
              onChange={(e) => setEmergencyPhone(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={emergencyEmail}
              onChange={(e) => setEmergencyEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              value={emergencyAddress}
              onChange={(e) => setEmergencyAddress(e.target.value)}
            />
          </div>
        </fieldset>

        {/* Family Relationship */}
        <fieldset>
          <legend>Family Relationship</legend>
          <div>
            <label>Search Family Patient:</label>
            <input
              type="text"
              value={familyPatient}
              onChange={(e) => setFamilyPatient(e.target.value)}
            />
          </div>
        </fieldset>

        {/* Action Buttons */}
        <div style={{ marginTop: '1rem' }}>
          <button type="button" onClick={() => alert('Cancelled')}>
            Cancel
          </button>
          <button type="submit" style={{ marginLeft: '0.5rem' }}>
            Save
          </button>
        </div>
      </form>
      {showPopup && (
        <div style={{ marginTop: '1rem', color: 'green' }}>Data Tersimpan</div>
      )}
    </div>
  )
}

export default FormPasienBaru
