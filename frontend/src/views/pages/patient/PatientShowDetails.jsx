import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import '../../dashboard/Dashboard.css'
import { faL } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const PatientShowDetails = ({ diagnosis, desc }) => {
  let url = process.env.REACT_APP_API_URL
  PatientShowDetails.propTypes = {
    diagnosis: PropTypes.func.isRequired,
    desc: PropTypes.func.isRequired,
  }
  const [reversedDiagnosis, setReversedDiagnosis] = useState([])

  // Reverse diagnosis array on component mount or whenever diagnosis changes
  useEffect(() => {
    if (diagnosis && Array.isArray(diagnosis)) {
      setReversedDiagnosis([...diagnosis].reverse())
    }
  }, [diagnosis])

  const isFile = (value) => {
    const regex = /^\d{13}_/

    if (regex.test(value)) {
      return true
    } else {
      return false
    }
  }
  //no pdf
  const showReportHandler = async (filename) => {
    try {
      // Fetch the image data from the server
      const response = await axios.get(`${url}/api/user/getPatientReport/${filename}`, {
        responseType: 'blob', // Treat response data as blob
      })

      // Create a Blob object from the response data
      const blob = new Blob([response.data], { type: response.headers['content-type'] })

      // Generate a URL for the Blob
      const blobUrl = URL.createObjectURL(blob)

      // Open the URL in a new tab
      window.open(blobUrl)
    } catch (error) {
      console.error('Error fetching image:', error)
    }
  }

  /// opening pdf

  return (
    <div
      style={{
        maxHeight: '300px',
        overflowY: 'scroll',
        overflowX: 'hidden',
        marginTop: '20px',
      }}
    >
      {reversedDiagnosis?.map((elem) => {
        const date = elem?.date

        const datee = new Date(date)

        const options = {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          // second: '2-digit',
          hour12: true, // Set to true if you want 12-hour format with AM/PM
        }
        const formattedDate = datee.toLocaleDateString('en-IN', options).replace(/\//g, '/')
        return (
          <>
            <div
              className="row"
              // style={{ overflow: 'scroll !important', background: 'white' }}
            >
              <div style={{ margin: '1rem auto 1rem 1rem', overflow: 'auto !important' }}>
                <h5>Diagnose Date : {formattedDate}</h5>

                <table
                  className="table"
                  style={{
                    width: '90%',
                    border: '1px solid',
                    fontFamily: 'ui-rounded',
                    borderRadius: '10px',
                  }}
                >
                  <colgroup>
                    <col style={{ width: '20%' }} />
                    <col style={{ width: '20%' }} />
                    <col style={{ width: '20%' }} />
                    <col style={{ width: '20%' }} />
                    <col style={{ width: '20%' }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col" style={{ background: '#FBF295' }}>
                        Problems
                      </th>
                      <th scope="col" style={{ background: '#FBF295' }}>
                        Test
                      </th>
                      <th scope="col" style={{ background: '#FBF295' }}>
                        Test value
                      </th>
                      <th scope="col" style={{ background: '#FBF295' }}>
                        Scale
                      </th>
                      <th scope="col" style={{ background: '#FBF295' }}>
                        Scale value
                      </th>
                    </tr>
                  </thead>
                  {elem?.diagnosData?.map((element) => {
                    let { problem, scale, test, testInput, value } = element
                    return (
                      <>
                        <tbody>
                          <tr>
                            <td style={{ fontWeight: 'bolder' }}>{problem}</td>
                            <td style={{ fontWeight: 'bolder' }}>{test === '' ? '-' : test}</td>
                            <td style={{ fontWeight: 'bolder' }}>
                              {testInput === '' ? (
                                '-'
                              ) : isFile(testInput) ? (
                                <>
                                  <button
                                    className="btn btn-light"
                                    onClick={() => showReportHandler(testInput)}
                                  >
                                    Show Report
                                  </button>
                                </>
                              ) : (
                                testInput
                              )}
                            </td>
                            <td style={{ fontWeight: 'bolder' }}>{scale === '' ? '-' : scale}</td>
                            <td style={{ fontWeight: 'bolder' }}>{value === '' ? '-' : value}</td>
                          </tr>
                        </tbody>
                      </>
                    )
                  })}
                </table>
                <div className="row">
                  <div style={{ margin: '1rem auto 1rem 1rem' }}>
                    <div className="row" style={{ marginTop: '1rem' }}>
                      <div className="col-md-2 d-flex align-items-center">
                        <h5>Notes:</h5>
                      </div>
                      <div className="col-md-10 d-flex align-items-center">
                        <div className="card" style={{ width: '87%', padding: '1rem 2rem' }}>
                          <p style={{ margin: '0' }}>{elem.desc === '' ? '-' : elem.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="row" style={{ marginTop: '1rem' }}>
                  <div className="col-md-4">
                    <h6>Discription :</h6>{' '}
                  </div>
                  <div className="col-md-8">
                    <p>safdkjshfjaisdfjidsajfdjdk dnfjjdsan</p>
                  </div>
                </div> */}
              </div>
              <hr />
            </div>
          </>
        )
      })}
      {/* <div className="row">
        <div style={{ margin: '1rem auto 1rem 1rem' }}>
          <div className="row" style={{ marginTop: '1rem' }}>
            <div className="col-md-5">
              <h6>Discription :</h6>{' '}
            </div>
            <div className="col-md-7">
              <p>{desc}</p>
            </div>
            <div className="col-md-2" style={{ paddingTop: '1rem' }}>
              <h5>Discription:</h5>
            </div>
            <div className="col-md-10">
              <div className="card" style={{ width: '87%', padding: '1rem 2rem 1rem 2rem' }}>
                <p>{desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="row">
        <div style={{ margin: '1rem auto 1rem 1rem' }}>
          <div className="row" style={{ marginTop: '1rem' }}>
            <div className="col-md-2 d-flex align-items-center">
              <h5>Discription:</h5>
            </div>
            <div className="col-md-10 d-flex align-items-center">
              <div className="card" style={{ width: '87%', padding: '1rem 2rem' }}>
                <p style={{ margin: '0' }}>{desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
  // return (
  //   <>
  //     <h1>Gaurav</h1>
  //   </>
  // )
}

export default PatientShowDetails
