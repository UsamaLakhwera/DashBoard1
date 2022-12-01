/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unreachable */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState, useEffect } from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { KTSVG } from '../../../helpers'
import { Link } from 'react-router-dom'


type Props = {
  className: string
}

const TablesWidget10: React.FC<Props> = ({ className }) => {
  const [users, setUsers] = useState<string[]>([])
 

  useEffect(() => {
    const fetchData = () => {
      // fetch("https://jsonplaceholder.typicode.com/users")
        fetch('Mock/dummyData.json')
        .then(response => {
          console.log("Checking response: ", response);
          return response.json();
  
        })
        .then(data => {
          setUsers(data)
          console.log("Checking data: ", data);
        })
    }
    fetchData()
  }, [])

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Users</span>
          {/* <span className='text-muted mt-1 fw-bold fs-7'>Over 500 members</span> */}
        </h3>
        <div
          className='card-toolbar'
          data-bs-toggle='tooltip'
          data-bs-placement='top'
          data-bs-trigger='hover'
          title='Click to add a user'
        >
          {/* <a
            href='#'
            className='btn btn-sm btn-light-primary'
            // data-bs-toggle='modal'
            // data-bs-target='#kt_modal_invite_friends'
          >
            <KTSVG path='media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
            New Member
          </a> */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <>
            <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
              {/* begin::Table head */}
              <thead>
                <tr className='fw-bolder text-muted'>
                  <th className='min-w-150px'>First Name</th>
                  <th className='min-w-150px'>Last Name</th>
                  <th className='min-w-140px'>Email</th>
                  <th className='min-w-140px'>Password</th>
                  <th className='min-w-120px'>Status</th>
                  <th className='min-w-100px text-end'>Actions</th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>
                {users.length && users.map((user: any) => (<tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      {/* <div className='symbol symbol-45px me-5'>
                          <img src={toAbsoluteUrl('/media/avatars/150-6.jpg')} alt='' />
                        </div> */}
                      <div className='d-flex justify-content-start flex-column'>
                        <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                          {user.first_name}
                        </a>

                      </div>
                    </div>
                  </td>
                  <td>
                    <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                      {user.last_name}
                    </a>

                  </td>
                  <td className='text-end'>
                    <div className='d-flex flex-column w-100 me-2'>
                      <div className='d-flex flex-stack mb-2'>
                        <span className='text-muted me-2 fs-7 fw-bold'>{user.email}</span>
                      </div>

                    </div>
                  </td>
                  <td className='text-end'>
                    <div className='d-flex flex-column w-100 me-2'>
                      <div className='d-flex flex-stack mb-2'>
                        <span className='text-muted me-2 fs-7 fw-bold'>{user.password}</span>
                      </div>

                    </div>
                  </td>
                  <td>
                  {/* <div className="authenticate_user" id={user.authenticate}></div> */}

                  <div className='mb-10'>
          {/* <label className='form-label fw-bold'>Status:</label> */}

          <div>
            <select
              className='form-select form-select-solid'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              defaultValue={''}
            >
              <option></option>
              <option value='approved'>Approved</option>
              <option value='pending'>Pending</option>
              <option value='process'>In Process</option>
              <option value='rejected'>Rejected</option>
            </select>
          </div>
        </div>



                  </td>
                  <td>
                    <div className='d-flex justify-content-end flex-shrink-0'>

                    <a
                        href='#'
                        className='btn btn-icon btn-active-color-primary btn-sm me-1'
                      >
                        {/* <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' /> */}
                        <div className="user_status" id={user.authenticate}></div>
                      </a>

                    <Link to='/chatBox'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/art/chat.svg' className='svg-icon-3' />
                    </Link>
                     
                      <Link to='/UploadProjects'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/art/uploadProject.svg' className='svg-icon-3' />
                    </Link>
                    </div>
                  </td>
                </tr>))
                }
              </tbody>
              {/* end::Table body */}
            </table>
          </>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}
export { TablesWidget10 }