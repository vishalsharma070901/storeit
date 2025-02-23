import React, { useState, useContext } from "react";
import { Label } from "@/components/ui/label";
import logo from "../../assets/images/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import myContext from "@/Context/MyContext";





const Login = () => {
  const context  =  useContext(myContext);
  const {setTokenInLocalStorage, getUserDetails} = context;
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => { 
    try {
      e.preventDefault();
      const response = await axios.post("http://localhost:8000/api/auth/login", {
        email: userData.email,
        password: userData.password,
      });
  
      if(response.status === 201){
        setTokenInLocalStorage(response.data.token);
        console.log(response.data);
    
        navigate("/dashboard");
      }

    } catch (error) {
      console.log(error);
    }
   
  };
     

  return (
    <div className="">
      <div className="flex justify-center items-center lg:hidden mb-10 gap-3">
        <img src={logo} alt="" className="h-20" />
        <p className="text-4xl font-semibold text-gray-700">Store-It</p>
      </div>
      <div>
        <p className="text-4xl md:text-5xl font-bold text-gray-700">Login</p>
      </div>

      <form onSubmit={handleFormSubmit}>
        <div className="grid w-full items-center gap-4 mt-8">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <input
              value={userData.email}
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Enter your email"
              className="outline-none shadow-md  py-2.5 px-2 rounded-xl focus:outline-[#56B8FF] focus:shadow-none"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <input
              value={userData.password}
              onChange={handleChange}
              name="password"
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
              Register
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
