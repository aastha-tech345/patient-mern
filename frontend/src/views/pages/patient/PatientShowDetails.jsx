import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
const PatientShowDetails = ({ diagnosis, desc }) => {
  // console.log('DateBuDat', Date())
  PatientShowDetails.propTypes = {
    diagnosis: PropTypes.func.isRequired,
    desc: PropTypes.func.isRequired,
  }
  console.log('dia', diagnosis)
  const [reversedDiagnosis, setReversedDiagnosis] = useState([])

  // Reverse diagnosis array on component mount or whenever diagnosis changes
  useEffect(() => {
    if (diagnosis && Array.isArray(diagnosis)) {
      setReversedDiagnosis([...diagnosis].reverse())
    }
  }, [diagnosis])
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

        // let dateData = Number(date)
        // const timestamp = dateData
        // const datee = new Date(timestamp)

        // // Adjusting for Indian time zone (UTC+5:30)
        // datee.setHours(datee.getHours() + 5)
        // datee.setMinutes(datee.getMinutes() + 30)

        // const hours = datee.getHours()
        // const am_pm = hours >= 12 ? 'PM' : 'AM'
        // const formattedHours = hours % 12 || 12 // Convert 24-hour to 12-hour format

        // const formattedDate = `${datee.getDate().toString().padStart(2, '0')}-${(
        //   datee.getMonth() + 1
        // )
        //   .toString()
        //   .padStart(2, '0')}-${datee.getFullYear()} ${formattedHours
        //   .toString()
        //   .padStart(2, '0')}:${datee.getMinutes().toString().padStart(2, '0')} ${am_pm}`

        // console.log(formattedDate)
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
            <div className="row">
              <div style={{ margin: '1rem auto 1rem 1rem' }}>
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
                    <col style={{ width: '31%' }} />
                    <col style={{ width: '23%' }} />
                    <col style={{ width: '23%' }} />
                    <col style={{ width: '23%' }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col" style={{ background: '#FBF295' }}>
                        Problems
                      </th>
                      <th scope="col" style={{ background: '#FBF295' }}>
                        VAS
                      </th>
                      <th scope="col" style={{ background: '#FBF295' }}>
                        ODI
                      </th>
                      <th scope="col" style={{ background: '#FBF295' }}>
                        MPSI
                      </th>
                    </tr>
                  </thead>
                  {elem.problem.map((element) => {
                    let { name, scale1, scale2, scale3 } = element
                    return (
                      <>
                        <tbody>
                          <tr>
                            <td style={{ fontWeight: 'bolder' }}>{name}</td>
                            <td style={{ fontWeight: 'bolder' }}>{scale1}</td>
                            <td style={{ fontWeight: 'bolder' }}>{scale2}</td>
                            <td style={{ fontWeight: 'bolder' }}>{scale3}</td>
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
                        <h5>Discription:</h5>
                      </div>
                      <div className="col-md-10 d-flex align-items-center">
                        <div className="card" style={{ width: '87%', padding: '1rem 2rem' }}>
                          <p style={{ margin: '0' }}>{elem.desc}</p>
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
}

export default PatientShowDetails
