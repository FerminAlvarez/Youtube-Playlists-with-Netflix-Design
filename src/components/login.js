import { GoogleLogin } from "react-google-login";
import { clientID } from "../config/oauth";

function Login(props) {
  const onSuccess = (res) => {
    props.setUser({
      name: res.profileObj.name,
      imageUrl: res.profileObj.imageUrl,
      accessToken: res.accessToken,
    });
    console.log(res.accessToken)
  };

  const onFailure = (res) => {
    console.log("Something went wrong");
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientID}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        buttonText="Log in with Google"
      />
    </div>
  );
}

export default Login;
