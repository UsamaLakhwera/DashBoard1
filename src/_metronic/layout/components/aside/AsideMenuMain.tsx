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
        to='/builder'
        icon='/media/icons/duotune/art/user.svg'
        title={intl.formatMessage({id: 'User'})}
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/builder'
        icon='/media/icons/duotune/art/project.svg'
        title={intl.formatMessage({id: 'Projects'})}
        fontIcon='bi-app-indicator'
      />
       <AsideMenuItem
        to='/builder'
        icon='/media/icons/duotune/art/chat.svg'
        title={intl.formatMessage({id: 'Chat'})}
        fontIcon='bi-app-indicator'
      />
      
      
      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>
    </>
  )
}
