import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../Login/Login";
import Logout from "../Login/Logout";
import Profile from "../Login/Profile";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";

function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <motion.div
        className=" 2xl:h-[4vh]  h-[5vh] w-[95%] m-auto my-2  px-2 rounded-xl flex gap-16  justify-between items-center select-none absolute top-0  z-50"
        initial={{ opacity: 1, y: -70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 0.5,
          easing: [0.42, 0, 0.58, 1],
        }}
      >
        <div className="text-[2.9vh] font-ModernAntiqua ml-[4vw] ">
          Cook's Book
        </div>
        <div className=" ">
          <div className="flex flex-row gap-[5vw] whitespace-nowrap text-white font-Exo items-end">
            <NavLink
              to="/"
              className={(isActive) =>
                ` flex gap-2 items-center justify-center px-[.3vw]  "
                }`
              }
            >
              <div className=" text-[2.3vh] h-full text-center">Home</div>
            </NavLink>
            <NavLink to="/list" className={() => ``}>
              <div className=" text-[2.3vh] text-center">Recipe</div>
            </NavLink>
            <NavLink to="/" className={() => ``}>
              <div className=" text-[2.3vh] text-center">About Us</div>
            </NavLink>
          </div>
        </div>
        <div className="flex   py-[.01%] h-full items-center justify-center">
          <Profile />
          {isAuthenticated ? <Logout /> : <Login />}
        </div>
      </motion.div>
    </>
  );
}

export default Header;
