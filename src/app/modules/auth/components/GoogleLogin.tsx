import { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import GoogleButton from 'react-google-button'
import './GoogleLogin.css';
// import  './style.css';  

// import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {useHistory} from 'react-router-dom';

const clientId = "664029350083-let1upidh0mss6rcgnvurpm1ou69ub27.apps.googleusercontent.com";
function GoogleLoginLogout() {
    const history = useHistory();

    const [googleLogin, setGoogleLogin] = useState(false);

    const handleGoogleLogin = async () => {
        setGoogleLogin(true);
    }
  
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res: any) => {
      console.log('Login Success:', res.profileObj);
      setShowloginButton(false);
      setShowlogoutButton(true);
      history.push("/dashboard");
    };
    
// const onLoginSuccess = () => {
//     <Route exact path="/auth/registration">
//   { <Redirect to="/dashboard" />}
// </Route>
//   };


    const onLoginFailure = (res: any) => {
      console.log('Login Failed:', res);
    };
    
    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };
    
    return (
        <div className='google-btns'>
            
            { showloginButton ?
                <GoogleLogin 
              
                clientId={clientId}
                buttonText="Sign In With Google"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}
{/* <GoogleButton

  onClick={onLoginSuccess}
/> */}
            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>
    );
}
export default GoogleLoginLogout;