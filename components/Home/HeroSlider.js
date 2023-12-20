import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

const HeroSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="home-slider home-slider-five"
      >
        <SwiperSlide>
          <div
            className="slider-item slider-item-three"
            style={{
              backgroundImage: `url(/images/home-five/home-five-slider1.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    <h1>Stomatološka Ordinacija Dentum</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="slider-item slider-item-three"
            style={{
              backgroundImage: `url(/images/home-five/home-five-slider2.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    <h1>Sjajni Osmesi, Zdravlje Ulepšano</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSlider;
