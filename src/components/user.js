import LoginButton from "./login";
import LogoutButton from "./logout";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import { clientID } from "../config/oauth";
import { useState } from "react";

function Navbar() {
  const [user, setUser] = useState({});

  useEffect(() => {
    function start() {
      gapi.auth2.init({
        client_id: clientID,
        scope:
          "https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtubepartner",
      });
    }

    gapi.load("client:auth2", start);
  });

  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <span className="font-semibold mx-5"> {user.name} </span>
        {user.name ? (
          <LogoutButton setUser={setUser} imageUrl={user.imageUrl}/>
        ) : (
          <LoginButton setUser={setUser} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
