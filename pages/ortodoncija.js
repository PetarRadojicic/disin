import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import OrtodoncijaContent from "../components/Services/OrtodoncijaContent";

const ServiceDetails = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Service Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Service Details"
        bgImage="page-title-one"
      />

      <OrtodoncijaContent />

      <Footer />
    </>
  );
};

export default ServiceDetails;
