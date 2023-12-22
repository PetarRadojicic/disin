import React from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import Link from "next/link";

const GalerijaGrid = () => {
  const img1_1 = {
    imageUrl: "/images/blog/blog1.jpg",
  };
  const img1_2  = {
    imageUrl: "/images/blog/blog2.jpg",
  };

  return (
    <>
      <div className="blog-area-two pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog-top">
                  <ReactBeforeSliderComponent
                    firstImage={img1_1}
                    secondImage={img1_2}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog-top">
                  <ReactBeforeSliderComponent
                    firstImage={img1_1}
                    secondImage={img1_2}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog-top">
                  <ReactBeforeSliderComponent
                    firstImage={img1_1}
                    secondImage={img1_2}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog-top">
                  <ReactBeforeSliderComponent
                    firstImage={img1_1}
                    secondImage={img1_2}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog-top">
                  <ReactBeforeSliderComponent
                    firstImage={img1_1}
                    secondImage={img1_2}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog-top">
                  <ReactBeforeSliderComponent
                    firstImage={img1_1}
                    secondImage={img1_2}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog-top">
                  <ReactBeforeSliderComponent
                    firstImage={img1_1}
                    secondImage={img1_2}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog-top">
                  <ReactBeforeSliderComponent
                    firstImage={img1_1}
                    secondImage={img1_2}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog-top">
                  <ReactBeforeSliderComponent
                    firstImage={img1_1}
                    secondImage={img1_2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalerijaGrid;
