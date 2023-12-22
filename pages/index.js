import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import HeroSlider from "../components/Home/HeroSlider";
import AboutUs from "../components/Home/AboutUs";
import OurExpertise from "../components/Home/OurExpertise";
import Services from "../components/Home/Services";
import HowCovid19Spreads from "../components/Home/HowCovid19Spreads";
import SymptomsCovid19 from "../components/Home/SymptomsCovid19";
import FaqSection from "../components/Common/FaqSection";
import VideoIntro from "../components/Common/VideoIntro";
import OurDoctors from "../components/Common/OurDoctors";
import Stats from "../components/Home/Stats";
import FeedbackSlider from "../components/Home/FeedbackSlider";
import LatestBlogPost from "../components/Common/LatestBlogPost";
import NewsletterForm from "../components/Common/NewsletterForm";
import Footer from "../components/_App/Footer";

const Index = () => {
  return (
    <>
      <Navbar />

      <HeroSlider />

      <AboutUs />

      {/* <OurExpertise /> */}

      <Services />

      <FeedbackSlider />

      {/* <HowCovid19Spreads /> */}

      {/* <SymptomsCovid19 /> */}

      {/* <FaqSection /> */}

      {/* <VideoIntro /> */}

      <OurDoctors />

      {/* <div className="pb-100">
        <Stats />
      </div> */}


      {/* <LatestBlogPost /> */}

      {/* <NewsletterForm /> */}

      <Footer />
    </>
  );
};

export default Index;
