import React from "react";

export default function EventsInfo() {
  const eventsInfo = [
    {
      id: 1,
      url: "/Macan-event1.jpg",
      date: "Ноябрь 15.2023",
      title:
        "Лайфхаки для путешествий, которые сделают ваш полет более комфортным",
      text: "Маска для глаз и наушники с шумоподавлением или беруши нейтрализуют лишний свет и шум, которые могут помешать вам заснуть.",
    },
    {
      id: 2,
      url: "/Macan-event2.jpg",
      date: "Июнь 8.2023",
      title:
        "5 типов работ, которые позволят вам зарабатывать, путешествуя по миру",
      text: "Воспользовавшись этими советами, вы можете путешествовать и одновременно зарабатывать деньги. Вы можете делать фотографии, сделанные во время путешествия, и продавать их в туристические журналы.",
    },
    {
      id: 3,
      url: "/Macan-event3.jpg",
      date: "Октябрь 24.2023",
      title: "5 отличных идей подарков для путешественников",
      text: "Полотенце из микрофибры.Для тех, кто путешествует налегке. Такие полотенца занимают мало места и быстро сохнут. Их удобно использовать на море и в походе.",
    },
  ];

  return (
     
    <section className="bg-[#f2f4fb] py-20">
      <div className="text-center">
        <h1 className="font-PlayFairDisplay m-3 text-[30px] font-bold">
          Новости
        </h1>
        <div className="font-sans w-[50%] mx-auto text-gray-500">
          Свежие новости каждый день
        </div>
      </div>
      <div className="flex justify-between w-[80%] mx-auto gap-10 mt-10 overflow-hidden pb-10">
        {eventsInfo.map((event) => (
          <div key={event.id} className="w-[30%] overflow-hidden shadow-sm card hover:shadow-lg duration-200 bg-white">
            <img className="w-full color-white" src={event.url} alt="" />
            <div className="px-6 py-4">
              <p className="text-gray-400 text-base">{event.date}</p>
              <div className="text-xl mb-2 font-PlayFair font-medium  hover:text-[#ffba5a] transition-colors duration-300">{event.title}</div>
              <p className="text-gray-500 text-base">{event.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    
  );
}
