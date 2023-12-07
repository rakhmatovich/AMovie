import React from "react";
import { Link } from "react-router-dom";

export default function RoomsInfo() {
  return (
    <div>
      <section>
        <div className="text-center">
          <h1 className="font-PlayFairDisplay text-[30px] m-3 font-bold">
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
          <div className="w-[30%] overflow-hidden">
            <img
              className="w-full hover:scale-110 transition-all duration-300"
              src="/Rooms1.jpg"
              alt=""
            />
            <h1 className="font-PlayFairDisplay text-3xl text-center mt-5 font-medium">
              Одиночный Номер
            </h1>
            <Link
              to={"/About"}
              className="ml-32 text-[#ffba5a] hover:text-[#ffaa34] text-2xl"
            >
              $60/Hочь
            </Link>
          </div>
          <div className="w-[30%] overflow-hidden">
            <img
              className="w-full hover:scale-110 transition-all duration-300"
              src="/Rooms2.jpg"
              alt=""
            />
             <h1 className="font-PlayFairDisplay text-3xl text-center mt-5 font-medium">
             Двухместный Номер
            </h1>
            <Link
              to={"/About"}
              className="ml-32 text-[#ffba5a] hover:text-[#ffaa34] text-2xl"
            >
              $75/Hочь
            </Link>
          </div>
          <div className="w-[30%] overflow-hidden">
            <img
              className="w-full hover:scale-110 transition-all duration-300"
              src="/Rooms3.jpg"
              alt=""
            />
             <h1 className="font-PlayFairDisplay text-3xl text-center mt-5 font-medium">
           Президентский Номер
            </h1>
            <Link
              to={"/About"}
              className="ml-32 text-[#ffba5a] hover:text-[#ffaa34] text-2xl"
            >
              $120/Hочь
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
