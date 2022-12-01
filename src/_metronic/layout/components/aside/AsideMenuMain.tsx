/* eslint-disable react/jsx-no-target-blank */

import {useIntl} from 'react-intl'

import {AsideMenuItem} from './AsideMenuItem'
  
export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/dashboard.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/Users'
        icon='/media/icons/duotune/art/user.svg'
        title={intl.formatMessage({id: 'Users'})}
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/Projects'
        icon='/media/icons/duotune/art/project.svg'
        title={intl.formatMessage({id: 'Projects'})}
        fontIcon='bi-app-indicator'
      />

      {/* <AsideMenuItem
        to='/UploadProjects'
        icon='/media/icons/duotune/art/uploadProject.svg'
        title={intl.formatMessage({id: 'Upload Projects'})}
        fontIcon='bi-app-indicator'
      /> */}

    <AsideMenuItem
        to='/Chat'
        icon='/media/icons/duotune/art/privateChat.svg'
        title={intl.formatMessage({id: 'Chat'})}
        fontIcon='bi-app-indicator'
      />
    {/* <AsideMenuItem
        to='/chatBox'
        icon='/media/icons/duotune/art/privateChat.svg'
        title={intl.formatMessage({id: 'Private Chat'})}
        fontIcon='bi-app-indicator'
      /> */}
      
      
      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>
    </>
  )
}
