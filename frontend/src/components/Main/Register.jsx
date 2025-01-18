import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import logo from "../../assets/images/logo.png";

import Modal from "./Modal";

const Register = () => {
 
  const [open, setOpen] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted");
  };

  return (
    <div>
      <div className="flex justify-center items-center lg:hidden mb-10">
        <img src={logo} alt="" className="h-20" />
        <p className="text-5xl font-semibold text-gray-700">Store-It</p>
      </div>
      <div>
        <p className="text-4xl md:text-5xl font-bold text-gray-700">
          Create Account
        </p>
      </div>

      <form onSubmit={handleFormSubmit}>
        <div className="grid w-full items-center gap-4">
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
            <Label htmlFor="name">Name</Label>
            <input
              name="name"
              id="name"
              placeholder="Enter your name"
              className="outline-none shadow-md py-2.5 px-2 rounded-xl focus:outline-[#56B8FF] focus:shadow-none"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="outline-none shadow-md py-2.5 px-2 rounded-xl focus:outline-[#56B8FF] focus:shadow-none"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <input
              name="password"
              type="password"
              placeholder="Create Password"
              className="outline-none shadow-md py-2.5 px-2 rounded-xl focus:outline-[#56B8FF] focus:shadow-none"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
           
              <button
                onClick={()=>setOpen(true)}
                type="button" // Important: Use type="button" to avoid triggering form submit
                className="bg-[#56B8FF] px-5 py-2 rounded-full hover:opacity-85 text-white"
              >
                Sign up
              </button>
           
          </div>
          <div className="flex w-full max-w-sm justify-center items-center gap-1.5 ">
            <p>Already have an account?</p>{" "}
            <a className="text-[#56B8FF]" href="/login">
              Login
            </a>
          </div>
        </div>
      </form>
      <div >
        <Modal open={open} setOpen={setOpen} email={"vishal.sharma@gmail.com"}/>
      </div>
    </div>
  );
};

export default Register;
