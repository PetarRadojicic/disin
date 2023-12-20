import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import DecjaIPreventivnaStomatologijaContent from "../components/Services/DecjaIPreventivnaStomatologijaContent";

const ServiceDetails = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Service Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Service Details"
        bgImage="page-title-one"
      />

      <DecjaIPreventivnaStomatologijaContent />

      <Footer />
    </>
  );
};

export default ServiceDetails;
