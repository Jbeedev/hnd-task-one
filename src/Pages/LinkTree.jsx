import React from "react";
import ProfileImg from "../images/about-image4.jpg";

const LinkTree = () => {
  return (
    <div className=" bg-white py-6 px-2 lg:px-20 ">
      <div className=" ">
        <div className=" my-5 space-y-3 flex justify-center flex-col items-center ">
          <img
            className=" h-16 w-16 object-cover  rounded-full "
            src={ProfileImg}
            alt="Profile"
            id="profile_img"
          />
          <h3>Ajibade Ajibola</h3>
        </div>
        <div className="flex flex-col space-y-4">
          <button
            className=" bg-gray-100 text-black font-light rounded-md py-3 "
            type="button"
            
          >
            Twitter Link
          </button>
          <button
            className=" bg-gray-100 text-black font-light rounded-md py-3 "
            type="button"
          >
            Zuri Team
          </button>
          <button
            className=" bg-gray-100 text-black font-light rounded-md py-3 "
            type="button"
          >
            Zuri Books
          </button>
          <button
            className=" bg-gray-100 text-black font-light rounded-md py-3 "
            type="button"
          >
            Python Books
          </button>
          <button
            className=" bg-gray-100 text-black font-light rounded-md py-3 "
            type="button"
          >
            Background Check for Coders
          </button>
          <button
            className=" bg-gray-100 text-black font-light rounded-md py-3 "
            type="button"
          >
            Design Books
          </button>
        </div>
      </div>
      <div className="flex space-x-5 justify-center my-7 ">
        <img
          className=" h-6 w-6 object-cover  rounded-full "
          src={ProfileImg}
          alt="Profile"
        />
        <img
          className=" h-6 w-6 object-cover  rounded-full "
          src={ProfileImg}
          alt="Profile"
        />
      </div>
      <hr />
      <div className="flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:justify-between lg my-5">
        <p>Zuri.Intership</p>
        <p>HNG Intership 9 frontend Task</p>
        <p>INGRESSIVE</p>
      </div>
    </div>
  );
};

export default LinkTree;
