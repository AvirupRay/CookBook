import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      className="w-20 bg-[#F4E896] rounded-xl text-black font-bold text-lg"
    >
      Log Out
    </button>
  );
};

export default Logout;
