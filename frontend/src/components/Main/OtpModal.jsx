import React, { useRef, useContext, useState ,} from "react";
import axios from "axios";
import myContext from "@/Context/MyContext";
import { useNavigate } from "react-router-dom";


const OtpModal = ({ email, username, setOpen, open }) => {
  const navigate = useNavigate();
  const context = useContext(myContext);
  const { setOtp, otp , formData} = context;
  const [loading, setLoading] = useState(false);
  console.log(otp);
  const inputRefs = useRef([]);

  const handleKeyDown = (e, index) => {
    if (
      !/^[0-9]{1}$/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "Tab"
    ) {
      e.preventDefault();
    }

    if (e.key === "Delete" || e.key === "Backspace") {
      e.target.value = "";
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleInput = (e, index) => {
    if (e.target.value) {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    if (!new RegExp(`^[0-9]{${inputRefs.current.length}}$`).test(text)) {
      return;
    }
    const digits = text.split("");
    digits.forEach((digit, index) => {
      if (index < inputRefs.current.length) {
        inputRefs.current[index].value = digit;
      }
    });
    inputRefs.current[inputRefs.current.length - 1].focus();
  };

  const registerUser = async () => {  
    try { 
      const respose = await axios.post( 
        "http://localhost:8000/api/auth/register",  
        { 
         username: formData.name,
         email: formData.email,
        password: formData.password,
        }     
      );
      console.log(respose.data);
      console.log(respose.data);
    } catch (error) { 

      console.log(error); 
    } 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      const OTP = inputRefs.current.map((input) => input.value).join("");
      let num = Number(OTP);
      if (num === otp) {
        console.log("correect opt");
        registerUser();
        navigate("/dashboard")
      }
      else {
        setOpen(true);
      }
  };


  const handleOtp = async () => {
    try {
      inputRefs.current.forEach((input) => {
        input.value = "";
      });

      if (email != "") {
        console.log("otp resend");

        const respose = await axios.post(
          "http://localhost:8000/api/auth/otp-verification",
          {
            username: username,
            email: email,
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
 
        <div className="flex flex-col items-center justify-center gap-4">
          <div
            className="flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-gray-700">Enter the OTP</h2>
            <p className="text-sm font-me text-gray-400">
              We have sent a code to your email {email}
            </p>
          </div>{" "}
          <form id="otp-form" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center gap-3">
              {Array.from({ length: 4 }).map((_, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  className="w-14 h-14 text-center text-2xl font-extrabold text-[#56B8FF] bg-slate-100 border border-transparent focus:outline-[#56B8FF] rounded-xl"
                  onInput={(e) => handleInput(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onFocus={handleFocus}
                  onPaste={handlePaste}
                />
              ))}
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="bg-[#56B8FF] w-full rounded-full py-2.5 px-2"
              >
                Verify Account
              </button>
            </div>
          </form>
          <div class="text-sm text-slate-500">
            Didn't receive code?{" "}
            <a class="font-medium text-[#56B8FF]" href="#0" onClick={handleOtp}>
              Resend
            </a>
          </div>
          <div
            className="text-gray-900 hover:text-gray-400 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Cancel registration
          </div>
        </div>  
  );
};

export default OtpModal;
