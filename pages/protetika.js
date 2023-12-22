import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import ProtetikaContent from "../components/Services/ProtetikaContent";

const ServiceDetails = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Protetika"
        homePageUrl="/"
        homePageText="Početna"
        activePageText="Protetika"
        bgImage="page-title-one"
      />

      <ProtetikaContent />

      <Footer />
    </>
  );
};

export default ServiceDetails;
