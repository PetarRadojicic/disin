import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import ParodontologijaContent from "../components/Services/ParodontologijaContent";

const ServiceDetails = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Parodontologija"
        homePageUrl="/"
        homePageText="Početna"
        activePageText="Parodontologija"
        bgImage="page-title-one"
      />

      <ParodontologijaContent />

      <Footer />
    </>
  );
};

export default ServiceDetails;
