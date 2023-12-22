import React from "react";
// import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <div className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-item">
                <img src="/images/about1.jpg" alt="About" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-item about-right">
                <img src="/images/about-shape1.png" alt="About" />
                <h2>Dobrodošli u stomatološku ordinaciju Dentum</h2>
                <p>
                  Ordinacija je uređena po najvišim svetskim standardima
                  privatne stomatološke prakse. U prijatnom ambijentu ordinacije
                  dentum sa ljubaznim osobljem osećaćete se prijatno i komforno.
                  Rad sa najsavremenijim materijalima, korišćenje digitalnih
                  tehnologija pri dijagnostici i sprovođenju terapije
                  omogućavaju nam postizanje vrhunskih estetskih i funkcionalnih
                  rezultata. Višegodišnje iskustvo pažljivo odabranog tima pruža
                  širok dijapazon stomatoloških usluga, što sto daje sigurnost
                  svakom pacijentu. Stručnim usavršavanjem u skladu sa
                  današnjicom uveli smo svetske trendove i u našu praksu. Mi
                  stvaramo ono o čemu drugi govore. Naša najbolja reklama su
                  zadovoljni pacijenti. Čekamo Vas.{" "}
                </p>

                <ul>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Posvećenost pacijentima
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Kontinuriana edukacija
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Dugogodisnje iskustvo
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
