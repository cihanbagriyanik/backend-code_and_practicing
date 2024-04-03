import { getUsers } from "@/helpers/apiFunctions";
import React from "react";

const Team = async () => {
  const users = await getUsers();
  console.log(users);
  return (
    <div className="text-center">
      <h1 className="text-2xl">Team</h1>
    </div>
  );
};

export default Team;
