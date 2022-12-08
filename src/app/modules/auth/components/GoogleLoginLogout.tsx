/* eslint-disable no-restricted-globals */
import {GoogleLogin} from '@react-oauth/google'
import jwt_decode from 'jwt-decode'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import './socialLoginMain.css'
import * as auth from '../redux/AuthRedux'
export default function LoginLogout() {
  const history = useHistory()
  const dispatch = useDispatch()

  //   type JWTDeCode  = {
  //     id: string,
  //     email: string,
  //     iat: number,
  //     exp: number
  // }

  return (
    <div className='googleAuth'>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse.credential)
          const decoded: any = jwt_decode(credentialResponse.credential as string)
          // console.log('checking: ', decoded)
          // console.log(decoded.email_verified)
          if (decoded.email_verified === true) {
            dispatch(auth.actions.login(credentialResponse.credential as string))
            dispatch(auth.actions.setUser(decoded))
            history.push('/dashboard')
          }
        }}
        onError={() => {
          // console.log('checking error: ')
        }}
      />
    </div>
  )
}
