// "use client";
import GoBackButton from "@/components/GoBackButton";
// import { useParams } from "next/navigation";
import React from "react";

const UserDetail = ({ params }) => {
  //* Url parametresini client componentlerde useParams hooku ile, server componentlerde props üzerinden yakalayabiliyoruz.
  //   const { userId } = useParams();
  const { userId } = params;
  return (
    <div className="container mx-auto px-6 py-6">
      <h1 className="text-3xl font-bold underline text-center">
        Hello, This is User {userId}
      </h1>
      <GoBackButton />
    </div>
  );
};

export default UserDetail;

/* -------------------------------------------------------------------------- */
//* Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const userArr = [1, 2, 3, 4];
  return userArr.map((id) => ({ userId: id.toString() }));
}

/* -------------------------------------------------------------------------- */
//* dinamik sayfalar için meta-data oluşturma
export async function generateMetadata({ params: { userId } }) {
  return {
    title: `User-${userId}`,
    description: `This is the page of User-${userId}`,
  };
}
