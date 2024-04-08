import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import CIcon from '@coreui/icons-react'
import { cilArrowCircleRight } from '@coreui/icons'
import { ToastContainer, toast } from 'react-toastify'

const ReportModal = ({ setHide, popupData }) => {
  console.log('fromMOdal', popupData)
  let diagnosis = popupData?.diagnosis
  let url = process.env.REACT_APP_API_URL
  const [requestedFileLoading, setRequestedFileLoading] = useState({})
  const [reversedDiagnosis, setReversedDiagnosis] = useState([])
  const [selectedFile, setSelectedFile] = useState(Array(diagnosis?.length).fill(''))
  const isFile = (value) => {
    const regex = /^\d{13}_/

    if (regex.test(value)) {
      return true
    } else {
      return false
    }
  }

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

  useEffect(() => {
    if (diagnosis && Array.isArray(diagnosis)) {
      setReversedDiagnosis([...diagnosis].reverse())
    }
  }, [diagnosis])

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

  return (
    <>
      <div
        className="modal"
        tabIndex={-1}
        style={{
          display: 'block',
          backgroundColor: 'rgba(0,0,0,0.8)',
          maxHeight: '100%',
          color: 'black',
        }}
      >
        <div
          className="modal-dialog"
          style={{ height: '30rem', width: '60rem', minWidth: '70rem' }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h5 className="modal-title">Diagnosis Details</h5>
                <p style={{ fontSize: '14px' }}>
                  <span style={{ fontWeight: 'bolder' }}>CR no.</span> {popupData?.crn}{' '}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span style={{ fontWeight: 'bolder' }}>Name : </span>
                  {popupData?.name}
                </p>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setHide(false)}
              ></button>
            </div>
            <div className="modal-body">
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
                  const formattedDate = datee
                    .toLocaleDateString('en-IN', options)
                    .replace(/\//g, '/')
                  return (
                    <>
                      <div key={index}>
                        <div
                          className="row"
                          // style={{ overflow: 'scroll !important', background: 'white' }}
                        >
                          <div
                            style={{ margin: '1rem auto 1rem 1rem', overflow: 'auto !important' }}
                          >
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
                              {elem.diagnosData.map((element, innerIndex) => {
                                const { problem, scale, test, testInput, value } = element

                                return (
                                  <tbody key={innerIndex}>
                                    <tr>
                                      <td style={{ fontWeight: 'bolder' }}>{problem}</td>
                                      <td style={{ fontWeight: 'bolder' }}>
                                        {test === '' ? '-' : test}
                                      </td>
                                      <td style={{ fontWeight: 'bolder' }}>
                                        {test === '' ? (
                                          '-'
                                        ) : testInput.text ? (
                                          testInput.text
                                        ) : (
                                          <div style={{ display: 'flex' }}>
                                            <select
                                              className="form-select"
                                              value={selectedFile[innerIndex] || ''}
                                              onChange={(e) => handleFileSelect(e, innerIndex)}
                                              disabled={requestedFileLoading[innerIndex]}
                                              style={{ width: '70%' }}
                                            >
                                              <option value="">Select file</option>
                                              {testInput.files.map((file, fileIndex) => (
                                                <option key={fileIndex} value={file.fileName}>
                                                  {editNameFun(file.fileName)}
                                                </option>
                                              ))}
                                            </select>
                                            <button
                                              className="btn btn-light mx-2"
                                              onClick={() => {
                                                if (selectedFile[innerIndex]) {
                                                  showReportHandler(
                                                    selectedFile[innerIndex],
                                                    innerIndex,
                                                  )
                                                } else {
                                                  toast.warning(
                                                    'Please select a file to download',
                                                    {
                                                      autoClose: 700,
                                                    },
                                                  )
                                                  // console.log('Please select a file ')
                                                }
                                              }}
                                              disabled={requestedFileLoading[innerIndex]}
                                            >
                                              {requestedFileLoading[innerIndex] ? (
                                                '...'
                                              ) : (
                                                <CIcon icon={cilArrowCircleRight} />
                                              )}
                                            </button>
                                          </div>
                                        )}
                                      </td>
                                      <td style={{ fontWeight: 'bolder' }}>
                                        {scale === '' ? '-' : scale}
                                      </td>
                                      <td style={{ fontWeight: 'bolder' }}>
                                        {value === '' ? '-' : value}
                                      </td>
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
                                    <div
                                      className="card"
                                      style={{ width: '87%', padding: '1rem 2rem' }}
                                    >
                                      <p style={{ margin: '0' }}>
                                        {elem.desc === '' ? '-' : elem.desc}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <hr />
                        </div>
                      </div>
                    </>
                  )
                })}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => setHide(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

ReportModal.propTypes = {
  setHide: PropTypes.func.isRequired,
  popupData: PropTypes.func.isRequired,
}

export default ReportModal
