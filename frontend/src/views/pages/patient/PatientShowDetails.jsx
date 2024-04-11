import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import CIcon from '@coreui/icons-react'
import { cilDataTransferDown } from '@coreui/icons'
import { ToastContainer, toast } from 'react-toastify'
import SpinnerOverlay from 'src/views/publicItems/ SpinnerOverlay'

const PatientShowDetails = ({ diagnosis }) => {
  console.log('Guarva', diagnosis)
  const [reversedDiagnosis, setReversedDiagnosis] = useState([])
  const [loading, setLoading] = useState(false)
  const [requestedFileLoading, setRequestedFileLoading] = useState({})
  // const [selectedFile, setSelectedFile] = useState(Array(diagnosis?.length).fill(''))

  useEffect(() => {
    if (diagnosis && Array.isArray(diagnosis)) {
      const reversed = [...diagnosis].reverse()
      setReversedDiagnosis(reversed)
    }
  }, [diagnosis])

  const showReportHandler = async (filename, index) => {
    try {
      setLoading(true)

      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/user/getPatientReport/${filename}`,
        {
          responseType: 'blob',
        },
      )

      const blob = new Blob([response.data], { type: response.headers['content-type'] })
      const blobUrl = URL.createObjectURL(blob)
      window.open(blobUrl)
    } catch (error) {
      setLoading(false)
      console.error('Error fetching report:', error)
    } finally {
      setLoading(false)
    }
  }

  // const handleFileSelect = (e, index) => {
  //   const { value } = e.target
  //   const updatedSelectedFile = [...selectedFile]
  //   updatedSelectedFile[index] = value
  //   setSelectedFile(updatedSelectedFile)
  // }
  const editNameFun = (name) => {
    if (name) {
      const fileName = name
      const parts = fileName.split('_')
      // Check if the file name contains underscores
      if (parts.length > 1) {
        // Exclude the first part of the file name and join the rest with underscores
        const editedFileName = parts.slice(1).join('_')
        const actualFileName = editedFileName.split('.')[0]
        return actualFileName
      } else {
        // If there are no underscores or only one part, return the original file name
        return fileName
      }
    } else {
      // If the file name is undefined, return an empty string
      return ''
    }
  }
  // console.log('guarva', reversedDiagnosis)

  const [hoveredFile, setHoveredFile] = useState(null)

  const handleMouseEnter = (fileName) => {
    const fileNamee = editNameFun(fileName)
    setHoveredFile(fileNamee)
  }

  const handleMouseLeave = () => {
    setHoveredFile(null)
  }

  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 768) // Adjust the breakpoint as needed
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div style={{ maxHeight: '300px', marginTop: '20px' }}>
      {reversedDiagnosis?.map((elem, index) => {
        const date = new Date(elem.date)
        const formattedDate = date
          .toLocaleDateString('en-IN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          })
          .replace(/\//g, '/')

        return (
          <div key={index}>
            {isSmallScreen ? (
              <div className="row">
                <div style={{ overflow: 'auto !important' }}>
                  <h6>Diagnose Date: {formattedDate}</h6>

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
                        <th scope="col" className="tableTitle">
                          Problems
                        </th>
                        <th scope="col" className="tableTitle">
                          Test
                        </th>
                        <th scope="col" className="tableTitle">
                          Test value
                        </th>
                        <th scope="col" className="tableTitle">
                          Scale
                        </th>
                        <th scope="col" className="tableTitle">
                          Scale value
                        </th>
                      </tr>
                    </thead>
                    {elem?.diagnosData?.map((element, innerIndex) => {
                      const { problem, scale, test, testInput, files, value } = element
                      // console.log('Guarav', element)
                      return (
                        <tbody key={innerIndex}>
                          {loading && <SpinnerOverlay message="Opening File" />}
                          <tr>
                            <td className="tableTitle">{problem}</td>
                            <td className="tableTitle">{test === '' ? '-' : test}</td>
                            <td className="tableTitle">
                              {testInput ? (
                                testInput
                              ) : (
                                <div style={{ display: 'flex' }}>
                                  {files?.map((file, fileIndex) => (
                                    <div
                                      key={fileIndex}
                                      value={file.fileName}
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginRight: '10px',
                                      }}
                                      onMouseEnter={() => handleMouseEnter(file.fileName)}
                                      onMouseLeave={() => handleMouseLeave()}
                                      onClick={() => showReportHandler(file?.fileName, fileIndex)}
                                    >
                                      <button
                                        type="button"
                                        className="btn btn-sm btn-primary" // Decreased size and changed color to blue
                                        data-toggle="popover"
                                        title={hoveredFile}
                                        style={{ margin: '0' }}
                                      >
                                        <CIcon icon={cilDataTransferDown} />
                                      </button>
                                    </div>
                                  ))}
                                </div>
                                // <div style={{ display: 'flex' }}>
                                //   <select
                                //     className="form-select"
                                //     value={selectedFile?.[innerIndex] || ''}
                                //     onChange={(e) => handleFileSelect(e, innerIndex)}
                                //     disabled={requestedFileLoading?.[innerIndex]}
                                //     style={{ width: '70%' }}
                                //   >
                                //     <option value="">Select file</option>
                                //     {testInput?.files?.map((file, fileIndex) => (
                                //       <option key={fileIndex} value={file.fileName}>
                                //         {editNameFun(file.fileName)}
                                //       </option>
                                //     ))}
                                //   </select>
                                //   <button
                                //     className="btn btn-light mx-2"
                                //     onClick={() => {
                                //       if (selectedFile?.[innerIndex]) {
                                //         showReportHandler(selectedFile[innerIndex], innerIndex)
                                //       } else {
                                //         toast.warning('Please select a file to download', {
                                //           autoClose: 700,
                                //         })
                                //       }
                                //     }}
                                //     disabled={requestedFileLoading?.[innerIndex]}
                                //   >
                                //     {requestedFileLoading?.[innerIndex] ? (
                                //       '...'
                                //     ) : (
                                //       <CIcon icon={cilArrowCircleRight} />
                                //     )}
                                //   </button>
                                // </div>
                              )}
                            </td>
                            {console.log('Guarav', testInput)}
                            <td className="tableTitle">{scale === '' ? '-' : scale}</td>
                            <td className="tableTitle">{value === '' ? '-' : value}</td>
                          </tr>
                        </tbody>
                      )
                    })}
                  </table>

                  <div className="row">
                    <div style={{ margin: '0 10px 10px 10px' }}>
                      <div className="row">
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
                </div>
                <hr />
              </div>
            ) : (
              <div className="row">
                <div style={{ margin: '1rem auto 1rem 1rem', overflow: 'auto !important' }}>
                  <h5>Diagnose Date: {formattedDate}</h5>

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
                      const { problem, scale, test, testInput, files, value } = element
                      // console.log('Guarav', element)
                      return (
                        <tbody key={innerIndex}>
                          {loading && <SpinnerOverlay message="Opening File" />}
                          <tr>
                            <td style={{ fontWeight: 'bolder' }}>{problem}</td>
                            <td style={{ fontWeight: 'bolder' }}>{test === '' ? '-' : test}</td>
                            <td style={{ fontWeight: 'bolder' }}>
                              {testInput ? (
                                testInput
                              ) : (
                                <div style={{ display: 'flex' }}>
                                  {files?.map((file, fileIndex) => (
                                    <div
                                      key={fileIndex}
                                      value={file.fileName}
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginRight: '10px',
                                      }}
                                      onMouseEnter={() => handleMouseEnter(file.fileName)}
                                      onMouseLeave={() => handleMouseLeave()}
                                      onClick={() => showReportHandler(file?.fileName, fileIndex)}
                                    >
                                      <button
                                        type="button"
                                        className="btn btn-sm btn-primary" // Decreased size and changed color to blue
                                        data-toggle="popover"
                                        title={hoveredFile}
                                        style={{ margin: '0' }}
                                      >
                                        <CIcon icon={cilDataTransferDown} />
                                      </button>
                                    </div>
                                  ))}
                                </div>
                                // <div style={{ display: 'flex' }}>
                                //   <select
                                //     className="form-select"
                                //     value={selectedFile?.[innerIndex] || ''}
                                //     onChange={(e) => handleFileSelect(e, innerIndex)}
                                //     disabled={requestedFileLoading?.[innerIndex]}
                                //     style={{ width: '70%' }}
                                //   >
                                //     <option value="">Select file</option>
                                //     {testInput?.files?.map((file, fileIndex) => (
                                //       <option key={fileIndex} value={file.fileName}>
                                //         {editNameFun(file.fileName)}
                                //       </option>
                                //     ))}
                                //   </select>
                                //   <button
                                //     className="btn btn-light mx-2"
                                //     onClick={() => {
                                //       if (selectedFile?.[innerIndex]) {
                                //         showReportHandler(selectedFile[innerIndex], innerIndex)
                                //       } else {
                                //         toast.warning('Please select a file to download', {
                                //           autoClose: 700,
                                //         })
                                //       }
                                //     }}
                                //     disabled={requestedFileLoading?.[innerIndex]}
                                //   >
                                //     {requestedFileLoading?.[innerIndex] ? (
                                //       '...'
                                //     ) : (
                                //       <CIcon icon={cilArrowCircleRight} />
                                //     )}
                                //   </button>
                                // </div>
                              )}
                            </td>
                            {console.log('Guarav', testInput)}
                            <td style={{ fontWeight: 'bolder' }}>{scale === '' ? '-' : scale}</td>
                            <td style={{ fontWeight: 'bolder' }}>{value === '' ? '-' : value}</td>
                          </tr>
                        </tbody>
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
                </div>
                <hr />
              </div>
            )}
          </div>
        )
      })}
      <ToastContainer />
    </div>
  )
}

PatientShowDetails.propTypes = {
  diagnosis: PropTypes.array.isRequired,
}

export default PatientShowDetails
