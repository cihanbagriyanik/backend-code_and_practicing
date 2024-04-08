"use client";
import useAuthCalls from "@/hooks/useAuthCalls";
import GoogleIcon from "@/public/icons/GoogleIcon";
import React, { useState } from "react";

const Register = () => {
  const [info, setInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const { createUser, signUpProvider } = useAuthCalls();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  //   console.log(info);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, first_name, last_name } = info;
    const displayName = `${first_name} ${last_name}`;
    createUser(email, password, displayName);
  };

  return (
    <div className="relative h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover ">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center relative top-28  w-full lg:w-2/5 lg:max-w-md rounded-md">
            <form onSubmit={handleSubmit}>
              <h2 className="text-red-main text-2xl font-[500] text-center mb-3 tracking-[0.1em] ">
                Sign Up
              </h2>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="first_name"
                  required
                  placeholder=" "
                  className="peer"
                  onChange={handleChange}
                />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="last_name"
                  required
                  placeholder=" "
                  className="peer"
                  onChange={handleChange}
                />
                <label htmlFor="last_name">Last Name</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder=" "
                  className="peer"
                  onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="password"
                  name="password"
                  required
                  placeholder=" "
                  className="peer"
                  onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
              </div>
              <button className="btn-danger">Register</button>
              <button
                onClick={() => signUpProvider()}
                className="btn-danger flex justify-between items-center"
                type="button"
              >
                Continue with Google
                <GoogleIcon />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
