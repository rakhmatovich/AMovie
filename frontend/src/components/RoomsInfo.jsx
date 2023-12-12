import React from "react";
import { Link } from "react-router-dom";

export default function RoomsInfo() {
  const roomsInfo = [
    {
      id: 1,
      url: "/Rooms1.jpg",
      name: "Одиночный Номер",
      price: "60",
    },
    {
      id: 2,
      url: "/Rooms2.jpg",
      name: "Двухместный Номер",
      price: "75",
    },
    {
      id: 3,
      url: "Rooms3.jpg",
      name: "Президентский Номер",
      price: "120",
    },
  ];

  return (
    <div>
      <section>
        <div className="text-center">
          <h1 className="font-PlayFairDisplay text-[30px] m-3 font-medium">
            Комнаты и Апартаменты
          </h1>
          <div className="font-sans w-[50%] mx-auto text-gray-500">
            В MACAN Terrace Hotel в номерах есть телевизор с плоским экраном,
            письменный стол и собственная ванная комната, а также
            предоставляются постельное белье и полотенца. Во всех номерах в
            MACAN Terrace Hotel есть платяной шкаф, а также установлен
            кондиционер.
          </div>
        </div>
        <div className="flex justify-between w-[80%] mx-auto gap-10 mt-10 ">
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
