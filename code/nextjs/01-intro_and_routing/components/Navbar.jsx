import React from "react";
// import logo from "/public/clarusway-logo.png";

const navigation = [
  {
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];
const Navbar = () => {
  return (
    <nav className="bg-navbarColor text-sm px-4 flex justify-between">
      <div className="flex items-center">
        <div className="flex items-center py-5 mr-5">
          <a href="/">
            <img
              src="/clarusway-logo.png"
              width="150px"
              height="150px"
              alt=""
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
