import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { motion } from "framer-motion";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <motion.button
      onClick={() => loginWithRedirect()}
      className=" h-full px-[1.5vw] drop-shadow-md bg-[#272727] text-[#ffffff] font-Exo font-medium text-[2.2vh] rounded-[1.2vh] cursor-pointer"
      whileHover={{ backgroundColor: "#444040" }}
    >
      Log In
    </motion.button>
  );
};

export default Login;
// px-[2vw] whitespace-nowrap h-full bg-[#faf9f7] rounded-[2vh] flex items-center justify-center font-semibold text-black text-[2vh] font-Exo cursor-pointer
