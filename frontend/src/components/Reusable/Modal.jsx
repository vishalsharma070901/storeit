"use client";
import React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from "@headlessui/react";
import OtpModal from "../Main/OtpModal";

const Modal = ({ open, setOpen, email ,otp , username }) => {
  return (
    <Dialog open={open} onClose={() => {}} className="">
      <DialogBackdrop
        transition
        className="fixed inset-0 backdrop-blur-sm transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className=" p-5 rounded-2xl overflow-hidden  bg-white text-left shadow-2xl border transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <OtpModal setOpen={setOpen} email={email} otp ={otp} username={username} />
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
