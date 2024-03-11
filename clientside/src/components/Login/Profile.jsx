import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { motion } from "framer-motion";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    isAuthenticated && (
      <motion.div
        className="flex justify-center gap-[.5vw] items-center  my-[.2vh] rounded-[.5rem]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          type: "spring",
          stiffness: 100,
          damping: 20,
          easing: [0.42, 0, 0.7, 1],
        }}
      >
        <img
          src={user.picture}
          alt={user.name}
          className="w-[17%] aspect-square rounded-[1rem] "
        />
        <div className=" bg-[black] rounded w-[50%] px-[.3vw] h-full font-Karla text-[2.5vh] 2xl:text-[2vh] whitespace-nowrap">
          {" "}
          {user.name}
        </div>
      </motion.div>
    )
  );
};

export default Profile;
