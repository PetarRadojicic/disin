import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import OralnaHirurgijaIImplantologijaContent from "../components/Services/OralnaHirurgijaIImplantologijaContent";

const ServiceDetails = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Oralna hirurgija i implantologija"
        homePageUrl="/"
        homePageText="Početna"
        activePageText="Oralna hirurgija i implantologija"
        bgImage="page-title-one"
      />

      <OralnaHirurgijaIImplantologijaContent />

      <Footer />
    </>
  );
};

export default ServiceDetails;
