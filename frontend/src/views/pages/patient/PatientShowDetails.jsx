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
  const [requestedFileLoading, setRequestedFileLoading] = useState({})

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
  const showReportHandler = async (filename, index) => {
    setRequestedFileLoading((prvState) => ({
      ...prvState,
      [index]: true,
    }))

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
    } finally {
      setRequestedFileLoading((prvState) => ({
        ...prvState,
        [index]: false,
      }))
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
      {reversedDiagnosis?.map((elem, index) => {
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
            <div key={index}>
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
                    {elem?.diagnosData?.map((element, innerIndex) => {
                      let { problem, scale, test, testInput, value } = element
                      return (
                        <>
                          <tbody key={innerIndex}>
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
                                      onClick={() => showReportHandler(testInput, innerIndex)}
                                      disabled={requestedFileLoading[innerIndex]}
                                    >
                                      {requestedFileLoading[innerIndex]
                                        ? 'Please Wait...'
                                        : 'Show Report'}
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
            </div>
          </>
        )
      })}
    </div>
  )
}

export default PatientShowDetails

////working code

// import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
// import '../../dashboard/Dashboard.css'
// import { faL } from '@fortawesome/free-solid-svg-icons'
// import axios from 'axios'

// const PatientShowDetails = ({ diagnosis, desc }) => {
//   let url = process.env.REACT_APP_API_URL
//   PatientShowDetails.propTypes = {
//     diagnosis: PropTypes.func.isRequired,
//     desc: PropTypes.func.isRequired,
//   }
//   const [reversedDiagnosis, setReversedDiagnosis] = useState([])
//   const [requestedFileLoading, setRequestedFileLoading] = useState({})

//   // Reverse diagnosis array on component mount or whenever diagnosis changes
//   useEffect(() => {
//     if (diagnosis && Array.isArray(diagnosis)) {
//       setReversedDiagnosis([...diagnosis].reverse())
//     }
//   }, [diagnosis])

//   const isFile = (value) => {
//     const regex = /^\d{13}_/

//     if (regex.test(value)) {
//       return true
//     } else {
//       return false
//     }
//   }
//   //no pdf
//   const showReportHandler = async (filename, index) => {
//     setRequestedFileLoading((prevState) => ({
//       ...prevState,
//       [index]: true,
//     }))
//     setTimeout(async () => {
//       try {
//         // Fetch the image data from the server
//         const response = await axios.get(`${url}/api/user/getPatientReport/${filename}`, {
//           responseType: 'blob', // Treat response data as blob
//         })

//         // Create a Blob object from the response data
//         const blob = new Blob([response.data], { type: response.headers['content-type'] })

//         // Generate a URL for the Blob
//         const blobUrl = URL.createObjectURL(blob)
//         // Open the URL in a new tab
//         window.open(blobUrl)
//       } catch (error) {
//         console.error('Error fetching image:', error)
//       } finally {
//         setRequestedFileLoading((prevState) => ({
//           ...prevState,
//           [index]: false,
//         }))
//       }
//     }, 3000)
//   }

//   return (
//     <div
//       style={{
//         maxHeight: '300px',
//         overflowY: 'scroll',
//         overflowX: 'hidden',
//         marginTop: '20px',
//       }}
//     >
//       {reversedDiagnosis?.map((elem, index) => {
//         const date = elem?.date

//         const datee = new Date(date)

//         const options = {
//           year: 'numeric',
//           month: '2-digit',
//           day: '2-digit',
//           hour: '2-digit',
//           minute: '2-digit',
//           // second: '2-digit',
//           hour12: true, // Set to true if you want 12-hour format with AM/PM
//         }
//         const formattedDate = datee.toLocaleDateString('en-IN', options).replace(/\//g, '/')
//         return (
//           <div key={index}>
//             <div
//               className="row"
//               // style={{ overflow: 'scroll !important', background: 'white' }}
//             >
//               <div style={{ margin: '1rem auto 1rem 1rem', overflow: 'auto !important' }}>
//                 <h5>Diagnose Date : {formattedDate}</h5>

//                 <table
//                   className="table"
//                   style={{
//                     width: '90%',
//                     border: '1px solid',
//                     fontFamily: 'ui-rounded',
//                     borderRadius: '10px',
//                   }}
//                 >
//                   <colgroup>
//                     <col style={{ width: '20%' }} />
//                     <col style={{ width: '20%' }} />
//                     <col style={{ width: '20%' }} />
//                     <col style={{ width: '20%' }} />
//                     <col style={{ width: '20%' }} />
//                   </colgroup>
//                   <thead>
//                     <tr>
//                       <th scope="col" style={{ background: '#FBF295' }}>
//                         Problems
//                       </th>
//                       <th scope="col" style={{ background: '#FBF295' }}>
//                         Test
//                       </th>
//                       <th scope="col" style={{ background: '#FBF295' }}>
//                         Test value
//                       </th>
//                       <th scope="col" style={{ background: '#FBF295' }}>
//                         Scale
//                       </th>
//                       <th scope="col" style={{ background: '#FBF295' }}>
//                         Scale value
//                       </th>
//                     </tr>
//                   </thead>
//                   {elem?.diagnosData?.map((element, innerIndex) => {
//                     let { problem, scale, test, testInput, value } = element
//                     return (
//                       <>
//                         <tbody key={innerIndex}>
//                           <tr>
//                             <td style={{ fontWeight: 'bolder' }}>{problem}</td>
//                             <td style={{ fontWeight: 'bolder' }}>{test === '' ? '-' : test}</td>
//                             <td style={{ fontWeight: 'bolder' }}>
//                               {testInput === '' ? (
//                                 '-'
//                               ) : isFile(testInput) ? (
//                                 <>
//                                   <button
//                                     className="btn btn-light"
//                                     onClick={() => showReportHandler(testInput, index)}
//                                     disabled={requestedFileLoading[index]}
//                                   >
//                                     {requestedFileLoading[index]
//                                       ? 'Please wait...'
//                                       : 'Show Report'}
//                                   </button>
//                                 </>
//                               ) : (
//                                 testInput
//                               )}
//                             </td>
//                             <td style={{ fontWeight: 'bolder' }}>{scale === '' ? '-' : scale}</td>
//                             <td style={{ fontWeight: 'bolder' }}>{value === '' ? '-' : value}</td>
//                           </tr>
//                         </tbody>
//                       </>
//                     )
//                   })}
//                 </table>
//                 <div className="row">
//                   <div style={{ margin: '1rem auto 1rem 1rem' }}>
//                     <div className="row" style={{ marginTop: '1rem' }}>
//                       <div className="col-md-2 d-flex align-items-center">
//                         <h5>Notes:</h5>
//                       </div>
//                       <div className="col-md-10 d-flex align-items-center">
//                         <div className="card" style={{ width: '87%', padding: '1rem 2rem' }}>
//                           <p style={{ margin: '0' }}>{elem.desc === '' ? '-' : elem.desc}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <div className="row" style={{ marginTop: '1rem' }}>
//                   <div className="col-md-4">
//                     <h6>Discription :</h6>{' '}
//                   </div>
//                   <div className="col-md-8">
//                     <p>safdkjshfjaisdfjidsajfdjdk dnfjjdsan</p>
//                   </div>
//                 </div> */}
//               </div>
//               <hr />
//             </div>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default PatientShowDetails
