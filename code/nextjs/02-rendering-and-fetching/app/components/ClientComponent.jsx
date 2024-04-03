"use client";
import React from "react";
import ServerComponent from "./ServerComponent";

const ClientComponent = ({ children }) => {
  console.log("i am client component");
  return (
    <div>
      {/* <ServerComponent /> */}
      {children}
      <h1>ClientComponent</h1>

      <button className="border w-12" onClick={() => alert("client")}>
        Alert
      </button>
    </div>
  );
};

export default ClientComponent;
