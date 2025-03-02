import React, { useState, useContext } from "react";
import { Label } from "@/components/ui/label";
import logo from "../../assets/images/logo.png";
import myContext from "@/Context/MyContext";
import Modal from "../Reusable/Modal";
import axios from "axios";



const Register = () => {
  const context = useContext(myContext);
  const { setOtp, otp, formData, setFormData } = context;

  const [open, setOpen] = useState(false);


  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      if (formData.email != "") {
        setOpen(true);
        const respose = await axios.post(
          "http://localhost:8000/api/auth/otp-verification",
          {
            username: formData.name,
            email: formData.email,
          }
        );
        setOtp(respose.data.otp);
       
      } else {
        console.log("Please enter the email");
      }
    } catch (error) {
      console.log(error);
    }
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
            <Label htmlFor="name">User Name</Label>
            <input
              onChange={handleChange}
              value={formData.name}
              name="name"
              id="name"
              placeholder="Enter your name"
              className="outline-none shadow-md py-2.5 px-2 rounded-xl focus:outline-[#56B8FF] focus:shadow-none"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <input
              onChange={handleChange}
              value={formData.email}
              name="email"
              type="email"
              placeholder="Enter your email"
              className="outline-none shadow-md py-2.5 px-2 rounded-xl focus:outline-[#56B8FF] focus:shadow-none"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <input
              onChange={handleChange}
              value={formData.password}
              name="password"
              type="password"
              placeholder="Create Password"
              className="outline-none shadow-md py-2.5 px-2 rounded-xl focus:outline-[#56B8FF] focus:shadow-none"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <button
              onClick={(e) => {
                handleFormSubmit(e);
              }}
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
      <div>
        <Modal open={open} setOpen={setOpen} email={formData.email} otp={otp} username={formData.name} />
      </div>
    </div>
  );
};

export default Register;
