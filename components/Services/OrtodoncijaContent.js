import React from "react";

const OrtodoncijaContent = () => {
  return (
    <>
      <div className="service-details-area ptb-100">
        <div className="container">
          <div className="services-details-img">
            <img src="/images/service-details-bg.jpg" alt="Service Details" />

            <h2>Ortodoncija</h2>
            <p>
              Među pacijentima popularan termin ortodoncija je zadužen za
              uspostavljanje pravilnog odnosa među zubima, što mišiće, vilični
              zglob i celokupan sistem za žvakanje održava u ravnoteži i time
              postiže adekvatnu fizionomiju lica.
            </p>
            <p>
              Ortodontski aparati se dele na <b>mobile</b> I <b>fiksne</b>.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-5">
              <div className="service-details-inner-left">
                <img src="/images/signup-bg.jpg" alt="Service" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="service-details-inner">
                <h2>Mobilni aparati</h2>
                <p>
                  su indikovani za period rasta i razvoja zaključno sa
                  pubertetom, dok su <b>fiksni aparati</b> namenjeni odraslim
                  pacijentima i godine više ne predstavljaju ograničenje u
                  terapiji.
                </p>
                <br></br>
                <p>
                  Tokom ortodontske terapije pacijenti su u obavezi da pojačano
                  vode računa o higijeni zuba, redovno dolaze na kontrole i po
                  završetku terapije određeno vreme nose mobilne nadoknade kako
                  ne bi došlo do recidiva.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrtodoncijaContent;
