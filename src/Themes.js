import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "./App.css";

import SwiperCore, { Autoplay } from "swiper";

import { Navigation } from "swiper";
import "swiper/css/navigation";
import React from "react";
import Fintech from "./images/slideImage/bank.png";
import Healthcare from "./images/slideImage/crrr.png";
import Edtech from "./images/slideImage/e-books.png";
import WEB from "./images/slideImage/bitcoin.png";
import OPEN from "./images/slideImage/s.png";

SwiperCore.use([Autoplay]);
// test

export default function Themes() {
  const [windowSize, setWindowSize] = React.useState(getWindowSize());
  React.useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  return (
    <section className="test-head">
      <div className="test-head-1">
        <h1 className="text-white text-7xl main ">Themes</h1>
      </div>
      <Swiper
        // navigation={true}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //     clickable: true,
        // }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="swip-slide">
            <div className="slide-img">
              <img src={Fintech} alt="Fintech" />
            </div>
            <div className="slide-content">
              <div className="text-white main text-6xl semibold ">Fitech</div>
              <div className="abouttext text-white text-2xl semibold pt-8 ">
                From mobile payments to internet banking, an increased number of
                consumers are adopting fintech solutions today. Create a hack to
                simplify this field.{" "}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="swip-slide">
            <div className="slide-img">
              <img src={Edtech} alt="Edtech" />
            </div>
            <div className="slide-content">
              <div className="text-white main text-6xl semibold ">Edtech</div>

              <div className="abouttext text-white text-2xl semibold pt-8 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati
                deserunt nobis suscipit eaque
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="swip-slide">
            <div className="slide-img">
              <img src={Healthcare} alt="Healthcare" />
            </div>
            <div className="slide-content">
              <div className="text-white main text-6xl semibold ">
                Healthcare
              </div>

              <div className="abouttext text-white text-2xl semibold pt-8 ">
                The increase in patients has led to the decrease in the relative
                number of doctors per patient which results in a vicous cycle
                where ignored or delayed diagnostics of an ailment makes the
                patient more dependent on doctor's check-up. Some also cannot
                afford to visit a doctor.
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="swip-slide">
            <div className="slide-img">
              <img src={WEB} alt="WEB" />
            </div>
            <div className="slide-content">
              <div className="text-white main text-6xl semibold ">WEB 3.0</div>

              <div className="abouttext text-white text-2xl semibold pt-8 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati
                deserunt nobis suscipit eaque
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="swip-slide">
            <div className="slide-img">
              <img src={OPEN} alt="OPEN" />
            </div>
            <div className="slide-content">
              <div className="text-white main text-6xl semibold ">
                Open Innovation
              </div>

              <div className="abouttext text-white text-2xl semibold pt-8 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aut, repellat ipsum facere voluptate dicta obcaecati
                deserunt nobis suscipit eaque
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
