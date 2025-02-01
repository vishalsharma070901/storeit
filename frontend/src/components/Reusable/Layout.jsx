import React from "react";
import logo from "../../assets/images/logo.png";
import image from "../../assets/images/files.png";
import Register from "../Main/Register";
import Login from "../Main/Login";


const Layout = ({children}) => {
  
  return (
    <>
      <div className="flex min-h-screen font-popins ">
        <section className="bg-[#56B8FF] lg:w-[35%] hidden lg:flex flex-col justify-center items-center gap-10">
          <div className="flex items-center w-[70%] mx-auto gap-3 ">
            <img src={logo} alt="" className="h-16 w-16" />
            <p className="text-2xl font-semibold text-gray-100">Store-It</p>
          </div>

          <div className="w-[70%] space-y-5 ">
            <h1 className="text-4xl font-bold text-stone-50">
              Best Place to manage your files
            </h1>
            <p className=" text-stone-50">
              {" "}
              Awesome, we've created the perfect place for you to store all your
              documents.
            </p>
          </div>
          <div className="flex justify-center ">
            <img src={image} alt="" className="h-60" />
          </div>
        </section>
        <section className="flex items-center justify-center flex-1 flex-col">
         {children}
        </section>
      </div>
    </>
  );
};

export default Layout;
