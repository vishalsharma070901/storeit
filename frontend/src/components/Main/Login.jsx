import React from "react";
import { Label } from "@/components/ui/label";
import logo from "../../assets/images/logo.png";



const Login = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center lg:hidden mb-10 gap-3">
        <img src={logo} alt="" className="h-20" />
        <p className="text-4xl font-semibold text-gray-700">Store-It</p>
      </div>
      <div>
        <p className="text-4xl md:text-5xl font-bold text-gray-700">Login</p>
      </div>

      <form>
        <div className="grid w-full items-center gap-4 mt-8">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <input
              nsme="email"
              type="email"
              placeholder="Enter your email"
              className="outline-none shadow-md  py-2.5 px-2 rounded-xl focus:outline-[#56B8FF] focus:shadow-none"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <input
              name="name"
              type="password"
              placeholder="Enter Password"
              className="outline-none shadow-md py-2.5 px-2 rounded-xl focus:outline-[#56B8FF] focus:shadow-none"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 ">
            <button
              type="submit"
              className="bg-[#56B8FF] px-5 py-2 rounded-full hover:opacity-85"
            >
              Login
            </button>
          </div>
          <div className="flex w-full max-w-sm justify-center items-center gap-1.5 ">
            <p>Don't have an account ? </p>{" "}
            <a className="text-[#56B8FF]" href="/register">
              Login
            </a>
          </div>
        </div>
      </form>

      
    </div>
  );
};

export default Login;
