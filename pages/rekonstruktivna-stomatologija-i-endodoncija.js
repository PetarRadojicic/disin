import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import RekonstruktivnaStomatologijaIEndodoncijaContent from "../components/Services/RekonstruktivnaStomatologijaIEndodoncijaContent";

const ServiceDetails = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Rekonstruktivna stomatologija i endodoncija"
        homePageUrl="/"
        homePageText="Početna"
        activePageText="Rekonstruktivna stomatologija i endodoncija"
        bgImage="page-title-one"
      />

      <RekonstruktivnaStomatologijaIEndodoncijaContent />

      <Footer />
    </>
  );
};

export default ServiceDetails;
