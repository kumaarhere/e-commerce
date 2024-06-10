
import { GoogleLogin } from 'react-google-login';

const GoogleLoginComponent = () => {
  const responseGoogle = (response) => {
    console.log(response);
    // Handle successful Google sign-in
  };

  const onFailureGoogle = (error) => {
    console.error(error);
    // Handle failed Google sign-in
  };

  return (
    <GoogleLogin
      className='mx-5 text-nowrap  google mt-2 fw-bold bg-primary  text-white'
      clientId="222194716594-h7iq8omao8on0ck22ul3d33lrhasclg0.apps.googleusercontent.com"
      buttonText="Continue with Google"
      onSuccess={responseGoogle}
      onFailure={onFailureGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleLoginComponent;
