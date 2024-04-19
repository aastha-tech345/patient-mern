import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getFetch, postFetch, postFetchContent, postFetchData, postFetchFile } from 'src/api/Api'
import PatientInfoData from './PatientInfoData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loader from '../loader/Loader'
import AddPatientLoader from '../loader/AddPatientLoader'
import { useLocation } from 'react-router-dom'
import SpinnerOverlay from 'src/views/publicItems/ SpinnerOverlay'

const PatientPage = () => {
  const location = useLocation()
  // console.log('location', Number(location?.state?.crn))
  let API_URL = process.env.REACT_APP_API_URL
  // const API_URL = process.env.API_URL
  let patientData = localStorage.getItem('patientRecord')
  let patientRecord = JSON.parse(patientData)
  const [updateState, setUpdateState] = useState(false)
  const [loader, setLoader] = useState(false)
  const [addPatientLoader, setaddPatientLoader] = useState(false)

  const [startingDate, setStartingDate] = React.useState(null)
  const [data, setData] = useState(false)
  const [search, setSearch] = useState('')
  const [patientSearch, setPatientSearch] = useState([])
  const [problems, setProblems] = useState([])
  const [tests, setTests] = useState([])
  const [scales, setScales] = useState([])
  const [queryCRN, setQueryCRN] = useState('')
  const randomCRN = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
  let [fileUploadingSpinner, setfileUploadingSpinner] = useState(false)
  const [desc, setDesc] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    sex: 'male',
    phone: '',
    crn: `${randomCRN}`,
    diagnosis: [],
    desc: '',
    doctor_id: patientRecord?._id,
  })
  // const [diagnosis, setDiagnosis] = useState([])

  const handleStartingDateChange = (date) => {
    setStartingDate(date)
  }
  // console.log('value date', startingDate)
  useEffect(() => {
    // Fetch problems from API
    setSearch('')
    fetchProblems()
    const queryParams = new URLSearchParams(location.search)
    const searchParamValue = queryParams.get('crn')
    if (searchParamValue) {
      setQueryCRN(searchParamValue)
    }
  }, [])

  useEffect(() => {
    // console.log('Gaurav Tripathii', queryCRN)
    getSearchByPatient()
  }, [queryCRN])

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

  // console.log('problems', problems)

  const clearSearch = () => {
    try {
      setSearch('')
      setPatientSearch([])
      // getSearchByPatient()
    } catch (error) {
      console.log(error)
    }
  }

  const getSearchByPatient = async () => {
    try {
      let searchData = search || location?.state?.crn || queryCRN
      if (searchData?.length === 0) {
        return
      }
      setLoader(true)
      const data = await getFetch(`${API_URL}/api/patient/${searchData}`)
      // console.log('searchData', data)
      setPatientSearch(data?.data?.data)
      setTimeout(() => {
        setLoader(false)
      }, 3000)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // console.log('before', inputs)
  })

  /////////////////////////////////////START OF HANDLE SUBMIT/////////////////////

  const handleSubmit = async () => {
    // console.log('updatedFormData', inputs)

    setSearch('')

    // Check if required fields are filled
    if (!formData.name || !formData.age || !formData.sex || !formData.phone || !formData.crn) {
      return toast.warning('Please fill all Patient details')
    }

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
    // toast.warning('Uploading Files and Reports')
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
                setfileUploadingSpinner(false)
                console.warn('No valid files to upload')
              }
            }
          } else {
            filteredInputs[index].files = null
            setfileUploadingSpinner(false)
          }
        }),
      )
    } catch (error) {
      setfileUploadingSpinner(false)
      console.error('Error uploading files:', error)
      return
    }

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

    try {
      // console.log('pre', updatedFormData)\
      const doctorRecord = await localStorage.getItem('patientRecord')
      const doctorId = JSON.parse(doctorRecord)?._id
      // console.log('Guarav', JSON.parse(doctorRecord)?._id)
      const data = await postFetchData(`${API_URL}/api/patient/create/${doctorId}`, updatedFormData)
      if (data.success === true) {
        toast.success('Patient Created Successfully', {
          autoClose: 2000,
        })
        setfileUploadingSpinner(false)

        setaddPatientLoader(true)
        setData(false)

        // toast.success('Patient Created Successfully')
        setUpdateState(true)
        setaddPatientLoader(false)
        // setDiagnosis([])
        setDesc('')
        setStartingDate(null)
        setInputs([{ problem: '', test: '', testInput: '', files: [], scale: '', value: '' }])

        setFormData({
          name: '',
          age: '',
          sex: 'male',
          phone: '',
          crn: `${randomCRN}`,
          diagnosis: [],
          desc: '',
          doctor_id: patientRecord?._id,
        })
      }
      if (data.message === 'phone Already Exists') {
        toast.warning('phone Already Exists')
        setfileUploadingSpinner(false) // Set loading to false in case of an error
      }
      if (data.message === 'Crn Already Exists') {
        toast.warning('Crn Already Exists')
        setfileUploadingSpinner(false) // Set loading to false in case of an error
      }
      // console.log('data', data)
      setSearch(data?.data?.crn)
    } catch (error) {
      toast.warning('Something went wrong')
      setfileUploadingSpinner(false) // Set loading to false in case of an error
      console.error('Error submitting data:', error)
    }
  }
  /////////////////////////////////////// END OF HANDLE SUBMIT ////////////

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      getSearchByPatient()
    }
  }

  useEffect(() => {
    if (updateState === true) {
      getSearchByPatient()
    }
  }, [updateState])

  let [dateAndTime, setDateAndTime] = useState(new Date())
  useEffect(() => {
    if (location?.state?.crn) {
      setSearch(location?.state?.crn)
      getSearchByPatient()
    }
  }, [location])

  //////// new updates

  let [removeAndAddInput, setremoveAndAddInput] = useState(false)

  const [inputs, setInputs] = useState([
    { problem: '', test: '', testInput: '', files: [], scale: '', value: '' },
  ])

  const handleInputChange = (index, event) => {
    const { name, value } = event.target
    const updatedInputs = [...inputs]
    updatedInputs[index][name] = value
    setInputs(updatedInputs)
  }

  const handleInputTestText = (index, event) => {
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

  useEffect(() => {
    if (inputs.length > 1) {
      setremoveAndAddInput(true)
    } else {
      setremoveAndAddInput(false)
    }
  }, [handleRemoveInput, handleAddInput, handleInputChange])
  useEffect(() => {
    console.log('Updated inputs:', inputs)
  }, [inputs])

  const clearAllDataInputs = () => {
    setInputs([{ problem: '', test: '', testInput: '', files: [], scale: '', value: '' }])
    setFormData({
      name: '',
      age: '',
      sex: 'male',
      phone: '',
      crn: `${randomCRN}`,
      diagnosis: [],
      desc: '',
      doctor_id: patientRecord?._id,
    })
  }

  return (
    <>
      <div>
        {!data && !addPatientLoader ? (
          <div>
            <p style={{ fontWeight: 'bolder' }}>Search Patient</p>
            <div className="search-container">
              <div className="search-input">
                <input
                  style={{ paddingLeft: '5px' }}
                  className="form-control"
                  placeholder="CR no. or Phone no."
                  type="text"
                  name="search"
                  value={search}
                  onKeyPress={handleKeyPress}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  className="btn btn-primary searchButton"
                  type="button"
                  onClick={getSearchByPatient}
                >
                  Search
                </button>
                {search?.length ? (
                  <button
                    className="btn btn-danger text-light clearButton"
                    type="button"
                    onClick={clearSearch}
                  >
                    Clear
                  </button>
                ) : null}
              </div>
              <div className="add-patient-btn">
                <button
                  type="button"
                  onClick={() => setData(true)}
                  className="btn btn-outline-dark"
                >
                  Add a Patient
                </button>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}

        {patientSearch?.length && !data && !addPatientLoader ? (
          <PatientInfoData
            patientSearch={patientSearch}
            setData={setData}
            getSearchByPatient={getSearchByPatient}
          />
        ) : (
          <div>
            {data ? (
              <>
                {fileUploadingSpinner && <SpinnerOverlay loading={fileUploadingSpinner} />}

                <div className="content-to-be-blurred">
                  <div style={{ marginTop: '1rem' }}>
                    <div>
                      <hr />
                      <h4>Patient Details</h4>

                      <div>
                        <div className="row">
                          <div className="col-md-4">
                            <div>
                              <label className="col-sm-4 mt-2 patientNamediv">
                                Name <span style={{ color: 'red' }}>*</span>
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="text"
                                  className="form-control "
                                  name="name"
                                  value={formData.name}
                                  onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div>
                              <label className="col-sm-4 mt-2 patientNamediv">
                                Age <span style={{ color: 'red' }}>*</span>
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="number"
                                  className="form-control "
                                  name="age"
                                  value={formData.age}
                                  onChange={(e) =>
                                    setFormData({ ...formData, age: e.target.value })
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div>
                              <label className="col-sm-4 mt-2 patientNamediv">
                                Sex <span style={{ color: 'red' }}>*</span>
                              </label>
                              <div className="col-sm-8">
                                <select
                                  className="form-control "
                                  name="sex"
                                  value={formData.sex}
                                  onChange={(e) =>
                                    setFormData({ ...formData, sex: e.target.value })
                                  }
                                >
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                                  <option value="other">Other</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row ">
                          <div className="col-md-4 mt-2">
                            <div>
                              <label className="col-lg-4 patientNamediv">
                                Phone No <span style={{ color: 'red' }}>*</span>
                              </label>
                              <div className=" col-lg-8 col-sm-8">
                                <input
                                  className="form-control "
                                  type="text"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={(e) => {
                                    if (/^\d*$/.test(e.target.value) || e.target.value === '') {
                                      setFormData({ ...formData, phone: e.target.value })
                                    }
                                  }}
                                  required={true}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4 mt-2">
                            <div>
                              <label className="col-sm-4  patientNamediv">
                                CR No <span style={{ color: 'red' }}>*</span>
                              </label>
                              <div className="col-sm-8">
                                <input
                                  className="form-control "
                                  type="test"
                                  name="crn"
                                  value={formData.crn}
                                  onChange={(e) =>
                                    setFormData({ ...formData, crn: e.target.value })
                                  }
                                  required={true}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="addPatientDataInnerDiv">
                        <h4>Diagnosis: ({patientRecord?.department_id?.departmentName})</h4>
                      </div>
                      <div>
                        <form className="mb-3">
                          {inputs.map((input, index) => (
                            <div key={index} className="row mt-1 mb-2">
                              <div className="col-md-2 col-12">
                                <label>
                                  <select
                                    className="form-control addPatientDataSelectDiv"
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
                                              onChange={(event) =>
                                                handleInputTestText(index, event)
                                              }
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
                                              onChange={(event) =>
                                                handleFileInputChange(index, event)
                                              }
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
                              <div className="col-md-2 d-flex justify-content-end col-12">
                                {removeAndAddInput && (
                                  <button
                                    className="btn btn-danger me-4 mt-1"
                                    type="button"
                                    onClick={() => handleRemoveInput(index)}
                                    // style={{ marginRight: '10px', marginTop: '3px' }}
                                  >
                                    Remove
                                  </button>
                                )}
                              </div>
                            </div>
                          ))}
                          <div className="d-flex justify-content-end">
                            <button
                              className="btn btn-primary me-4"
                              type="button"
                              onClick={handleAddInput}
                            >
                              Add More
                            </button>
                          </div>
                        </form>
                      </div>
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
                    </div>
                    <div>
                      <div className="d-flex mt-2">
                        <div className="w-auto">
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateTimePicker']}>
                              <DateTimePicker
                                label="Next Appointment Date"
                                value={startingDate}
                                onChange={handleStartingDateChange}
                                // ampm={false}
                              />
                            </DemoContainer>
                          </LocalizationProvider>
                        </div>
                      </div>
                    </div>
                    <div className="text-end m-4">
                      <button className="btn btn-info mt-3 mx-2 w-auto" onClick={handleSubmit}>
                        Submit
                      </button>
                      <button
                        className="btn btn-info mt-3 w-auto"
                        onClick={() => {
                          setData(false)
                          clearAllDataInputs()
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div>
                {!addPatientLoader ? (
                  <div className="loaderDivInPatientPage">{loader ? <Loader /> : 'No Data'}</div>
                ) : (
                  ''
                )}
              </div>
            )}
          </div>
        )}
      </div>
      {addPatientLoader ? <AddPatientLoader /> : ''}
      <ToastContainer />
    </>
  )
}

export default PatientPage
