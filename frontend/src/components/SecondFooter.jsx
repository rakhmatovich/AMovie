import React from "react";
import { Link } from "react-router-dom";

export default function SecondFooter() {
  return (
    <div className='h-72 w-full bg-fixed bg-center bg-[url("/SecondFooter.jpg")]'>
      <div className="flex items-center justify-center  w-full h-full bg-black/50">
        <div className="flex justify-between w-[80%] mx-auto items-center">
          <h1 className="font-PlayFair text-white text-3xl">Лучшее место для отдыха.Бронируйте сейчас!</h1>
          <Link to={'/'} className="text-white justify-around text-2xl rounded-full py-2 px-5 hover:bg-[#ffaa34] transition-colors duration-300 border-2 border-white hover:border-[#ffaa34]">Бронировать</Link>
        </div>
      </div>
    </div>
  );
}

