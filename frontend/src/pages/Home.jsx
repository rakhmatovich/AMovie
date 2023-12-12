import React from "react";
import Layout from "../components/Layout.jsx";
import About from "../components/About.jsx";
import RoomsInfo from "../components/RoomsInfo.jsx";
import FilterRooms from "../components/FilterRooms.jsx";
import Header from "../components/Header.jsx";

function Home() {
  return (
    <Layout>
      <Header />
      <FilterRooms />
      <About />
      <RoomsInfo /> 
    </Layout>
  );
}

export default Home;
