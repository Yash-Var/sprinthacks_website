import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "../css/theme.css";

import SwiperCore, { Autoplay } from "swiper";

import { Navigation } from "swiper";
import "swiper/css/navigation";
import React from "react";
import Fintech from "../assests/images/slideImage/bank.png";
import Healthcare from "../assests/images/slideImage/crrr.png";
import Edtech from "../assests/images/slideImage/e-books.png";
import WEB from "../assests/images/slideImage/bitcoin.png";
import OPEN from "../assests/images/slideImage/s.png";

SwiperCore.use([Autoplay]);

export default function Themes() {
  // const [windowSize, setWindowSize] = React.useState(getWindowSize());
  // React.useEffect(() => {
  //   function handleWindowResize() {
  //     setWindowSize(getWindowSize());
  //   }
  //   window.addEventListener("resize", handleWindowResize);

  //   return () => {
  //     window.removeEventListener("resize", handleWindowResize);
  //   };
  // }, []);
  // function getWindowSize() {
  //   const { innerWidth, innerHeight } = window;
  //   return { innerWidth, innerHeight };
  // }
  const theme = {
    Healthcare: {
      img: OPEN,
      content:
        "The Healthcare theme of this hackathon provides a platform for individuals to develop innovative solutions that tackle challenges in the healthcare industry. Participants will have the opportunity to use technology to improve patient outcomes, streamline medical processes, and enhance overall healthcare delivery.",
    },
    Fintech: {
      img: Fintech,
      content:
        " The Fintech theme at this hackathon offers participants the opportunity to tackle real-world financial challenges. Participants will have the opportunity to develop and showcase their innovative solutions that improve financial services, streamline transactions, and enhance financial literacy.",
    },
    Edtech: {
      img: Edtech,
      content:
        " The EdTech theme of this hackathon is focused on leveraging technology to improve the education system and enhance the learning experience for students. Participants will have the opportunity to build and showcase innovative solutions that address challenges such as accessibility, engagement, and personalization in education.",
    },
    Web3: {
      img: WEB,
      content:
        "The Web3 theme of this hackathon is dedicated to exploring the potential of decentralized technology and its impact on the future of the internet. Participants will have the opportunity to build and showcase their solutions that harness the power of decentralized systems to improve privacy, security, and ownership of data.",
    },
    OpenInnovation: {
      img: Healthcare,
      content:
        "The Open Innovation theme of this hackathon invites participants to explore new ways of problem-solving and collaboration. This theme encourages individuals to work together, share ideas, and bring innovative solutions to life. Participants will have the opportunity to develop their solutions with the support of a diverse community, utilizing a range of technologies and approaches.",
    },
  };
  return (
    <section className="test-head">
      <div>
        <h1 className="theme-heading text-white text-7xl main ">Themes</h1>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {Object.keys(theme).map((e) => {
          return [
            <SwiperSlide>
              <div className="swip-slide">
                <div className="themename text-white main semibold ">{e}</div>
                <div className="slide-content">
                  <div className="slide-img">
                    <img src={theme[e].img} alt="Fintech" />
                  </div>
                  <div className="themeContent text-white text-2xl semibold">
                    {theme[e].content}
                  </div>
                </div>
              </div>
            </SwiperSlide>,
          ];
        })}

        {/* <SwiperSlide>
          <div className="swip-slide">
            <div className="text-white main text-6xl semibold ">Edtech</div>
            <div className="slide-img">
              <img src={Edtech} alt="Edtech" />
            </div>
            <div className="slide-content">
              <div className="abouttext text-white text-2xl semibold pt-8 ">
                The EdTech theme of this hackathon is focused on leveraging
                technology to improve the education system and enhance the
                learning experience for students. Participants will have the
                opportunity to build and showcase innovative solutions that
                address challenges such as accessibility, engagement, and
                personalization in education.
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
                The Healthcare theme of this hackathon provides a platform for
                individuals to develop innovative solutions that tackle
                challenges in the healthcare industry. Participants will have
                the opportunity to use technology to improve patient outcomes,
                streamline medical processes, and enhance overall healthcare
                delivery.
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
                The Web3 theme of this hackathon is dedicated to exploring the
                potential of decentralized technology and its impact on the
                future of the internet. Participants will have the opportunity
                to build and showcase their solutions that harness the power of
                decentralized systems to improve privacy, security, and
                ownership of data.
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
                The Open Innovation theme of this hackathon invites participants
                to explore new ways of problem-solving and collaboration. This
                theme encourages individuals to work together, share ideas, and
                bring innovative solutions to life. Participants will have the
                opportunity to develop their solutions with the support of a
                diverse community, utilizing a range of technologies and
                approaches.
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
}
