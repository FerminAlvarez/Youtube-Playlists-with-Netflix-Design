import { GoogleLogout } from "react-google-login";
import { clientID } from "../config/oauth";

function Logout(props) {
  const onSuccess = () => {
    props.setUser({});
  };

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src= {props.imageUrl} referrerPolicy="no-referrer" alt="profile"/>
        </div>
      </label>
      <ul
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li tabIndex="1">
          <GoogleLogout
            clientId={clientID}
            onLogoutSuccess={onSuccess}
            buttonText="Logout"
          />
        </li>
      </ul>
    </div>
  );
}

export default Logout;
