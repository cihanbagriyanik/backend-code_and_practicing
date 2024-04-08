import { useRouter } from "next/navigation";
import React from "react";

const ProfileCard = ({ name, image }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/movies")}
      className="w-44 mx-auto cursor-pointer group"
    >
      <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:border-white overflow-hidden">
        <img className="w-max h-max object-contain" src={image} alt={name} />
      </div>
      <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
        {name}
      </div>
    </div>
  );
};

export default ProfileCard;
