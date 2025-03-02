import React from "react";

const DeleteModal = ({ fileName, setOpen }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full py-2">
      <div
        className="flex flex-col items-center w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold text-gray-700 text-center">
          Are you sure you want to delete
        </h2>
        <p className="text-sm font-medium text-gray-400 text-center">
          {fileName}?
        </p>
      </div>
      <div className="w-full flex flex-col gap-3">
        <button
          onClick={() => {
            // Handle delete logic here
            
            setOpen(false);
          }}
          className="bg-red-500 w-full rounded-full py-2 text-white"
        >
          Delete
        </button>
        <button
          onClick={() => setOpen(false)}
          className="bg-gray-300 w-full rounded-full py-2 text-gray-700"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
