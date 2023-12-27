import React from "react";

const ParodontologijaContent = () => {
  return (
    <>
      <div className="service-details-area ptb-100">
        <div className="container">
          <div className="services-details-img">
            <img src="/images/Services/P_1.jpg" alt="Service Details" />

            <h2>Parodontologija</h2>
            <p>
              Parodontologija je grana stomatologije koja se bavi prevencijom i
              lečenjem potpornog aparata zuba. Naučno je dokazano da 50%
              populacije podleže oboljenju parodoncijuma. Konvencionalna
              parodontološka terapija podrazumeva uklanjanje mekih naslaga,
              zubnog kamenca, subgingivalnih konkremenata i kiretažu
              parodontalnih džepova. Peskiranjem se dubinski ispiraju
              parodontalni džepovi, postiže se efekat poliranja i uklanjanjaju
              se pigmentacije sa gledji.
            </p>
            <p>
              Pravovremeno prepoznavanje simptoma oboljenja i primena terapije
              imaju krucijalan znacaj za tok bolesti.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-5">
              <div className="service-details-inner-left">
                <img src="/images/Services/P_2.jpg" alt="Service" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="service-details-inner">
                <h2>Hirurski vid terapije</h2>
                <p>
                  je neophodan ukoliko je i nakon ordinacijskog uklanjanja
                  naslaga inflamacija i dalje prisutna.
                </p>
                <p>
                  U parodontalnoj hirurgiji najzastupljenija je režanj operacija
                  čiji je krajnji cilj učvršćavanje zuba i regeneracija mekih
                  tkiva.
                </p>
                <p>
                  U hiruskom terapijskom segmentu je i korekcija “gummy smile”
                  (urodjena anomalija desni u zoni prednjih gornjih zuba koja
                  bitno kvari estetiku osmeha). Hiruskim postupcima se u
                  harmoniju dovode gingivalni zeniti i na taj nacin koriguje
                  osmeh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParodontologijaContent;
