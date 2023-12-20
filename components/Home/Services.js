import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="services-area service-area-two pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Naše usluge</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-4">
              <div className="service-item style-3">
                <div className="service-front">
                  <i className="icofont-doctor"></i>
                  <Link href="/service-details">
                    <h3>Estetska stomatologija</h3>
                  </Link>
                  <p>
                    Estetska stomatologija predstavlja oblast stomatologije koja
                    se fokusira na poboljšanje izgleda zuba, desni i celokupnog
                    oralnog estetskog doživljaja.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-item style-3">
                <div className="service-front">
                  <i className="icofont-helicopter"></i>
                  <Link href="/service-details">
                    <h3>Protetika</h3>
                  </Link>
                  <p>
                    Protetika se bavi
                    izradom nadoknada za izgubljene ili oštećene zube, s ciljem
                    obnavljanja funkcionalnosti, estetike i pacijentovog
                    samopouzdanja.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-item style-3">
                <div className="service-front">
                  <i className="icofont-architecture"></i>
                  <Link href="/service-details">
                    <h3>Rekonstruktivna stomatologija i endodoncija</h3>
                  </Link>
                  <p>
                    Rekonstruktivna stomatologija se bavi obnovom oštećenih
                    zuba, dok se endodoncija fokusira na lečenje zuba iznutra.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-item style-3">
                <div className="service-front">
                  <i className="icofont-user-male"></i>
                  <Link href="/service-details">
                    <h3>Dečja i preventivna stomatologija</h3>
                  </Link>
                  <p>
                    Dečja stomatologija se brine o oralnom zdravlju dece, dok
                    preventivna stomatologija sprečava probleme pre nego što se
                    pojave.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-item style-3">
                <div className="service-front">
                  <i className="icofont-ambulance-cross"></i>
                  <Link href="/service-details">
                    <h3>Oralna hirurgija i implantologija</h3>
                  </Link>
                  <p>
                    Oralna hirurgija obuhvata operacije usne šupljine, dok
                    implantologija se bavi postavljanjem zubnih implantata.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-item style-3">
                <div className="service-front">
                  <i className="icofont-ambulance-cross"></i>
                  <Link href="/service-details">
                    <h3>Parodontologija</h3>
                  </Link>
                  <p>
                    Parodontologija se bavi prevencijom, dijagnozom i lečenjem
                    bolesti desni i potpornog aparata zuba.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-item style-3">
                <div className="service-front">
                  <i className="icofont-home"></i>
                  <Link href="/service-details">
                    <h3>Dentalni turizam</h3>
                  </Link>
                  <p>
                    Dentalni turizam omogućava pacijentima da kombinuju lečenje
                    sa putovanjem i boravkom u lepim destinacijama.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
