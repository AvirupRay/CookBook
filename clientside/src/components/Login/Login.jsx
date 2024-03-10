import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="w-20 bg-[#F4E896] rounded-xl text-black font-bold text-lg"
    >
      Log In
    </button>
  );
};

export default Login;
