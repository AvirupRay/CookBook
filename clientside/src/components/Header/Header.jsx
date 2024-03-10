import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../Login/Login";
import Logout from "../Login/Logout";
import Profile from "../Login/Profile";

function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <div className=" bg-[#262622] h-[5vh] w-[95%] m-auto my-2  p-auto rounded-xl flex gap-16">
        {isAuthenticated ? <Logout /> : <Login />}
        <Profile />
      </div>
    </>
  );
}

export default Header;
