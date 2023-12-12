import React from "react";
import Layout from "../components/Layout.jsx";
import About from "../components/About.jsx";
import RoomsInfo from "../components/RoomsInfo.jsx";
import Photos from "../components/Photos.jsx";
import Feedback from "../components/Feedback.jsx";
import EventsInfo from "../components/Events.jsx";
import { Navigate } from "react-router-dom";


function Home() {
  return (
    <Layout>
      <About />
      <RoomsInfo />
      <Photos />
      <Feedback />
      <EventsInfo />
    </Layout>
  );
}

export default Home;
