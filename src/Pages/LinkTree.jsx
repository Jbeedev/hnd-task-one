import React from "react";
import ProfileImg from "../images/about-image.jpg";
import { BsGithub } from "react-icons/bs";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const LinkTree = () => {
  return (
    <div className=" bg-white py-6 px-4 lg:px-[144px] ">
      <div className=" ">
        <div className=" my-5 space-y-3 flex justify-center flex-col items-center ">
          <img
            className=" h-16 w-16 object-cover  rounded-full "
            src={ProfileImg}
            alt="Profile"
            id="profile_img"
          />
          <h3 id="jaybee" className=" text-xl font-bold">Ajibade Ajibola</h3>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
           to="https://twitter.com/AjibolaAjibade4"
            id="twitter"
            className=" text-center bg-gray-200 text-lg font-medium text-black rounded-md py-6 "
            type="a"
          >
            Twitter Link
          </Link>

          <Link
            id="btn_zuri"
           to="https://training.zuri.team/"
            className=" text-center bg-gray-200 text-lg font-medium text-black rounded-md py-6 "
            type="a"
          >
            Zuri Team
          </Link>

          <Link
            id="books"
           to="https://books.zuri.team/"
            className=" text-center bg-gray-200 text-lg font-medium text-black rounded-md py-6 "
            type="a"
          >
            Zuri Books
          </Link>

          <Link
            id="book_python"
           to="https://books.zuri.team/"
            className=" text-center bg-gray-200 text-lg font-medium text-black rounded-md py-6 "
            type="a"
          >
            Python Books
          </Link>

          <Link
            id="pitch"
           to="https://background.zuri.team/"
            className=" text-center bg-gray-200 text-lg font-medium text-black rounded-md py-6 "
            type="a"
          >
            Background Check for Coders
          </Link>

          <Link
            id="book_design"
           to="https://books.zuri.team/design-rules"
            className=" text-center bg-gray-200 text-lg font-medium text-black rounded-md py-6 "
            type="a"
          >
            Design Books
          </Link>
          <Link
            id="contact"
            to="/contact"
            className=" text-center bg-gray-200 text-lg font-medium text-black rounded-md py-6 "
            type="a"
          >
            Contact me
          </Link>
        </div>
      </div>
      <div className="flex space-x-5 items-center justify-center mt-7 ">
        <svg
          width="24"
          height="24"
          viewBox="0 0 112 112"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_979_1726)">
            <path
              d="M23.5555 70.5776C23.5555 77.0666 18.3112 82.3114 11.8222 82.3114C5.33318 82.3114 0.0888672 77.0666 0.0888672 70.5776C0.0888672 64.089 5.33318 58.8447 11.8226 58.8447H23.5551V70.578L23.5555 70.5776ZM29.4224 70.5776C29.4224 64.089 34.6667 58.8447 41.1557 58.8447C47.6447 58.8447 52.889 64.089 52.889 70.578V99.9111C52.889 106.4 47.6447 111.645 41.1552 111.645C34.6671 111.645 29.4224 106.4 29.4224 99.9111V70.578V70.5776Z"
              fill="#E01E5A"
            />
            <path
              d="M41.1556 23.4666C34.6666 23.4666 29.4219 18.2223 29.4219 11.7333C29.4219 5.24431 34.6671 0 41.1556 0C47.6442 0 52.8889 5.24431 52.8889 11.7333V23.4671H41.1552L41.1556 23.4666ZM41.1556 29.4223C47.6446 29.4223 52.8889 34.6666 52.8889 41.1556C52.8889 47.6446 47.6446 52.8889 41.1552 52.8889H11.7337C5.24431 52.8889 0 47.6446 0 41.1552C0 34.6671 5.24431 29.4223 11.7333 29.4223H41.1552H41.1556Z"
              fill="#36C5F0"
            />
            <path
              d="M88.1782 41.1556C88.1782 34.6666 93.4225 29.4219 99.9111 29.4219C106.4 29.4219 111.645 34.6666 111.645 41.1556C111.645 47.6446 106.4 52.8889 99.9111 52.8889H88.1782V41.1552V41.1556ZM82.3114 41.1556C82.3114 47.6446 77.0666 52.8889 70.5776 52.8889C64.089 52.8889 58.8447 47.6446 58.8447 41.1552V11.7337C58.8447 5.24431 64.089 0 70.5776 0C77.0662 0 82.3109 5.24431 82.3109 11.7333V41.1552L82.3114 41.1556Z"
              fill="#2EB67D"
            />
            <path
              d="M70.5776 88.1782C77.0666 88.1782 82.3113 93.4225 82.3113 99.9111C82.3113 106.4 77.0666 111.645 70.5776 111.645C64.089 111.645 58.8447 106.4 58.8447 99.9111V88.1782H70.578H70.5776ZM70.5776 82.3114C64.089 82.3114 58.8447 77.0666 58.8447 70.5776C58.8447 64.089 64.089 58.8447 70.578 58.8447H99.9999C106.489 58.8447 111.734 64.089 111.734 70.578C111.734 77.0666 106.489 82.3114 99.9999 82.3114H70.578H70.5776Z"
              fill="#ECB22E"
            />
          </g>
          <defs>
            <clipPath id="clip0_979_1726">
              <rect width="112" height="112" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <div>
          <BsGithub />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LinkTree;
