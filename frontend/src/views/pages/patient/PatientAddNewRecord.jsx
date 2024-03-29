import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getFetch, putFetchData } from 'src/api/Api'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import { API_URL } from 'src/constant'

const PatientAddNewRecord = ({ _id, getSearchByPatient, setIsAddNewDiagnosis, setIsDetailed }) => {
  let API_URL = process.env.REACT_APP_API_URL
  let patientData = localStorage.getItem('patientRecord')
  let patientRecord = JSON.parse(patientData)
  PatientAddNewRecord.propTypes = {
    _id: PropTypes.string.isRequired,
    getSearchByPatient: PropTypes.string.isRequired,
    setIsAddNewDiagnosis: PropTypes.string.isRequired,
    setIsDetailed: PropTypes.string.isRequired,
  }
  const [startingDate, setStartingDate] = React.useState(null)
  const [patientById, setPatientById] = useState({})
  const [desc, setDesc] = useState('')
  const [formData, setFormData] = useState({
    diagnosis: [],
    desc: '',
  })
  const [diagnosis, setDiagnosis] = useState([])
  const [problems, setProblems] = useState([])
  const [tests, setTests] = useState([])
  const [scales, setScales] = useState([])

  useEffect(() => {
    fetchProblems()
  }, [])

  // const fetchProblems = async () => {
  //   try {
  //     const problems = await getFetch(`${API_URL}/api/problem/${patientRecord?.department_id?._id}`)
  //     setProblems(problems?.data?.data[0]?.problemName)
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
        const testFilter = problemsData.problemName
          .filter((item) => item.type === 'test')
          .map((test) => test.name)
        const scaleFilter = problemsData.problemName
          .filter((item) => item.type === 'scale')
          .map((scale) => scale.name)
        setTests(testFilter)
        setScales(scaleFilter)
        setProblems(problemFilter)
      }
    } catch (error) {
      console.error('Error fetching problems:', error)
    }
  }

  // const handleCheckboxChange = (problemName, checked) => {
  //   console.log('dateHere', Date.now())
  //   if (checked) {
  //     setDiagnosis((prevDiagnosis) => [
  //       ...prevDiagnosis,
  //       {
  //         problem: {
  //           name: problemName,
  //           scale1: '',
  //           scale2: '',
  //           scale3: '',
  //         },
  //         date: Date.now(),
  //       },
  //     ])
  //   } else {
  //     setDiagnosis((prevDiagnosis) =>
  //       prevDiagnosis.filter((item) => item.problem.name !== problemName),
  //     )
  //   }
  // }

  // const handleInputChange = (problemName, key, value) => {
  //   setDiagnosis((prevDiagnosis) =>
  //     prevDiagnosis.map((item) => {
  //       if (item.problem.name === problemName) {
  //         return {
  //           ...item,
  //           problem: {
  //             ...item.problem,
  //             [key]: value,
  //           },
  //         }
  //       }
  //       return item
  //     }),
  //   )
  // }

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
    try {
      // let dataP = []
      // diagnosis?.map((elem) => {
      //   dataP.push(elem.problem)
      // })
      // const updatedFormData = {
      //   ...formData,
      //   desc: formData.desc,
      //   diagnosis: [diagnosis],
      //   nextApointmentDate: startingDate,
      // }
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
      // console.log('updatedFormData', updatedFormData)

      const data = await putFetchData(`${API_URL}/api/patient/update/${_id}`, updatedFormData)

      // console.log('Gaurav', data)
      if (data) {
        setDiagnosis([])
        setDesc('')
        toast.success('Patient Updated Successfully', {
          autoClose: 1000,
        })
        setTimeout(() => {
          setIsAddNewDiagnosis(false)
          setIsDetailed(true)
          setInputs([{ problem: '', test: '', testInput: '', scale: '', value: '' }])
        }, 2000)
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

  const [inputs, setInputs] = useState([
    { problem: '', test: '', testInput: '', scale: '', value: '' },
  ])

  const handleInputChange = (index, event) => {
    const { name, value } = event.target
    const updatedInputs = [...inputs]
    updatedInputs[index][name] = value
    setInputs(updatedInputs)
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
  return (
    <div style={{ margin: '1rem auto 1rem 1rem' }}>
      <div style={{ margin: '1rem auto 1rem 0' }}>
        <h4>Diagnosis: ({patientRecord?.department_id?.departmentName})</h4>
        {/* <div className="row">
          <div className="row">
            <div className="col-md-4 alignCenterAndMiddle" style={{ border: '1px solid black' }}>
              <h5 style={{ marginTop: '0.5rem' }}>Problems</h5>
            </div>
            <div className="col-md-8">
              <div className="row" style={{ border: '1px solid black' }}>
                <div className="col-md-4 alignCenterAndMiddle">
                  <h5 style={{ marginTop: '0.5rem' }}>VAS</h5>
                </div>
                <div className="col-md-4 alignCenterAndMiddle">
                  <h5 style={{ marginTop: '0.5rem' }}>ODI</h5>
                </div>
                <div className="col-md-4 alignCenterAndMiddle">
                  <h5 style={{ marginTop: '0.5rem' }}>MPSI</h5>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <form onSubmit={handleSubmit}>
        {/* {problems.map((problem, index) => (
          <div key={index} style={{ alignItems: 'center', marginBottom: '10px' }}>
            <div className="row">
              <div className="col-md-4">
                <input
                  type="checkbox"
                  value={problem.name}
                  onChange={(e) => handleCheckboxChange(problem.name, e.target.checked)}
                />
                <label>&nbsp;{problem.name}</label>
              </div>
              <div className="col-sm-8">
                <div className="row">
                  <div className="col-sm-4">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Scale 1"
                      value={
                        diagnosis.find((item) => item.problem.name === problem.name)?.problem
                          .scale1 || ''
                      }
                      onChange={(e) => handleInputChange(problem.name, 'scale1', e.target.value)}
                    />
                  </div>
                  <div className="col-sm-4">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Scale 2"
                      value={
                        diagnosis.find((item) => item.problem.name === problem.name)?.problem
                          .scale2 || ''
                      }
                      onChange={(e) => handleInputChange(problem.name, 'scale2', e.target.value)}
                    />
                  </div>
                  <div className="col-sm-4">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Scale 3"
                      value={
                        diagnosis.find((item) => item.problem.name === problem.name)?.problem
                          .scale3 || ''
                      }
                      onChange={(e) => handleInputChange(problem.name, 'scale3', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))} */}
        <form className="mb-2">
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
                    <option value="">Test</option>
                    {tests.map((test, testIndex) => (
                      <option key={testIndex} value={test}>
                        {test}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="col-md-2">
                <label>
                  <input
                    className="form-control "
                    style={{ width: '10rem' }}
                    placeholder="Enter test Value"
                    type="text"
                    name="testInput"
                    value={input.testInput}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                </label>
              </div>
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
            <button className="btn btn-primary me-4" type="button" onClick={handleAddInput}>
              Add More
            </button>
          </div>
        </form>
        <div>
          <textarea
            rows={4}
            className="form-control col-12"
            placeholder="Notes : (Optional)"
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
  )
}

export default PatientAddNewRecord
