import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import FunFacts from "../components/Common/FunFacts";
import AboutContent from "../components/About/AboutContent";

const ONama = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="O Nama"
        homePageUrl="/"
        homePageText="Početna"
        activePageText="O Nama"
        bgImage="page-title-one"
      />

      <AboutContent />

      <FunFacts />
 
      {/* <OurExpertise /> */}

      {/* <Services /> */}

      {/* <TestimonialSlider /> */}

      {/* <LatestBlogPost /> */}

      <Footer />
    </>
  );
};

export default ONama;
