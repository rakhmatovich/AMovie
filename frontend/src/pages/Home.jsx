import React from "react";
import Layout from "../components/Layout.jsx";
import About from "../components/About.jsx";
import RoomsInfo from "../components/RoomsInfo.jsx";

function Home() {
  return (
    <Layout>
      <About/>
        <RoomsInfo/>
      
    </Layout>
  );
}

export default Home;
