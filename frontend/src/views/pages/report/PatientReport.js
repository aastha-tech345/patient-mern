import React, { useEffect, useState } from 'react'
import { getFetch } from 'src/api/Api'
import { Divider, Radio, Table } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Pagination, Stack } from '@mui/material'
// import { LocalizationProvider } from '@mui/x-date-pickers'
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
// import DateTimePicker from 'react-datetime-picker'
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

// import WidgetsDropdown from '../widgets/WidgetsDropdown'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'
import { DateTimePicker } from '@mui/x-date-pickers'

const PatientReport = () => {
  let API_URL = process.env.REACT_APP_API_URL
  // const API_URL = process.env.API_URL
  let patientData = localStorage.getItem('patientRecord')
  let patientRecord = JSON.parse(patientData)

  const navigate = useNavigate()
  const [updateState, setUpdateState] = useState(false)
  const [problemSet, setProblemSet] = useState('')
  const [pageCount, setPageCount] = useState(1)
  const [page, setPage] = useState(1)
  const [problems, setProblems] = useState([])
  const [tests, setTests] = useState([])
  const [scales, setScales] = useState([])
  const [patientProblems, setPatientProblems] = useState([])
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
  console.log('problem', problems)

  const handlSetPoblem = (elem) => {
    setProblemSet(elem)
  }

  const getPatientByProblem = async () => {
    try {
      console.log('ashish', problemSet)
      if (problemSet?.length === 0) {
        return
      }
      const res = await getFetch(
        `${API_URL}/api/patient/problems?problem=${problemSet}&doctor_id=${patientRecord._id}&page=${page}`,
      )
      console.log('response', res)
      setPageCount(res?.data?.pageCount)
      setPatientProblems(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const columns = [
    // {
    //   title: 'CR no',
    //   dataIndex: 'crn',
    // },
    // {
    //   title: 'Phone no',
    //   dataIndex: 'phone',
    //   render: (text) => <a>{text}</a>,
    // },
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    // {
    //   title: 'Sex',
    //   dataIndex: 'sex',
    //   sorter: (a, b) => a.sex.localeCompare(b.sex),
    // },
    // {
    //   title: 'Appointment',
    //   dataIndex: 'nextApointmentDate',
    //   render: (text) => {
    //     const date = new Date(text)
    //     const formattedDate = date
    //       .toLocaleString('en-IN', {
    //         year: 'numeric',
    //         month: '2-digit',
    //         day: '2-digit',
    //         hour: '2-digit',
    //         minute: '2-digit',
    //         hour12: true,
    //       })
    //       .replace(/\//g, '/')
    //     return formattedDate
    //   },
    //   sorter: (a, b) => a.nextApointmentDate.localeCompare(b.nextApointmentDate),
    // },
    {
      title: 'Action',
      // dataIndex: 'sex',
      render: (text) => {
        console.log('text', text)
        return (
          <button
            className="btn btn-primary"
            onClick={(e) => navigate('/patientPage', { state: text })}
          >
            View Diagnosis
          </button>
        )
      },
    },
  ]
  const todayDate = dayjs()
  const [startingDate, setStartingDate] = useState(todayDate)
  const [endDate, setEndDate] = useState(todayDate)

  const handlePageChange = (event, value) => {
    setPage(value)
  }

  const handleStartingDateChange = (date) => {
    setStartingDate(date)
  }
  const handleEndDateChange = (date) => {
    setEndDate(date)
  }

  const dateSubmit = async () => {
    if (endDate.isBefore(startingDate)) {
      alert('End date cannot be earlier than start date')
      return
    }
    const date = new Date(startingDate)
    const date1 = new Date(endDate)
    // const formattedStartDate = date.toISOString().split('T')[0] + 'T00:00:00.000Z'
    // const formattedEndDate = date1.toISOString().split('T')[0] + 'T00:00:00.000Z'
    console.log(date, date1)

    const res = await getFetch(
      `${API_URL}/api/patient/problems?problem=${problemSet}&doctor_id=${patientRecord._id}&startDate=${date}&endDate=${date1}&page=${page}`,
    )
    console.log('ashdata', res)
    setPageCount(res?.data?.pageCount)
    setPatientProblems(res?.data?.data)
  }

  const dateReset = () => {
    setStartingDate(todayDate)
    setEndDate(todayDate)
    setUpdateState(!updateState)
  }

  // useEffect(() => {
  //   getPatientByProblem()
  // }, [page, problemSet])

  useEffect(() => {
    if (problemSet.length) {
      dateSubmit()
    }
  }, [page, updateState])

  useEffect(() => {
    fetchProblems()
  }, [])
  return (
    <>
      <div className="row">
        <div className="col-sm-3 mt-3">
          <select onChange={(e) => handlSetPoblem(e.target.value)} className="form-control">
            <option>select</option>
            {problems.map((elem) => {
              return (
                <>
                  <option value={elem}>{elem}</option>
                </>
              )
            })}
          </select>
        </div>

        {/* date filed start */}
        <div className="col-sm-9">
          <div className="row justify-content-center">
            <div className="col-sm-4">
              {' '}
              <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DateTimePicker']}>
                    <DateTimePicker
                      label="From"
                      value={startingDate}
                      onChange={handleStartingDateChange}
                      inputFormat="YYYY-MM-DD"
                      ampm={false}
                      ampmInClock={false}
                      views={['year', 'month', 'day']}
                      // sx={{ width: '100px' }}
                      // className="w-50"
                      // className="w-auto"
                      style={{ overflowX: 'hidden !important' }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>
            <div className="col-sm-4 ">
              {' '}
              <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DateTimePicker']}>
                    <DateTimePicker
                      label="To"
                      value={endDate}
                      onChange={handleEndDateChange}
                      inputFormat="YYYY-MM-DD"
                      ampm={false}
                      ampmInClock={false}
                      views={['year', 'month', 'day']}
                      // className="w-50"
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>
            <div className="col-sm-2 d-flex  mb-3">
              {/* <div className=""> */}
              {/* <div> */}
              <button className="btn btn-primary mt-3 me-2" onClick={dateSubmit}>
                Search
              </button>
              {/* </div> */}
              {/* <div> */}
              <button className="btn btn-primary mt-3 " onClick={dateReset}>
                Reset
              </button>
              {/* </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
        {/* date filed end */}
      </div>
      <div className="mt-2 table-responsive">
        <Table
          // rowSelection={{
          //   type: selectionType,
          //   ...rowSelection,
          // }}
          columns={columns}
          dataSource={patientProblems}
          pagination={false}
          className="table-responsive"
        />
      </div>
      <div className="d-flex justify-content-end mt-2">
        <Stack spacing={2}>
          <Pagination count={pageCount} page={page} onChange={handlePageChange} />
        </Stack>
      </div>
    </>
  )
}

export default PatientReport
