import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const FeedbackSlider = () => {
  return (
    <>
      <div className="review-area ptb-100">
        <div className="container">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="feedback-slider"
          >
            <SwiperSlide>
              <div className="feedback-item">
                <div className="client-img">
                  <img src="/images/clients/client1.png" alt="Feedback" />
                  <h3>Aleksandar Jovanović</h3>
                </div>
                <p>
                  Zahvaljujući ordinaciji Dentum, moj osmeh sada blista! Osoblje je izuzetno ljubazno i profesionalno, a stomatolozi su veoma pažljivi i efikasni u svom radu. Sjajna atmosfera i moderna oprema čine posetu stomatologu pravim zadovoljstvom.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="feedback-item">
                <div className="client-img">
                  <img src="/images/clients/client2.png" alt="Feedback" />
                  <h3>Milan Petrović</h3>
                </div>
                <p>
                  Stomatološka ordinacija Dentum pružila mi je izuzetno pozitivno iskustvo. Stručno osoblje je posvećeno pacijentima, pružajući brzu i bezbolnu uslugu. Sada mogu sa osmehom da kažem da sam pronašao svoju stomatološku ordinaciju iz snova.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="feedback-item">
                <div className="client-img">
                  <img src="/images/clients/client3.png" alt="Feedback" />
                  <h3>Marko Popović</h3>
                </div>
                <p>
                  Iskustvo u ordinaciji Dentum je fantastično. Profesionalnost, ljubaznost i visok kvalitet usluge čine ovu ordinaciju izuzetnom. Preporučila bih je svima koji traže vrhunsku stomatološku negu.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FeedbackSlider;
