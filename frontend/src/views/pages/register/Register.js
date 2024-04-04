import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

import { BiChevronDown } from 'react-icons/bi' // Assuming you have BiChevronDown from react-icons for dropdown icon
import { getFetch, postFetchData } from 'src/api/Api'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  const navigate = useNavigate()
  const API_URL = process.env.REACT_APP_API_URL
  const [department, setDepartment] = useState([])
  const [data, setData] = React.useState({
    name: '',
    email: '',
    password: '',
    department_id: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      console.log('data', data)
      const res = await postFetchData(`${API_URL}/api/user/create`, data)
      console.log('user creation', res.success)

      if (res.success === true) {
        alert('Doctor Created Successfully')
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getAllDepartments = async () => {
    try {
      const res = await getFetch(`${API_URL}/api/department/`)
      console.log('res', res.data.data)
      setDepartment(res.data.data)
    } catch (error) {
      console.log('error')
    }
  }

  useEffect(() => {
    getAllDepartments()
  }, [])
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Username"
                      autoComplete="username"
                      name="name"
                      value={data.name}
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      placeholder="Email"
                      autoComplete="email"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      name="password"
                      value={data.password}
                      onChange={handleChange}
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <BiChevronDown />
                    </CInputGroupText>
                    <select
                      className="form-select"
                      name="department_id"
                      value={data.department_id}
                      onChange={handleChange}
                    >
                      <option value="">Select Department</option>
                      {department?.map((elem) => {
                        return (
                          <>
                            <option value={elem?._id}>{elem?.departmentName}</option>
                          </>
                        )
                      })}
                    </select>
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success" onClick={handleSubmit}>
                      Create Account
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
