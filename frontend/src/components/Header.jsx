import React from "react";
import { FaStar } from "react-icons/fa";

export default function Header() {
  return (
    <div className="w-full h-screen bg-center bg-cover bg-[url('https://themewagon.github.io/sogo/images/hero_4.jpg')]">
      <div className="w-full h-full bg-black/50 flex items-center justify-center flex-col text-center text-white">
        <p className="flex items-center gap-2 tracking-widest">WELCOME TO 5 <FaStar color="rgb(253, 224, 71)"/> HOTEL</p>
        <h1 className="text-[80px] font-bold">A Best Place To Stay</h1>
      </div>
    </div>
  );
}