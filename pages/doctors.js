import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Link from "next/link";

const Doctors = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Upoznajte naše doktore"
        homePageUrl="/"
        homePageText="Početna"
        activePageText="Doktori"
        bgImage="page-title-five"
      />

      <div className="doctors-area doctors-area-two pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <img src="/images/doctors/doctor1.jpg" alt="Doctor" />
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/doctor-details">Dr. Babatunde</Link>
                  </h3>
                  <span>Neurosurgeon</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <img src="/images/doctors/doctor2.jpg" alt="Doctor" />
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/doctor-details">Dr. Addition Smith</Link>
                  </h3>
                  <span>Neurosurgeon</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <img src="/images/doctors/doctor3.jpg" alt="Doctor" />
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/doctor-details">Dr. Sarah Taylor</Link>
                  </h3>
                  <span>Dental Surgeon</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <img src="/images/doctors/doctor4.jpg" alt="Doctor" />
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/doctor-details">Dr. Mac Smith</Link>
                  </h3>
                  <span>Neurosurgeon</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <img src="/images/doctors/doctor5.jpg" alt="Doctor" />
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/doctor-details">Dr. Alinson Backer</Link>
                  </h3>
                  <span>Neurosurgeon</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <img src="/images/doctors/doctor6.jpg" alt="Doctor" />
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/doctor-details">Dr. Jas Macham</Link>
                  </h3>
                  <span>Dental Surgeon</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <img src="/images/doctors/doctor7.jpg" alt="Doctor" />
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/doctor-details">Dr. John Micheal</Link>
                  </h3>
                  <span>Neurosurgeon</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <img src="/images/doctors/doctor8.jpg" alt="Doctor" />
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/doctor-details">Dr. Shane Warne</Link>
                  </h3>
                  <span>Neurosurgeon</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <img src="/images/doctors/doctor9.jpg" alt="Doctor" />
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/doctor-details">Dr. Luis Moris</Link>
                  </h3>
                  <span>Dental Surgeon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Doctors;
