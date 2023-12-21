import React from "react";

export default function Header({title, heading }) {
  return (
    <div className="w-full h-screen bg-center bg-cover bg-[url('https://themewagon.github.io/sogo/images/hero_4.jpg')]">
      <div className="w-full h-full bg-black/50 flex items-center justify-center flex-col text-center text-white">
        <p className="tracking-widest">{heading}</p>
        <h1 className="text-[80px] font-bold font-PlayFairDisplay">{title}</h1>
      </div>
    </div>
  );
}
