import React from "react";
import Photos from "../components/Photos";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Leadership from "../components/Leadership";
import About from "../components/About";

export default function AboutUs() {
  return (
    <Layout>
      <Header title={"About"} />
      <About />
      <Leadership />
      <Photos photos={null} />
    </Layout>
  );
}
