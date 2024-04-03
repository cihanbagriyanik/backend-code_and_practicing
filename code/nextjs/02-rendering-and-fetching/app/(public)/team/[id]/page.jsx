import DetailCard from "@/app/components/DetailCard";
import { getUserDetail, getUsers } from "@/helpers/apiFunctions";
import React from "react";

const TeamDetail = async ({ params: { id } }) => {
  const person = await getUserDetail(id);
  console.log(person);
  return (
    <div className="text-center">
      <h1 className="text-2xl">Team Person</h1>
      <DetailCard {...person} />
    </div>
  );
};

export default TeamDetail;

export async function generateStaticParams() {
  const users = await getUsers();
  return users.map((user) => ({ id: user.id.toString() }));
}
