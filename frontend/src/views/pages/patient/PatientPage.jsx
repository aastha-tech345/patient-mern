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
  console.log('location', Number(location?.state?.crn))
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

  let [fileUploadingSpinner, setfileUploadingSpinner] = useState(false)
  const [desc, setDesc] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    sex: 'male',
    phone: '',
    crn: '',
    diagnosis: [],
    desc: '',
    doctor_id: patientRecord?._id,
  })
  // const [diagnosis, setDiagnosis] = useState([])

  const handleStartingDateChange = (date) => {
    setStartingDate(date)
  }
  console.log('value date', startingDate)
  useEffect(() => {
    // Fetch problems from API
    setSearch('')
    fetchProblems()
  }, [])

  // const fetchProblems = async () => {
  //   try {
  //     const problems = await getFetch(`${API_URL}/api/problem/${patientRecord?.department_id?._id}`)
  //     const problemFilter = await problems?.data?.data[0]?.problemName.filter(
  //       (item) => item.type === 'problem',
  //     )
  //     const testFilter = await problems?.data?.data[0]?.problemName.filter(
  //       (item) => item.type === 'test',
  //     )
  //     const scaleFilter = await problems?.data?.data[0]?.problemName.filter(
  //       (item) => item.type === 'scale',
  //     )
  //     console.log('Gaurav', problemFilter)
  //     setTests(testFilter)
  //     setScales(scaleFilter)
  //     setProblems(problemFilter)
  //   } catch (error) {
  //     console.error('Error fetching problems:', error)
  //   }
  // }
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

  console.log('problems', problems)

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
      let searchData = search || location?.state?.crn
      if (searchData?.length === 0) {
        return
      }
      setLoader(true)
      const data = await getFetch(`${API_URL}/api/patient/${searchData}`)
      console.log('searchData', data)
      setPatientSearch(data?.data?.data)
      setTimeout(() => {
        setLoader(false)
      }, 3000)
    } catch (error) {
      console.log(error)
    }
  }

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

    for (const data of inputs) {
      if (data.test !== '' && data.testInput === '') {
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
        // Use Promise.all to wait for all uploads to finish
        inputs.map(async (data, index) => {
          if (typeof data.testInput !== 'string') {
            const file = data.testInput
            const formData = new FormData()
            formData.append('file', file)
            const response = await postFetchFile(
              `${API_URL}/api/user/uploadPatientReport`,
              formData,
            )
            if (response) {
              inputs[index].testInput = response?.fileName
            }
          }
        }),
      )
    } catch (error) {
      setfileUploadingSpinner(false) // Set loading to false in case of an error
      console.error('Error submitting data:', error)
    }

    const updatedFormData = {
      ...formData,
      diagnosis: [
        {
          diagnosData: inputs,
          date: Date(),
          desc,
        },
      ],
      nextApointmentDate: startingDate,
    }

    try {
      // console.log('pre', updatedFormData)\
      const data = await postFetchData(`${API_URL}/api/patient/create`, updatedFormData)
      if (data.success === true) {
        toast.success('Patient Created Successfully', {
          autoClose: 2000,
        })

        setaddPatientLoader(true)
        setData(false)
        setTimeout(() => {
          // toast.success('Patient Created Successfully')
          setUpdateState(true)
          setaddPatientLoader(false)
          // setDiagnosis([])
          setDesc('')
          setStartingDate(null)
          setInputs([{ problem: '', test: '', testInput: '', scale: '', value: '' }])
        }, 2000)
        setFormData({
          name: '',
          age: '',
          sex: 'male',
          phone: '',
          crn: '',
          diagnosis: [],
          desc: '',
          doctor_id: patientRecord?._id,
        })
      }
      if (data.message == 'phone Already Exists') {
        toast.warning('phone Already Exists')
        setfileUploadingSpinner(false) // Set loading to false in case of an error
      }
      if (data.message == 'Crn Already Exists') {
        toast.warning('Crn Already Exists')
        setfileUploadingSpinner(false) // Set loading to false in case of an error
      }
      console.log('data', data)
      setSearch(data?.data?.crn)
    } catch (error) {
      toast.warning('Something went wrong')
      setfileUploadingSpinner(false) // Set loading to false in case of an error

      console.error('Error submitting data:', error)
    }
  }

  // const handleSubmit = async () => {
  //   console.log(inputs)
  // }

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
    { problem: '', test: '', testInput: '', scale: '', value: '' },
  ])

  const handleInputChange = (index, event) => {
    const { name, value } = event.target
    const updatedInputs = [...inputs]
    updatedInputs[index][name] = value
    setInputs(updatedInputs)
  }
  const handleFileInputChange = (index, event) => {
    const { name, files } = event.target
    const updatedInputs = [...inputs]
    updatedInputs[index][name] = files[0]
    setInputs(updatedInputs)
    console.log('Guarv', inputs)
  }

  const handleAddInput = () => {
    setInputs([...inputs, { problem: '', test: '', testInput: '', scale: '', value: '' }])
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

  //// testing codes

  ////////////////////////////////////////////////////////////////////
  // let [file, setFile] = useState('')
  // const submitHandler = async () => {
  //   try {
  //     const formData = new FormData()
  //     formData.append('file', file)
  //     const response = await postFetchFile(`${API_URL}/api/user/uploadPatientReport`, formData)
  //     console.log('File uploaded successfullsdsy:', response)
  //   } catch (error) {
  //     console.error('Error uploading file:', error)
  //   }
  // }
  // const handleFileChange = (event) => {
  //   setFile(event.target.files[0])
  // }

  ///////////////////////////
  return (
    <>
      <div>
        {!data && !addPatientLoader ? (
          <div>
            <p style={{ fontWeight: 'bolder' }}>Search Patient</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="d-flex">
                <input
                  style={{ paddingLeft: '5px' }}
                  className="form-control"
                  placeholder="CR no. or Phone no."
                  type="text"
                  name="search"
                  value={search}
                  // autoComplete={false}
                  onKeyPress={handleKeyPress}
                  onChange={(e) => setSearch(e.target.value)}
                />

                {/* </button> */}
                <button
                  className="btn btn-primary"
                  style={{ marginLeft: '1rem', borderRadius: '5px' }}
                  type="button"
                  onClick={getSearchByPatient}
                >
                  Search
                </button>
                {search?.length ? (
                  <button
                    className="btn btn-danger text-light"
                    style={{ marginLeft: '1rem', borderRadius: '5px' }}
                    type="button"
                    onClick={clearSearch}
                  >
                    Clear
                  </button>
                ) : (
                  ''
                )}
              </div>
              <div>
                <button
                  style={{ marginLeft: '1rem', borderRadius: '5px' }}
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
                          <div className="col-md-4 mt-4">
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

                          <div className="col-md-4 mt-4">
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
                      <div style={{ margin: '1rem auto 1rem 0' }}>
                        <h4>Diagnosis: ({patientRecord?.department_id?.departmentName})</h4>
                      </div>
                      <div>
                        <form className="mb-3">
                          {inputs.map((input, index) => (
                            <div key={index} className="row mt-1 mb-2">
                              <div className="col-md-2">
                                <label>
                                  <select
                                    className="form-control "
                                    style={{ width: '10rem', appearance: 'auto', height: '38px' }}
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
                              <div className="col-md-2">
                                <label>
                                  <select
                                    className="form-control "
                                    style={{ width: '10rem', appearance: 'auto', height: '38px' }}
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
                                ''
                              ) : (
                                <div className="col-md-2">
                                  {tests.map((test, testIndex) => {
                                    if (test.name === input.test) {
                                      if (test.inputType === 'text') {
                                        return (
                                          <label key={testIndex}>
                                            <input
                                              className="form-control"
                                              style={{ width: '10rem' }}
                                              placeholder="Enter test Value"
                                              type="text"
                                              name="testInput"
                                              value={input.testInput}
                                              onChange={(event) => handleInputChange(index, event)}
                                            />
                                          </label>
                                        )
                                      } else if (test.inputType === 'file') {
                                        return (
                                          <label key={testIndex}>
                                            <input
                                              className="form-control"
                                              style={{ width: '10rem' }}
                                              type="file"
                                              name="testInput"
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
                              <div className="col-md-2">
                                <label>
                                  <select
                                    className="form-control "
                                    style={{ width: '10rem', appearance: 'auto', height: '38px' }}
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
                              <div className="col-md-2">
                                <label>
                                  <input
                                    className="form-control "
                                    style={{ width: '10rem', appearance: 'auto' }}
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
                      <button className="btn btn-info mt-3 w-auto" onClick={() => setData(false)}>
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div>
                {!addPatientLoader ? (
                  <div
                    style={{
                      width: '100%',
                      height: '20vh',
                      lineHeight: '20vh',
                      textAlign: 'center',
                      backgroundColor: 'white',
                      marginTop: '10px',
                    }}
                  >
                    {loader ? <Loader /> : 'No Data'}
                  </div>
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
    // <>
    //   <h1>Gaurav</h1>
    //   <input type="file" onChange={handleFileChange}></input>
    //   <button onClick={submitHandler}>submit</button>
    // </>
  )
}

export default PatientPage
