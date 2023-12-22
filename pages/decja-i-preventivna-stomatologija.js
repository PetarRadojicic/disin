import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import DecjaIPreventivnaStomatologijaContent from "../components/Services/DecjaIPreventivnaStomatologijaContent";

const ServiceDetails = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Decja i preventivna stomatologija"
        homePageUrl="/"
        homePageText="Početna"
        activePageText="Decja i preventivna stomatologija"
        bgImage="page-title-one"
      />

      <DecjaIPreventivnaStomatologijaContent />

      <Footer />
    </>
  );
};

export default ServiceDetails;
