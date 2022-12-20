import User from "./user";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Youtube-Playlists</a>
      </div>
      <div className="flex-none">
        <User />
      </div>
    </div>
  );
}

export default Navbar;
