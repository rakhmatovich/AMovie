import React from "react";
import RoomsMenu from "../components/RoomsMenu";
import EventsInfo from "../components/Events";

export default function Rooms() {
  return (
    <div>
      <EventsInfo />
      <RoomsMenu />
    </div>
  );
}
