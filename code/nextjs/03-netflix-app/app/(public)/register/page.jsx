import GoogleIcon from "@/public/icons/GoogleIcon";
import React from "react";

const Register = () => {
  return (
    <div className="relative h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover ">
      <div className="bg-black w-full h-full bg-opacity-50">
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center relative top-28  w-full lg:w-2/5 lg:max-w-md rounded-md">
            <form>
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
                />
                <label htmlFor="password">Password</label>
              </div>
              <button className="btn-danger">Register</button>
              <button className="btn-danger flex justify-between items-center ">
                Continue with Google <GoogleIcon />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
