import React, { useState } from 'react'
import PropTypes from 'prop-types'
import PatientShowDetails from './PatientShowDetails'
import PatientAddNewRecord from './PatientAddNewRecord'

const PatientInfoData = ({ patientSearch, getSearchByPatient }) => {
  const [isAddNewDiagnosis, setIsAddNewDiagnosis] = useState(false)
  const [isDetails, setIsDetailed] = useState(false)
  const [selectedPatientId, setSelectedPatientId] = useState('')
  const [addDiagnosisPatientId, setAddDiagnosisPatientId] = useState('')

  const handleToggleDetails = (patientId) => {
    setSelectedPatientId((prevState) => (prevState === patientId ? '' : patientId))
    setAddDiagnosisPatientId('')
    // setIsAddNewDiagnosis(false)
    setIsDetailed(true)
  }

  const handleAddDiagnosis = (patientId) => {
    setAddDiagnosisPatientId(patientId)
    setSelectedPatientId(patientId)
    setIsAddNewDiagnosis(true)
    setIsDetailed(false)
  }

  return (
    <div>
      {patientSearch?.map((patient) => {
        const { name, crn, phone, age, sex, diagnosis, _id, desc, nextApointmentDate } = patient
        const isDetailsOpen = selectedPatientId === _id
        const isAddDiagnosisOpen = addDiagnosisPatientId === _id
        const inputDate = nextApointmentDate

        const date = new Date(inputDate)
        const formattedDate = date
          .toLocaleString('en-IN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          })
          .replace(/\//g, '/')

        return (
          <div key={_id} className="row">
            <div style={{ marginTop: '2rem' }}>
              <div className="card" style={{ width: '100%' }}>
                <div className="card-body overflow-auto ">
                  <h5 className="card-title"> CR No : {crn}</h5>
                  <h6 className="card-subtitle mt-2">
                    <h5>Name : {name}</h5>
                  </h6>
                  <div style={{ display: 'flex', marginTop: '1rem' }}>
                    {/* <p className="card-text">CRN No. {crn}</p> */}
                    <span style={{ display: 'flex' }}>
                      <h6>Phone No. &nbsp;</h6> <h6 style={{ fontWeight: 'normal' }}>{phone}</h6>
                    </span>
                    <span style={{ display: 'flex', marginLeft: '2rem' }}>
                      <h6>Age. &nbsp;</h6> <h6 style={{ fontWeight: 'normal' }}>{age}</h6>
                    </span>
                    <span style={{ display: 'flex', marginLeft: '2rem' }}>
                      <h6> Sex. &nbsp;</h6> <h6 style={{ fontWeight: 'normal' }}>{sex}</h6>
                    </span>
                    <span style={{ display: 'flex', marginLeft: '2rem' }}>
                      <h6>Next Appointment Date. &nbsp;</h6>{' '}
                      <h6 style={{ fontWeight: 'normal' }}>
                        {nextApointmentDate ? formattedDate : '-'}
                      </h6>
                    </span>
                    {/* <p className="card-text">Phone No. {phone}</p>
                    <p className="card-text" style={{ marginLeft: '3rem' }}>
                      Age : {age}
                    </p>
                    <p className="card-text" style={{ marginLeft: '3rem' }}>
                      Sex : {sex}
                    </p>
                    <p className="card-text" style={{ marginLeft: '3rem' }}>
                      Next Appointment Date : {formattedDate}
                    </p> */}
                  </div>
                  <div className="text-end">
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => handleToggleDetails(_id)}
                    >
                      {/* {isDetails ? 'Close Details' : 'Show Details'} */}
                      Show Diagnosis
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning"
                      style={{ marginLeft: '2rem' }}
                      onClick={() => handleAddDiagnosis(_id)}
                    >
                      Add New Diagnosis
                    </button>
                  </div>
                  {isDetailsOpen && isDetails && (
                    <div>
                      <PatientShowDetails diagnosis={diagnosis} desc={desc} />
                    </div>
                  )}
                  {isAddDiagnosisOpen && isAddNewDiagnosis && (
                    <div>
                      <PatientAddNewRecord
                        _id={_id}
                        getSearchByPatient={getSearchByPatient}
                        setIsAddNewDiagnosis={setIsAddNewDiagnosis}
                        setIsDetailed={setIsDetailed}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

PatientInfoData.propTypes = {
  patientSearch: PropTypes.array.isRequired,
  getSearchByPatient: PropTypes.func.isRequired,
}

export default PatientInfoData
