import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";

const navbarItems = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Rooms", path: "/rooms" },
  { id: 3, title: "About", path: "/about" },
  { id: 4, title: "Events", path: "/events" },
  { id: 5, title: "Contact", path: "/contact" },
  { id: 6, title: "Reservation", path: "/reservation" },
];

function Navbar() {
  const [show, setShow] = useState(true);
  return (
    <div className="relative">
      <div className="fixed w-full z-50 top-0 left-0 bg-white text-black text-4xl px-10 py-4 font-PlayFair flex items-center justify-between">
        <h1 className="text-4xl">MACAN Hotel</h1>
        <div className="hidden md:flex items-center">
          {navbarItems.map((item) => (
            <Link
              to={item.path}
              key={item.id}
              className="text-[22px] px-4 font-normal hover:border-b border-gray-500 hover:pb-0 pb-[1px]"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
