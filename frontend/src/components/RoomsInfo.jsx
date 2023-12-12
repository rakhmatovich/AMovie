import React from "react";
import { Link } from "react-router-dom";

export default function RoomsInfo({roomsInfo, roomsHeading}) {
  return (
    <div>
      <section className="py-20">
        {roomsHeading}
        <div className="flex justify-between w-[80%] mx-auto gap-10 mt-10 flex-wrap">
          {roomsInfo.map((room) => (
            <div key={room.id} className="w-[30%] overflow-hidden">
              <img
                className="w-full hover:scale-110 transition-all duration-300"
                src={room.url}
                alt=""
              />
              <h1 className="font-PlayFairDisplay text-3xl text-center mt-5 font-medium">
                {room.name}
              </h1>
              <Link
                to={"/About"}
                className="ml-32 text-[#ffba5a] hover:text-[#ffaa34] text-xl"
              >
                ${room.price}/Hочь
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
