import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { motion } from "framer-motion";
import { LogOut } from "lucide-react";

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <motion.button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      className=" h-full bg-[#d35656] px-[.5vw] font-Karla font-medium rounded"
      whileHover={{ backgroundColor: "#cf4747" }}
      whileTap={{ scale: 0.9 }}
      transition={{
        duration: 0.1,
        type: "spring",
        stiffness: 100,
        damping: 20,
        ease: "easeInOut",
      }}
    >
      Log Out
    </motion.button>
  );
};

export default Logout;
