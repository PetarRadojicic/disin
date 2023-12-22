import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import GoogleMap from "../components/Contact/GoogleMap";
import Footer from "../components/_App/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Kontakt"
        homePageUrl="/"
        homePageText="Početna"
        activePageText="Kontaktirajte nas"
        bgImage="page-title-one"
      />

      <ContactInfo />

      <ContactForm />

      <GoogleMap />

      <Footer />
    </>
  );
};

export default Contact;
