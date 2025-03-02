import React from "react";

const RenameModal = ({ fileName , setOpen }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full py-2">
      <div
        className="flex flex-col items-center w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold text-gray-700 text-center">
          Do you want to rename
        </h2>
        <p className="text-sm font-medium text-gray-400 text-center">
          {fileName}
        </p>
      </div>
      <form id="otp-form" className="w-full">
        <div className="flex items-center justify-center gap-3 w-full">
          <input
            type="text"
            placeholder="Enter new name"
            className="w-full outline-none  py-1.5 px-3 rounded-full outline-[#56B8FF] focus:shadow-none"
          />
        </div>
        <div className="mt-4 w-full">
          <button
            type="submit"
            className="bg-[#56B8FF] w-full rounded-full py-2 text-white"
          >
            Rename
          </button>
        </div>
      </form>
      <div className="text-sm text-slate-500">
        <a 
        onClick={()=> setOpen(false)}
        className="font-medium text-[#56B8FF]" href="#0">
          Cancle
        </a>
      </div>
    </div>
  );
};

export default RenameModal;
