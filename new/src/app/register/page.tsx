"use client";
import React from "react";
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "../lib/utils";

const Register = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-10">
        <Boxes />
      </div>
      
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20 mt-[15vh] mb-6")}>
        Register Yourself Now!
      </h1>
      
      <form className="text-center mt-4 text-neutral-300 relative z-20 space-y-6 w-full max-w-4xl px-6">
        {/* Grid layout for all inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* First row */}
          <div className="flex flex-col space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input 
                type="text" 
                placeholder="Your name..." 
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Father's Name</label>
              <input 
                type="text" 
                placeholder="Your father's name..." 
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Mobile No</label>
              <input 
                type="number" 
                placeholder="Your mobile number..." 
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input 
                type="email" 
                placeholder="Your email address..." 
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
            </div>
          </div>
        </div>

        {/* Additional fields in the same row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
            
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input 
              type="password" 
              placeholder="Create a password..." 
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Why do you want to join us?</label>
            <textarea 
              placeholder="Tell us more about your interest..." 
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
        </div>

        <button 
          type="submit"
          className="w-full py-3 mt-4 rounded-lg bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-colors"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
