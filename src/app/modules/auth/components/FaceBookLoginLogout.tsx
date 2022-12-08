import {LoginSocialFacebook} from 'reactjs-social-login'
import {FacebookLoginButton} from 'react-social-login-buttons'
import './socialLoginMain.css'
import {useHistory} from 'react-router-dom'
import {useState} from 'react'
import * as auth from '../redux/AuthRedux'
import {useDispatch} from 'react-redux'
// import FacebookIcon from '../../../../../public/media/icons/duotune/social/soc004.svg'
export default function FacebookLoginLogout() {
  const history = useHistory()
  const dispatch = useDispatch()

  const [profile, setProfile] = useState(null)
  return (
    <div className='facebookAuth'>
      {!profile ? (
        // <LoginSocialFacebook
        //   appId='597021728894804'
        //   onResolve={(response: any) => {
        //     console.log(response)
        //     setProfile(response.data)

        //     if (response.data.userID) {
        //       console.log(response.data.userID)

        //       window.location.href = 'http://localhost:3000/dashboard'
        //       // history.push('/dashboard')
        //     }
        //   }}
        //   onReject={(error) => {
        //     console.log(error)
        //   }}
        // >
        <LoginSocialFacebook
          appId='597021728894804'
          onResolve={(response: any) => {
            dispatch(auth.actions.login(response as any))
            // dispatch(auth.actions.setUser(response.data))
            if (dispatch(auth.actions.setUser(response.data))) {
              history.push('/dashboard')
            }
          }}
          onReject={(error) => {
            console.log(error)
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
      ) : (
        ''
      )}

      {/* {profile ? <div> 
        <h1>={profile.name}</h1>
        <img src={profile.picture.data.url} />
      </div>: ''} */}
    </div>
  )
}
