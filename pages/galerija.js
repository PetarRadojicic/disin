import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import GalerijaGrid from "../components/Blog/GalerijaGrid";

const Blog = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Galerija naših radova"
        homePageUrl="/"
        homePageText="Početna"
        activePageText="Galrija"
        bgImage="page-title-four"
      />

      <GalerijaGrid />

      <Footer />
    </>
  );
};

export default Blog;
