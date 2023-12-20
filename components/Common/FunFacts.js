import React from "react";

const Zanimljivosti = () => {
  return (
    <>
      <div className="counter-area counter-bg counter-area-four">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                <i className="icofont-tooth"></i>
                <h3 className="counter">1500</h3>
                <p>Sjajnih Osmeha</p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                <i className="icofont-laughing"></i>
                <h3>
                  <span className="counter">5000</span>+
                </h3>
                <p>Zadovoljnih Pacijenata</p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                <i className="icofont-stethoscope"></i>
                <h3 className="counter">100</h3>
                <p>Stomatoloških Stručnjaka</p>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="counter-item">
                <i className="icofont-calendar"></i>
                <h3 className="counter">10</h3>
                <p>Godina Stomatološkog Iskustva</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Zanimljivosti;
