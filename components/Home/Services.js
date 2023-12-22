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
                  <Link href="/estetska-stomatologija">
                    <h3>Estetska stomatologija</h3>
                  </Link>
                  <p>
                    Estetska stomatologija obuhvata širok spektar procedura koje
                    poboljšavaju izgled zuba i osmeha pacijenata.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-item style-3">
                <div className="service-front">
                  <i className="icofont-helicopter"></i>
                  <Link href="/protetika">
                    <h3>Protetika</h3>
                  </Link>
                  <p>
                    Protetika se bavi nadoknadom nedostajućih zuba, popravkom
                    oštećenih zuba i poboljšanjem funkcionalnosti usta.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-item style-3">
                <div className="service-front">
                  <i className="icofont-helicopter"></i>
                  <Link href="/rekonstruktivna-stomatologija-i-endodoncija">
                    <h3>Ortodoncija</h3>
                  </Link>
                  <p>
                    Ortodoncija se bavi ispravljanjem nepravilnog položaja
                    zuba i vilica kako bi se postigao pravilan zagrižaj.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-item style-3">
                <div className="service-front">
                  <i className="icofont-architecture"></i>
                  <Link href="/rekonstruktivna-stomatologija-i-endodoncija">
                    <h3>Rekonstruktivna stomatologija i endodoncija</h3>
                  </Link>
                  <p>
                    Rekonstruktivna stomatologija se bavi popravkom oštećenih
                    zuba, dok endodoncija tretira oboljele zubne nerve.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-item style-3">
                <div className="service-front">
                  <i className="icofont-user-male"></i>
                  <Link href="/decja-i-preventivna-stomatologija">
                    <h3>Dečja i preventivna stomatologija</h3>
                  </Link>
                  <p>
                    Dečja stomatologija se fokusira na brigu o oralnom zdravlju
                    dece, dok preventivna stomatologija sprečava probleme.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-item style-3">
                <div className="service-front">
                  <i className="icofont-ambulance-cross"></i>
                  <Link href="/oralna-hirurgija-i-implantologija">
                    <h3>Oralna hirurgija i implantologija</h3>
                  </Link>
                  <p>
                    Oralna hirurgija obuhvata različite hirurške zahvate, dok se
                    implantologija bavi ugradnjom zubnih implanta.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-item style-3">
                <div className="service-front">
                  <i className="icofont-ambulance-cross"></i>
                  <Link href="/parodontologija">
                    <h3>Parodontologija</h3>
                  </Link>
                  <p>
                    Parodontologija se bavi lečenjem oboljenja desni i
                    potpornog aparata zuba.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="service-item style-3">
                <div className="service-front">
                  <i className="icofont-home"></i>
                  <Link href="/dentalni-turizam">
                    <h3>Dentalni turizam</h3>
                  </Link>
                  <p>
                    Dentalni turizam omogućava pacijentima da kombinuju lečenje
                    sa uživanjem u turističkim atrakcijama.
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