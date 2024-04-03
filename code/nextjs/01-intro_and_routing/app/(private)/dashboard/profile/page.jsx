import GoBackButton from "@/components/GoBackButton";
import React from "react";

const Profile = () => {
  return (
    <div className="container mx-auto px-6 py-6">
      <h1 className="text-3xl font-bold underline text-center">
        Hello, This is Profile Page
      </h1>
      <GoBackButton />
    </div>
  );
};

export default Profile;
