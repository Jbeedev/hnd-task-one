import Logo from "../images/ingressive.png";

const Footer = () => {
  return (
    <div className="mt-7">
      <hr />
      <div className="flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:justify-between lg my-5">
        <p className=" font-bold ">
          Zuri<span className="text-red-500 text-xl ">.</span>Intership
        </p>
        <p className="text-gray-400">HNG Intership 9 frontend Task</p>
        <img className="w-[132px] h-8" src={Logo} alt="logo" />
      </div>
    </div>
  );
};

export default Footer;
