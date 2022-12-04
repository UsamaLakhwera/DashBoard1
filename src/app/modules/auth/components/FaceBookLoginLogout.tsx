import {LoginSocialFacebook} from 'reactjs-social-login'
import {FacebookLoginButton} from 'react-social-login-buttons'
import './socialLoginMain.css'
// import FacebookIcon from '../../../../../public/media/icons/duotune/social/soc004.svg'

export default function FacebookLoginLogout() {
  return (
    // <div className='facebookAuth'>
    <LoginSocialFacebook
      appId='597021728894804'
      onResolve={(response: any) => {
        console.log(response.data.accessToken)
        if (response.data.accessToken) {
          window.location.replace('http://localhost:3000/dashboard')
        }
      }}
      onReject={(error) => {
        console.log(error)
      }}
    >
      <FacebookLoginButton />
    </LoginSocialFacebook>
    //  </div>
  )
}
