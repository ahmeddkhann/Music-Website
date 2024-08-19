import React from 'react';
import { Meteors } from '../components/ui/meteors';

const Contact = () => {
  return (
    <div className="h-[100vh] relative" >
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-2 w-2 text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </div>
        <div className="text-white mt-[25vh] lg:ml-[35vw]">
          <h1 className="text-4xl font-bold mb-4 text-center justify-center ">Contact Us</h1>
          <form className="space-y-4">
            <div className='ml-30'>
              <label className="block mb-2">Enter your Email</label>
              <input
                type="email"
                placeholder="your email..."
                className=" p-2 w-[30vw] h-[10vh] rounded border border-gray-600 bg-gray-800 text-white"
              />
            </div>
            <div className='ml-30'>
              <label className="block mb-2">Add a description</label>
              <textarea
                placeholder="Tell us more about yourself..."
                className="w-full p-3 rounded border border-gray-600 bg-gray-800 text-white"
                rows={4}
              />
            </div>
            <button className="bg-white p-2 rounded-2xl text-gray-900 font-bold">
              Submit
            </button>
          </form>
        </div>

        {/* Meteor effect */}
        <Meteors number={100} />
      </div>
    </div>
  );
};

export default Contact;
