import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import DentalniTurizamContent from "../components/Services/DentalniTurizamContent";

const ServiceDetails = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Denatlni turizam"
        homePageUrl="/"
        homePageText="Početna"
        activePageText="Denatlni turizam"
        bgImage="page-title-one"
      />

      <DentalniTurizamContent />

      <Footer />
    </>
  );
};

export default ServiceDetails;
