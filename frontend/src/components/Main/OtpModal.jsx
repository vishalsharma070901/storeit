import React, { useRef } from "react";

const OtpModal = ({ email, setOpen }) => {
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
      // Clear the current input first
      e.target.value = "";

      // Focus on the previous input if it's not the first one
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const otp = inputRefs.current.map((input) => input.value).join("");
    console.log("OTP:", otp);
    // Perform your OTP submission logic here
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold text-gray-700">Enter the OTP</h2>
        <p className="text-sm font-me text-gray-400">
          We have sent a code to your email {email}
        </p>
      </div>
      
        {" "}
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
              onClick={() => setOpen(false)}
              type="submit"
              className="bg-[#56B8FF] w-full rounded-full py-2.5 px-2"
            >
              Verify Account
            </button>
          </div>
        </form>
        <div class="text-sm text-slate-500">
          Didn't receive code?{" "}
          <a
            class="font-medium text-[#56B8FF]"
            href="#0"
          >
            Resend
          </a>
        </div>
     
    </div>
  );
};

export default OtpModal;
