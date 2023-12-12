import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-[#f2f4fb] py-16">
      <div className="flex mt-10 justify-evenly w-[80%] mx-auto items-center">
        <div className="text-4xl font-PlayFairDisplay w-[35%]">
          <h1 className="mb-4">Добро Пожаловать!</h1>
          <div className="font-sans text-base text-gray-500">
            <p>
              MACAN Terrace Hotel — это отель, расположенный в городе Ташкент.
              Гости могут воспользоваться доставкой еды и напитков или террасой.
              Гости могут обратиться к сотрудникам круглосуточной стойки
              регистрации, воспользоваться трансфером от/до аэропорта или общим
              лаунджем, а также подключиться к бесплатному Wi-Fi на всей
              территории.
            </p>
            <div className="text-white mt-6 flex gap-3 items-center">
              <Link
                to={"/"}
                className="bg-[#ffba5a] rounded-full py-2 px-5 hover:bg-[#ffaa34] transition-colors duration-300"
              >
                Узнать Больше
              </Link>
              <h1 className="text-gray-500 font-PlayFairDisplay italic">или</h1>
              <Link
                to={"/"}
                className="text-[#ffba5a] hover:text-[#ffaa34] transition-colors duration-300"
              >
                ПОСМОТРЕТЬ ВИДЕО
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[45%]">
          <div className="relative">
            <img
              className="rounded-md"
              src="/macan-hotel-about.jpg"
              alt=""
            />
            <img
              className="max-w-xs absolute -bottom-10 -right-10 w-[200px] rounded-full border-solid border-white border-8 "
              src="macan-food.jpg"
              alt="macan-food"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
