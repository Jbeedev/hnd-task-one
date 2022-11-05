import React from "react";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="  bg-white ">
      <div className=" lg:mx-[360px] bg-white ">
        <div className="mt-16 mb-[38px]">
          <h1 className="font-semibold text-4xl mb-4 ">Contact Me</h1>
          <p className="text-lg text-gray-700">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </div>
        <form action="" className="w-full mt-7 flex gap-2 flex-col">
          <div className="lg:flex lg:gap-6 lg:flex-wrap">
            <div className="flex-grow flex flex-col space-y-2">
              <label htmlFor="" id="first_name" className="font-medium text-[14px]">
                First name
              </label>
              <input
                className="border py-[10px] rounded-lg px-[14px]"
                type="text"
                placeholder="Enter your first name"
              />
            </div>
            <div className="flex-grow flex flex-col space-y-2">
              <label htmlFor="" id="last_name" className="font-medium text-[14px]">
                Last name
              </label>
              <input
                className="border py-[10px] rounded-lg px-[14px]"
                type="text"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="flex lg:basis-[100%] flex-col space-y-2">
            <label htmlFor="" id="email" className="font-medium text-[14px]">
              Email
            </label>
            <input
              className="border py-[10px] rounded-lg px-[14px] "
              type="text"
              placeholder="yourname@email.com"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="font-medium text-[14px]">
              Message
            </label>
            <textarea
              className="border py-[10px] rounded-lg px-[14px]  "
              name=""
              id="message"
              cols="20"
              rows="5"
            ></textarea>
          </div>
          <div className="flex gap-4 items-center ">
            <input
              type="checkbox"
              placeholder="Enter your first name"
              className="block h-5 w-5 rounded-xl"
            />{" "}
            <p className="p-0 m-0">
              You agree to providing your data to{" "}
              <span className="font-semibold">Ajibade Ajibola </span>who may
              contact you
            </p>
          </div>
        </form>
        <button id="btn_summit" className="bg-blue-600 w-full py-3 mt-8 rounded-lg px-5 text-white">
          Send message
        </button>
      </div>
      <div className="px-4 lg:px-[144px]">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
