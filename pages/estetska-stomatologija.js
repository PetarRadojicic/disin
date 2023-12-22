import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import EstetskaStomatologijaContent from "../components/Services/EstetskaStomatologijaContent";

const EstetskaStomatologija = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Estetska Stomatologija"
        homePageUrl="/"
        homePageText="Početna"
        activePageText="Estetska Stomatologija"
        bgImage="page-title-one"
      />

      <EstetskaStomatologijaContent />

      <Footer />
    </>
  );
};

export default EstetskaStomatologija;
