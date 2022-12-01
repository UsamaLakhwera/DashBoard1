/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from "react";
import { useIntl } from "react-intl";
// import { KTSVG } from "../../../_metronic/helpers";
import { PageTitle } from "../../../_metronic/layout/core";
// import { TablesWidget10} from '../../../_metronic/partials/widgets'
import { Projects } from './../../modules/profile/components/Projects';
import { useState } from 'react';
import { useEffect } from 'react';
type Props = {
  className: string
}


// *********************************


// eslint-disable-next-line @typescript-eslint/no-unused-vars



// const TablesWidget10: React.FC<Props> = ({ className }) => {
  
  
  
  // *********************************
  
  const ProjectsWrapper: React.FC<Props> = ({className}) => {
    
    // *********************************
    const [project, setProject] = useState<string[]>([])
  

 useEffect(() => {
    const fetchData = () => {
      // fetch("https://jsonplaceholder.typicode.com/users")
      fetch('Mock/MOCK_PROJECTS.json')
      .then(response => {
        console.log("Checking response: ", response);
        return response.json();
        
      })
      .then(data => {
        setProject(data)
        console.log("Checking data: ", data);
      })
    }
    fetchData()
  }, [])
  
  
  // *********************************
  
  
  
  
  
  
  
  
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
              <th className='min-w-140px'>Dated</th>
            </tr>
          </thead>
          {/* end::Table head */}
          {/* begin::Table body */}
          <tbody>
          {project.length && project.map((projects: any) => (<tr>
              <td>
                <div className='d-flex align-items-center'>
                  {/* <div className='symbol symbol-45px me-5'>
                    <img src={toAbsoluteUrl('/media/avatars/150-6.jpg')} alt='' />
                  </div> */}
                  <div className='d-flex justify-content-start flex-column'>
                   
                  {projects.project_name}
                  
                    
                  </div>
                </div>
              </td>
              <td>
                
              {projects.info}
                
                
              </td>
              <td className='text-end'>
                <div className='d-flex flex-column w-100 me-2'>
                  <div className='d-flex flex-stack mb-2'>
                    <span className='text-muted me-2 fs-7 fw-bold'>{projects.dated}</span>
                  </div>
                  
                </div>
              </td>
              
            </tr>))
            }</tbody>
          {/* end::Table body */}
        </table>
        {/* end::Table */}
      </div>
      {/* end::Table container */}
    </div>


      </div>
  </>;
}
// const ProjectsWrapper: FC = () => {
  //     const intl = useIntl()
  //     return (
    //       <>
//         <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.Projects'})}</PageTitle>
//         <Projects />
//       </>
//     )
//   }
export {ProjectsWrapper}
