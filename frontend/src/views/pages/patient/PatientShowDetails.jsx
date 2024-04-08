import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import CIcon from '@coreui/icons-react'
import {
  cilCloudDownload,
  cilArrowCircleRight,
  cilChevronCircleDownAlt,
  cilChevronDoubleDown,
  cilDataTransferDown,
} from '@coreui/icons'
import { ToastContainer, toast } from 'react-toastify'

const PatientShowDetails = ({ diagnosis }) => {
  const [reversedDiagnosis, setReversedDiagnosis] = useState([])
  const [requestedFileLoading, setRequestedFileLoading] = useState({})
  const [selectedFile, setSelectedFile] = useState(Array(diagnosis?.length).fill(''))

  useEffect(() => {
    if (diagnosis && Array.isArray(diagnosis)) {
      const reversed = [...diagnosis].reverse()
      setReversedDiagnosis(reversed)
    }
  }, [diagnosis])

  const showReportHandler = async (filename, index) => {
    setRequestedFileLoading((prevState) => ({
      ...prevState,
      [index]: true,
    }))

    try {
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
      console.error('Error fetching report:', error)
    } finally {
      setRequestedFileLoading((prevState) => ({
        ...prevState,
        [index]: false,
      }))
    }
  }

  const handleFileSelect = (e, index) => {
    const { value } = e.target
    const updatedSelectedFile = [...selectedFile]
    updatedSelectedFile[index] = value
    setSelectedFile(updatedSelectedFile)
  }
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
    setHoveredFile(fileName)
  }

  const handleMouseLeave = () => {
    setHoveredFile(null)
  }

  return (
    <div
      style={{ maxHeight: '300px', overflowY: 'scroll', overflowX: 'hidden', marginTop: '20px' }}
    >
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
                    const { problem, scale, test, testInput, value } = element

                    return (
                      <tbody key={innerIndex}>
                        <tr>
                          <td style={{ fontWeight: 'bolder' }}>{problem}</td>
                          <td style={{ fontWeight: 'bolder' }}>{test === '' ? '-' : test}</td>
                          <td style={{ fontWeight: 'bolder' }}>
                            {test === '' ? (
                              '-'
                            ) : testInput?.text ? (
                              testInput.text
                            ) : (
                              <div style={{ display: 'flex' }}>
                                {testInput?.files?.map((file, fileIndex) => (
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
                                  >
                                    <CIcon
                                      icon={cilDataTransferDown}
                                      style={{ marginRight: '5px' }}
                                    />
                                    {hoveredFile === file.fileName && (
                                      <div
                                        style={{
                                          position: 'absolute',
                                          top: '-30px',
                                          left: '50%',
                                          transform: 'translateX(-50%)',
                                          backgroundColor: 'lightblue',
                                          padding: '5px',
                                          borderRadius: '5px',
                                          boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
                                          zIndex: '999',
                                        }}
                                      >
                                        {editNameFun(file.fileName)}
                                      </div>
                                    )}
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
