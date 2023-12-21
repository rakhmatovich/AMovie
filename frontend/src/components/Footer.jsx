import {
  FaFacebookF,
  FaTwitter,
  FaTripadvisor,
  FaTelegram,
} from "react-icons/fa";
import { PiLinkedinLogoFill } from "react-icons/pi";
import { FaVimeoV, FaPhone, FaTelegramPlane } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <footer className="text-white p-10 bg-gray-950">
      <div className="flex justify-evenly py-16">
        <div className="w-[20%] leading-10">
          <ul>
            <li className="text-gray-400 hover:text-white transform hover:scale-80 transition-all duration-150 ease-in-out gap-10 ">
              About Us
            </li>
            <li className="text-gray-400 hover:text-white transform hover:scale-80 transition-all duration-150 ease-in-out ">
              Terms & Conditions{" "}
            </li>
            <li className="text-gray-400 hover:text-white transform hover:scale-80 transition-all duration-150 ease-in-out ">
              Privacy Policy
            </li>
            <li className="text-gray-400 hover:text-white transform hover:scale-80 transition-all duration-150 ease-in-out ">
              Rooms
            </li>
          </ul>
        </div>

        <div className="w-[20%] leading-10">
          <ul>
            <li className="text-gray-400 hover:text-white transform hover:scale-80 transition-all duration-150 ease-in-out ">
              The Rooms & Suites
            </li>
            <li className="text-gray-400 hover:text-white transform hover:scale-80 transition-all duration-150 ease-in-out ">
              About Us
            </li>
            <li className="text-gray-400 hover:text-white transform hover:scale-80 transition-all duration-150 ease-in-out ">
              Contact Us
            </li>
            <li className="text-gray-400 hover:text-white transform hover:scale-80 transition-all duration-150 ease-in-out ">
              Restarant
            </li>
          </ul>
        </div>
        <div>
          <div className="">
            <div className="flex items-center gap-2">
              <IoLocationSharp />
              <span>address:</span>
            </div>
            <h1 className="text-gray-400 content-between  ">
              198 West 21th Street, <br />
              Suite 721 New York NY 10016
            </h1>
          </div>
          <div>
            <div className="flex items-center gap-2 mt-8">
              <FaPhone />
              <span>Phone:</span>
            </div>
            <h1 className="text-gray-400 ">(88)-301-32-13</h1>
          </div>
          <div>
            <div className="flex items-center gap-2 mt-6">
              <MdOutlineMail />
              <span>Email:</span>
            </div>
            <h1 className="text-gray-400 ">macan@gmail.com</h1>
          </div>
        </div>
        <div>
          <span>Sign up for our newsletter</span>
          <div className="border-0 flex gap-3 px-3 border-b-2 border-gray-700 my-4">
            <input
              type="Email..."
              className="bg-transparent outline-none border-none"
              placeholder="Email..."
            />
            <FaTelegramPlane />
          </div>
        </div>
      </div>

      <div className="flex space-x-4 justify-center gap-5 ">
        <a
          className="text-gray-400 hover:text-white transform hover:scale-80 transition-all duration-150 ease-in-out left-36 "
          href=""
        >
          <FaTripadvisor size={25} />
        </a>
        <a
          className="text-gray-400 hover:text-white transform hover:scale-80  transition-all duration-150 ease-in-out"
          href=""
        >
          <FaFacebookF size={25} />
        </a>
        <a
          className="text-gray-400 hover:text-white transform hover:scale-80 transition-all duration-150 ease-in-out"
          href=""
        >
          <FaTwitter size={25} />
        </a>
        <a
          className="text-gray-400 hover:text-white transform hover:scale-80 transition-all duration-150 ease-in-out"
          href=""
        >
          <PiLinkedinLogoFill size={25} />
        </a>
        <a
          className="text-gray-400 hover:text-white transform hover:scale-80 transition-all duration-150 ease-in-out"
          href=""
        >
          <FaVimeoV size={25} />
        </a>
      </div>
      <h6 className="text-center">&copy; Copyright Dev Eva {Year}</h6>
    </footer>
  );
};
export default Footer;
