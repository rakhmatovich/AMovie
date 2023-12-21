import React from "react";
import RoomsMenu from "../components/RoomsMenu";
import Layout from "../components/Layout";
import Header from "../components/Header";
import FilterRooms from "../components/FilterRooms";
import RoomsInfo from "../components/RoomsInfo";

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
  {
    id: 4,
    url: "/Rooms1.jpg",
    name: "Одиночный Номер",
    price: "60",
  },
  {
    id: 5,
    url: "/Rooms2.jpg",
    name: "Двухместный Номер",
    price: "75",
  },
  {
    id: 6,
    url: "Rooms3.jpg",
    name: "Президентский Номер",
    price: "120",
  },
];

export default function Rooms() {
  return (
    <Layout>
      <Header title={"Rooms"} />
      <FilterRooms />
      <RoomsInfo roomsInfo={roomsInfo} />
      <RoomsMenu />
    </Layout>
  );
}
