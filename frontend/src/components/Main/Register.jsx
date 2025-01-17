import React from "react";
import { Label } from "@/components/ui/label";
import logo from "../../assets/images/logo.png";

const Register = () => {
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

      <form>
        <div className="grid w-full items-center gap-4">
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
            <Label htmlFor="name">Name</Label>
            <input
              name="name"
              id="name"
              placeholder="Enter your name"
              className="outline-none shadow-md py-2.5 px-2 rounded-xl"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <input
              nsme="email"
              type="email"
              placeholder="Enter your email"
              className="outline-none shadow-md py-2.5 px-2 rounded-xl"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <input
              name="name"
              type="password"
              placeholder="Create Password"
              className="outline-none shadow-md py-2.5 px-2 rounded-xl"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 ">
            <button
              type="submit"
              className="bg-[#56B8FF] px-5 py-2 rounded-full hover:opacity-85 text-white"
            >
              Sign up
            </button>
          </div>
          <div className="flex w-full max-w-sm justify-center items-center gap-1.5 ">
            <p>Already have an account ? </p>{" "}
            <a className="text-[#56B8FF]" href="/login">
              Login
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
