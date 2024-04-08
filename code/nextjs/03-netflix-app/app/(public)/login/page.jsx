"use client";
import useAuthCalls from "@/hooks/useAuthCalls";
import GoogleIcon from "@/public/icons/GoogleIcon";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const { signIn, signUpProvider, forgotPassword } = useAuthCalls();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  //   console.log(info);
  const { email, password } = info;
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password);
  };

  return (
    <div className="relative h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover ">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center relative top-28  w-full lg:w-2/5 lg:max-w-md rounded-md">
            <form onSubmit={handleSubmit}>
              <h2 className="text-red-main text-2xl font-[500] text-center mb-3 tracking-[0.1em] ">
                Sign In
              </h2>
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
              <div className="flex justify-between">
                <span
                  onClick={() => forgotPassword(email)}
                  className="py-3 font-[0.75em] cursor-pointer text-gray-500 hover:text-red-main "
                >
                  Forgot Password
                </span>
                <Link
                  href="/register"
                  className="py-3 font-[0.75em] cursor-pointer text-gray-500 hover:text-red-main "
                >
                  Sign Up
                </Link>
              </div>
              <button className="btn-danger">Login</button>
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

export default Login;
