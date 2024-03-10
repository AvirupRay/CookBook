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
      <div className=" bg-[#262622] h-[5vh] w-[95%] m-auto my-2  p-2 rounded-xl flex gap-16 flex-row justify-around items-center font-WorkSans">
        <div className="text-3xl font-display font-semibold">Cook's Book</div>

        <div>
          <ul className="flex flex-row gap-5 text-2xl items-center">
            <NavLink to="/">
              <li className="w-40 p-2 bg-[#F4E896] rounded-xl text-black font-bold text-lg text-center">
                HOME
              </li>
            </NavLink>
            <NavLink to="/list">
              <li className="w-40 p-2 bg-[#F4E896] rounded-xl text-black font-bold text-lg text-center">
                GENERATE
              </li>
            </NavLink>
            <NavLink to="/">
              <li className="w-40 p-2 bg-[#F4E896] rounded-xl text-black font-bold text-lg text-center">
                ABOUT US
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="flex flex-row gap-20">
          <Profile />
          {isAuthenticated ? <Logout /> : <Login />}
        </div>
      </div>
    </>
  );
}

export default Header;
