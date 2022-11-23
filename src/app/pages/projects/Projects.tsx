/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from "react";
import { useIntl } from "react-intl";
import { KTSVG } from "../../../_metronic/helpers";
import { PageTitle } from "../../../_metronic/layout/core";
import {
    TablesWidget10
  } from '../../../_metronic/partials/widgets'

const Projects: FC = () => {
    return <>
        <div className='col-xl-12'>
            <h1>Projects</h1>


            <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bolder text-muted'>
                <th className='min-w-150px'>Project name</th>
                <th className='min-w-150px'>Project info</th>
                <th className='min-w-140px'>Project compensation</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    {/* <div className='symbol symbol-45px me-5'>
                      <img src={toAbsoluteUrl('/media/avatars/150-6.jpg')} alt='' />
                    </div> */}
                    <div className='d-flex justify-content-start flex-column'>
                     
                        Project Name here
                    
                      
                    </div>
                  </div>
                </td>
                <td>
                  
                    Project Info here
                  
                  
                </td>
                <td className='text-end'>
                  <div className='d-flex flex-column w-100 me-2'>
                    <div className='d-flex flex-stack mb-2'>
                      <span className='text-muted me-2 fs-7 fw-bold'>Project compensation here</span>
                    </div>
                    
                  </div>
                </td>
                
              </tr>
              
              
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>


        </div>
    </>;
}


const ProjectsWrapper: FC = () => {
    const intl = useIntl()
    return (
      <>
        <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.Projects'})}</PageTitle>
        <Projects />
      </>
    )
  }
export {ProjectsWrapper}
