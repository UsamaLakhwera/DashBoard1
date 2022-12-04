import {useState} from 'react'
import FacebookLogin from 'react-facebook-login'
// import ReactDOM from 'react-dom';
// import {Redirect} from 'react-dom'
import {Route, Redirect} from 'react-router-dom'
// import  './style.css';

// import {toAbsoluteUrl} from '../../../../_metronic/helpers'

const clientId = '597021728894804'
function FacebookLoginLogout() {
  const [showloginButton, setShowloginButton] = useState(true)
  const [showlogoutButton, setShowlogoutButton] = useState(false)

  // const onLoginSuccess = (res: any) => {
  //   console.log('Login Success:', res.profileObj);
  //   setShowloginButton(false);
  //   setShowlogoutButton(true);
  // };

  const onLoginFailure = (res: any) => {
    console.log('Login Failed:', res)
  }
  const onLoginSuccess = () => {
    ;<Route exact path='/auth/registration'>
      {<Redirect to='/dashboard' />}
    </Route>
  }

  const onSignoutSuccess = () => {
    alert('You have been logged out successfully')
    console.clear()
    setShowloginButton(true)
    setShowlogoutButton(false)
  }

  // ReactDOM.render(
  return (
    <div>
      {showloginButton ? (
        <FacebookLogin
          appId={clientId}
          autoLoad={false}
          fields='name,email,picture'
          onClick={onLoginSuccess}
          callback={onLoginFailure}
        />
      ) : null}
    </div>
  )
  // );
}

export default FacebookLoginLogout
