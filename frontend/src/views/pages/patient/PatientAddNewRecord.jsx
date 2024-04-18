import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getFetch, postFetchFile, putFetchData } from 'src/api/Api'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SpinnerOverlay from 'src/views/publicItems/ SpinnerOverlay'
// import { API_URL } from 'src/constant'

const PatientAddNewRecord = ({
  _id,
  getSearchByPatient,
  setIsAddNewDiagnosis,
  setIsDetailed,
  diagnosisProp,
}) => {
  let API_URL = process.env.REACT_APP_API_URL
  let patientData = localStorage.getItem('patientRecord')
  let patientRecord = JSON.parse(patientData)
  PatientAddNewRecord.propTypes = {
    _id: PropTypes.string.isRequired,
    getSearchByPatient: PropTypes.string.isRequired,
    setIsAddNewDiagnosis: PropTypes.string.isRequired,
    setIsDetailed: PropTypes.string.isRequired,
    diagnosisProp: PropTypes.string.isRequired,
  }
  const [inputs, setInputs] = useState([
    { problem: '', test: '', testInput: '', files: [], scale: '', value: '' },
  ])

  const [lastDiagnosis, setLastDiagnosis] = useState('')

  useEffect(() => {
    const lastRecords = diagnosisProp[diagnosisProp.length - 1]
    const lastDiagnosis = lastRecords?.diagnosData[lastRecords?.diagnosData.length - 1]
    setLastDiagnosis(lastDiagnosis)
    console.log('Guarssadva', lastDiagnosis)
    setInputs([
      { problem: lastDiagnosis?.problem, test: '', testInput: '', files: [], scale: '', value: '' },
    ])
  }, [])

  const [startingDate, setStartingDate] = React.useState(null)
  const [patientById, setPatientById] = useState({})
  const [desc, setDesc] = useState('')
  const [formData, setFormData] = useState({
    diagnosis: [],
    desc: '',
  })
  const [diagnosis, setDiagnosis] = useState([])
  let [fileUploadingSpinner, setfileUploadingSpinner] = useState(false)
  const [problems, setProblems] = useState([])
  const [tests, setTests] = useState([])
  const [scales, setScales] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchProblems()
  }, [])

  const fetchProblems = async () => {
    try {
      const problemsResponse = await getFetch(
        `${API_URL}/api/problem/${patientRecord?.department_id?._id}`,
      )
      const problemsData = problemsResponse?.data?.data[0]
      if (problemsData) {
        const problemFilter = problemsData.problemName
          .filter((item) => item.type === 'problem')
          .map((problem) => problem.name)
        const scaleFilter = problemsData.problemName
          .filter((item) => item.type === 'scale')
          .map((scale) => scale.name)
        const testFilter = problemsData.problemName
          .filter((item) => item.type === 'test')
          .map(({ name, inputType }) => ({ name: name, inputType }))
        setTests(testFilter)
        setScales(scaleFilter)
        setProblems(problemFilter)
      }
    } catch (error) {
      console.error('Error fetching problems:', error)
    }
  }

  const handleStartingDateChange = (date) => {
    setStartingDate(date)
  }

  const getPatientById = async () => {
    try {
      const data = await getFetch(`${API_URL}/api/patient/${_id}`)
      setPatientById(data.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (inputs.length === 1 && inputs[0].problem === '') {
      return toast.warning('Please select at least one Chief complaint')
    }
    const filteredInputs = inputs.filter((data) => data.problem !== '')

    for (const data of filteredInputs) {
      if (data.test !== '' && data.testInput === '' && data.files.length === 0) {
        toast.warning('Please give input for selected test')
        return // Stop further execution
      }

      if (data.scale !== '' && data.value === '') {
        toast.warning('Please give input for selected scale')
        return // Stop further execution
      }
      console.log('data', data)
    }

    // for (const data of inputs) {
    //   if (data.test !== '' && data.testInput === '' && data.files.length === 0) {
    //     toast.warning('Please give input for selected test')
    //     return // Stop further execution
    //   }

    //   if (data.scale !== '' && data.value === '') {
    //     toast.warning('Please give input for selected scale')
    //     return // Stop further execution
    //   }
    //   console.log('data', data)
    // }
    // toast.warning('Uploading Files and Reports')z
    setfileUploadingSpinner(true)
    try {
      await Promise.all(
        filteredInputs.map(async (data, index) => {
          if (data.files) {
            const files = data.files
            if (files.length > 0) {
              const formData = new FormData()
              files.forEach((file) => {
                // Check if the file type is allowed
                const allowedFileTypes = ['image/jpeg', 'image/png', 'application/pdf']
                if (allowedFileTypes.includes(file.type)) {
                  formData.append('files', file) // Append each allowed file to the FormData
                } else {
                  console.warn('File type not allowed:', file.type)
                }
              })
              if (formData.has('files')) {
                const response = await postFetchFile(
                  `${API_URL}/api/user/uploadPatientReport`,
                  formData,
                )
                if (response) {
                  setfileUploadingSpinner(false)
                  filteredInputs[index].files = response.filesInfo
                }
              } else {
                console.warn('No valid files to upload')
              }
            }
          } else {
            filteredInputs[index].files = null
          }
        }),
      )
    } catch (error) {
      setfileUploadingSpinner(false)
      console.error('Error uploading files:', error)
      return
    }

    // console.log('guarav', inputs)
    try {
      setLoading(true)
      const updatedFormData = {
        ...formData,
        diagnosis: [
          {
            diagnosData: filteredInputs,
            date: Date(),
            desc,
          },
        ],
        nextApointmentDate: startingDate,
      }
      // console.log('updatedFormData', updatedFormData)

      const data = await putFetchData(`${API_URL}/api/patient/update/${_id}`, updatedFormData)

      // console.log('Gaurav', data)
      if (data) {
        setDiagnosis([])
        setDesc('')
        toast.success('Patient Updated Successfully', {
          autoClose: 1000,
        })

        setIsAddNewDiagnosis(false)
        setIsDetailed(true)
        setInputs([{ problem: '', test: '', testInput: '', files: [], scale: '', value: '' }])
        setLoading(false)

        getSearchByPatient()
        // window.location.reload()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleClose = () => {
    setIsAddNewDiagnosis(false)
    setIsDetailed(true)
  }

  useEffect(() => {
    if (patientById.desc) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        desc: patientById.desc,
      }))
    }
  }, [patientById])

  useEffect(() => {
    getPatientById()
  }, [])

  /// new updates by Gaurav 28 march 2024 for updating the diagnoses data and formate to add problems tests and scales

  let [removeAndAddInput, setremoveAndAddInput] = useState(false)

  const handleInputChange = (index, event) => {
    const { name, value } = event.target
    const updatedInputs = [...inputs]
    updatedInputs[index][name] = value
    setInputs(updatedInputs)
  }

  const handleFileInputChange = (index, event) => {
    const { name, files } = event.target
    const allowedFileTypes = ['image/jpeg', 'image/png', 'application/pdf']
    const maxFiles = 3 // Maximum number of files allowed

    // Check if the number of selected files exceeds the limit
    if (files.length > maxFiles) {
      event.target.value = '' // Clear the file input
      toast.warning('You can only upload up to 3 files', { autoClose: 1500 })
      return
    }

    const updatedInputs = [...inputs]

    // Convert FileList to array and filter out files that exceed the size limit or are not of allowed types
    const filesArray = Array.from(files).filter((file) => {
      if (file.size > 31457280) {
        toast.warning('File size should be less than 30 MB', { autoClose: 1500 })
        return false
      }
      if (!allowedFileTypes.includes(file.type)) {
        toast.warning('Only images and PDFs are allowed', { autoClose: 1500 })
        return false
      }
      return true
    })

    updatedInputs[index][name] = filesArray // Store the array of files
    setInputs(updatedInputs)
  }

  const handleAddInput = () => {
    const allInputsHaveProblem = inputs.every((input) => input.problem !== '')
    if (allInputsHaveProblem) {
      setInputs([
        ...inputs,
        { problem: '', test: '', testInput: '', files: [], scale: '', value: '' },
      ])
    } else {
      toast.warning('Please Fill Details of previous Record before adding new!!', {
        autoClose: 1500,
      })
    }
  }

  const handleRemoveInput = (index) => {
    const updatedInputs = [...inputs]
    updatedInputs.splice(index, 1)
    setInputs(updatedInputs)
  }

  const handleInputTestText = (index, event) => {
    const { name, value } = event.target
    const updatedInputs = [...inputs]
    updatedInputs[index][name] = value
    setInputs(updatedInputs)
  }
  useEffect(() => {
    if (inputs.length > 1) {
      setremoveAndAddInput(true)
    } else {
      setremoveAndAddInput(false)
    }
  }, [handleRemoveInput, handleAddInput, handleInputChange])

  return (
    <>
      {fileUploadingSpinner && (
        <SpinnerOverlay loading={fileUploadingSpinner} message="Uploading Files" />
      )}
      {loading && <SpinnerOverlay message="Adding Diagnosis" />}
      <div style={{ margin: '1rem auto 1rem 1rem' }}>
        <div className="addPatientDataInnerDiv">
          <h4>Diagnosis: ({patientRecord?.department_id?.departmentName})</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <form className="mb-3">
            {inputs.map((input, index) => (
              <div key={index} className="row mt-1 mb-2">
                <div className="col-md-2 col-12">
                  <label>
                    <select
                      className="form-control addPatientDataSelectDiv "
                      // style={{ width: '100%', appearance: 'auto', height: '38px' }}
                      name="problem"
                      value={input.problem}
                      onChange={(event) => handleInputChange(index, event)}
                    >
                      <option value="">Chief complaint</option>
                      {problems.map((problem, problemIndex) => (
                        <option key={problemIndex} value={problem}>
                          {problem}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="col-md-2 col-6">
                  <label>
                    <select
                      className="form-control addPatientDataSelectDiv"
                      // style={{ width: '100%', appearance: 'auto', height: '38px' }}
                      name="test"
                      value={input.test}
                      onChange={(event) => handleInputChange(index, event)}
                    >
                      <option value="">Select Test</option>
                      {tests.map((test, testIndex) => (
                        <option key={testIndex} value={test.name}>
                          {test.name}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                {input.test === '' ? (
                  <div className="col-md-2 col-6">
                    <label>
                      <input
                        className="form-control addPatientDataInputDiv"
                        // style={{ width: '100%', appearance: 'auto' }}
                        placeholder="Select a Test"
                        type="text"
                        disabled="true"
                      />
                    </label>
                  </div>
                ) : (
                  <div className="col-md-2 col-6">
                    {tests.map((test, testIndex) => {
                      if (test.name === input.test) {
                        if (test.inputType === 'text') {
                          return (
                            <label key={testIndex}>
                              <input
                                className="form-control"
                                style={{ width: '100%' }}
                                placeholder="Enter test Value"
                                type="text"
                                name="testInput"
                                value={input.testInput.text} // Here is the issue
                                onChange={(event) => handleInputTestText(index, event)}
                              />
                            </label>
                          )
                        } else if (test.inputType === 'file') {
                          return (
                            <label key={testIndex}>
                              <input
                                className="form-control"
                                style={{ width: '100%' }}
                                type="file"
                                multiple
                                name="files"
                                accept="image/jpeg, image/png, application/pdf"
                                onChange={(event) => handleFileInputChange(index, event)}
                              />
                            </label>
                          )
                        }
                      }
                      return null
                    })}
                  </div>
                )}
                <div className="col-md-2 col-6">
                  <label>
                    <select
                      className="form-control addPatientDataSelectDiv"
                      // style={{ width: '100%', appearance: 'auto', height: '38px' }}
                      name="scale"
                      value={input.scale}
                      onChange={(event) => handleInputChange(index, event)}
                    >
                      <option value="">Select Scale</option>
                      {scales.map((scale, scaleIndex) => (
                        <option key={scaleIndex} value={scale}>
                          {scale}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="col-md-2 col-6">
                  <label>
                    <input
                      className="form-control addPatientDataInputDiv"
                      // style={{ width: '100%', appearance: 'auto' }}
                      placeholder="Enter Scale Value"
                      type="text"
                      name="value"
                      value={input.value}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </label>
                </div>
                <div className="col-md-2 d-flex justify-content-center">
                  {removeAndAddInput && (
                    <button
                      className="btn btn-danger"
                      type="button"
                      onClick={() => handleRemoveInput(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary me-4" type="button" onClick={handleAddInput}>
                Add More
              </button>
            </div>
          </form>
          <div>
            <textarea
              rows={4}
              className="form-control col-12"
              placeholder="Notes (Optional)"
              name="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>

          <div className="d-flex mt-2">
            <div className="w-auto">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateTimePicker']}>
                  <DateTimePicker
                    label="Next Appointment Date"
                    value={startingDate}
                    onChange={handleStartingDateChange}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
          </div>
          <div className="text-end">
            <button type="submit" className="btn btn-primary mt-4" style={{ width: '10rem' }}>
              Submit
            </button>
            <button
              type="submit"
              className="btn btn-danger mt-4 ms-2"
              style={{ width: '10rem' }}
              onClick={() => handleClose()}
            >
              Close
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  )
}

export default PatientAddNewRecord
