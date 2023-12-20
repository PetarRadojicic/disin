import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import FunFacts from "../components/Common/FunFacts";
import AboutContent from "../components/About/AboutContent";

const About = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="About"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About"
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

export default About;
