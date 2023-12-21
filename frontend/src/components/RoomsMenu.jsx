import React, { useEffect } from "react";

export default function RoomsMenu() {
  return (
    <div className="py-20 flex flex-col items-center gap-10 justify-center bg-[#f2f4fb]" >
      <div className="text-center">
        <h1 className="font-PlayFairDisplay text-[30px] m-3 font-medium">
          Выгодные предложения
        </h1>
        <div className="font-sans w-[50%] mx-auto text-gray-500">
          В MACAN Terrace Hotel в номерах есть телевизор с плоским экраном,
          письменный стол и собственная ванная комната, а также предоставляются
          постельное белье и полотенца. Во всех номерах в MACAN Terrace Hotel
          есть платяной шкаф, а также установлен кондиционер.
        </div>
      </div>
      <div className="flex flex-wrap bg-white w-[80%]">
        <div className="w-[50%]">
          <img src="/Rooms1.jpg" alt="" />
        </div>
        <div className="w-[50%] mt-10">
          <div className="flex justify-start gap-2">
            <h1 className="text-7xl text-[#ffba5a] font-Price mb-4 ml-7">
              $ 69
            </h1>
            <h2 className="text-gray-500 font-sans text-2xl mt-8">
              / ночь
            </h2>
          </div>
          <div className="mt-12">
            <h1 className="font-PlayFair text-3xl mb-4 ml-7">Семейный Номер</h1>
            <p className="ml-7 flex">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium rem dignissimos voluptatum! Fuga sit maxime
              necessitatibus amet eligendi ut voluptatibus!
            </p>
          </div>
        </div>
        <div className="w-[50%] mt-10">
          <div className="flex justify-start gap-2">
            <h1 className="text-7xl text-[#ffba5a] font-Price mb-4 ml-7">
              $ 119
            </h1>
            <h2 className="text-gray-500 font-sans text-2xl mt-8">
              / ночь
            </h2>
          </div>
          <div className="mt-12">
            <h1 className="font-PlayFair text-3xl mb-4 ml-7">
             Президентский Номер
            </h1>
            <p className="ml-7 flex">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium rem dignissimos voluptatum! Fuga sit maxime
              necessitatibus amet eligendi ut voluptatibus!
            </p>
          </div>
        </div>
        <div className="w-[50%]">
          <img src="/Rooms2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
