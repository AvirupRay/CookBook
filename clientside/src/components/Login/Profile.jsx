import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex flex-row gap-5 items-center">
        <img src={user.picture} alt={user.name} className="w-10 rounded-full" />
        <h2 className="font-bold text-xl"> {user.name}</h2>
      </div>
    )
  );
};

export default Profile;
