import React from "react";
import Layout from "../components/Layout.jsx";
import About from "../components/About.jsx";
import RoomsInfo from "../components/RoomsInfo.jsx";
import Photos from "../components/Photos.jsx";
import Feedback from "../components/Feedback.jsx";
import EventsInfo from "../components/Events.jsx";
import FilterRooms from "../components/FilterRooms.jsx";
import Header from "../components/Header.jsx";
import { FaStar } from "react-icons/fa";
import Restaurant from "../components/Restaurant.jsx";

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

function Home() {
  return (
    <Layout>
      <Header
        heading={
          <span className="flex items-center gap-2">
            WELCOME TO 5 <FaStar color="rgb(255 186 90)" /> HOTEL
          </span>
        }
        title={"A Best Place To Stay"}
      />
      <FilterRooms />
      <About />
      <RoomsInfo
        roomsHeading={
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
        }
        roomsInfo={roomsInfo}
      />
      <Photos />
      <Feedback />
      <EventsInfo eventsInfo={eventsInfo} />
      <Restaurant />
    </Layout>
  );
}

export default Home;
