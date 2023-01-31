// import React from 'react'
// import 'tw-elements';
// import Cards from './Cards';
// import Cards2 from './Cards2';
// import Cards3 from './Cards3';
// import Cards5 from './Cards5';
// import Cards4 from './Cards4';
// import C from './Cards.json';
// function Themes() {
//   let i=0;
//   return (
//     <div>
//       <div className='flex justify-center'>
//         <h1 className=' text-white text-7xl main '>Themes</h1>
//       </div>
//         <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
//   <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
//     <button
//       type="button"
//       data-bs-target="#carouselExampleCaptions"
//       data-bs-slide-to="0"
//       class="active"
//       aria-current="true"
//       aria-label="Slide 1"
//     ></button>
//     <button
//       type="button"
//       data-bs-target="#carouselExampleCaptions"
//       data-bs-slide-to="1"
//       aria-label="Slide 2"
//     ></button>
//     <button
//       type="button"
//       data-bs-target="#carouselExampleCaptions"
//       data-bs-slide-to="2"
//       aria-label="Slide 3"
//     ></button>
//     <button
//       type="button"
//       data-bs-target="#carouselExampleCaptions"
//       data-bs-slide-to="3"
//       aria-label="Slide 4"
//     ></button>
//     <button
//       type="button"
//       data-bs-target="#carouselExampleCaptions"
//       data-bs-slide-to="4"
//       aria-label="Slide 5"
//     ></button>
//   </div>

//   <div class="carousel-inner relative w-full overflow-hidden">
//     <div class="carousel-item active relative float-left w-full">


//       <Cards  image={C[i].image} heading={C[i].heading} text={C[i++].text}  />
//     </div>
//     <div class="carousel-item relative float-left w-full">
//       <Cards image={C[i].image} heading={C[i].heading} text={C[i++].text}/>

//     </div>
//     <div class="carousel-item relative float-left w-full">
//      <Cards3 />

//     </div>
//     <div class="carousel-item relative float-left w-full">
//      <Cards4 />

//     </div>

//   </div>
//   <button
//     class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
//     type="button"
//     data-bs-target="#carouselExampleCaptions"
//     data-bs-slide="prev"
//   >
//     <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button
//     class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
//     type="button"
//     data-bs-target="#carouselExampleCaptions"
//     data-bs-slide="next"
//   >
//     <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
//     </div>
//   )
// }

// export default Themes

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "./App.css";

import SwiperCore, { Autoplay } from 'swiper';

import { Navigation } from "swiper";
import "swiper/css/navigation";
import React from "react";
import Fintech from "./images/slideImage/bank.png";
import Healthcare from "./images/slideImage/crrr.png";
import Edtech from "./images/slideImage/e-books.png";
import WEB from "./images/slideImage/bitcoin.png";
import OPEN from "./images/slideImage/s.png";

SwiperCore.use([Autoplay]);




export default function Themes() {
  const [windowSize, setWindowSize] = React.useState(getWindowSize());
  React.useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
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

        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false
        }
        }
       
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide > <div className="swip-slide">
          <div className="slide-img">
            <img src={Fintech} alt="Fintech" />
          </div>
          <div className="slide-content">
            <div className="text-white main text-6xl semibold ">Fintech</div>
            <div className="abouttext text-white text-2xl semibold pt-8 ">The Fintech theme at this hackathon offers participants the opportunity to tackle real-world financial challenges. Participants will have the opportunity to develop and showcase their innovative solutions that improve financial services, streamline transactions, and enhance financial literacy. </div>
          </div>
        </div></SwiperSlide>
        <SwiperSlide> <div className="swip-slide">
          <div className="slide-img">
            <img src={Edtech} alt="Edtech" />

          </div>
          <div className="slide-content">
            <div className="text-white main text-6xl semibold ">Edtech</div>

            <div className="abouttext text-white text-2xl semibold pt-8 ">The EdTech theme of this hackathon is focused on leveraging technology to improve the education system and enhance the learning experience for students. Participants will have the opportunity to build and showcase innovative solutions that address challenges such as accessibility, engagement, and personalization in education.</div>
          </div>
        </div></SwiperSlide>
        <SwiperSlide> <div className="swip-slide">
          <div className="slide-img">
            <img src={Healthcare} alt="Healthcare" />
          </div>
          <div className="slide-content">
            <div className="text-white main text-6xl semibold ">Healthcare</div>

            <div className="abouttext text-white text-2xl semibold pt-8 ">The Healthcare theme of this hackathon provides a platform for individuals to develop innovative solutions that tackle challenges in the healthcare industry. Participants will have the opportunity to use technology to improve patient outcomes, streamline medical processes, and enhance overall healthcare delivery.</div>
          </div>
        </div></SwiperSlide>
        <SwiperSlide> <div className="swip-slide">
          <div className="slide-img">
            <img src={WEB} alt="WEB" />
          </div>
          <div className="slide-content">
            <div className="text-white main text-6xl semibold ">WEB 3.0</div>

            <div className="abouttext text-white text-2xl semibold pt-8 ">The Web3 theme of this hackathon is dedicated to exploring the potential of decentralized technology and its impact on the future of the internet. Participants will have the opportunity to build and showcase their solutions that harness the power of decentralized systems to improve privacy, security, and ownership of data.</div>
          </div>
        </div></SwiperSlide>
        <SwiperSlide> <div className="swip-slide">
          <div className="slide-img">
            <img src={OPEN} alt="OPEN" />
          </div>
          <div className="slide-content">
            <div className="text-white main text-6xl semibold ">Open Innovation</div>

            <div className="abouttext text-white text-2xl semibold pt-8 ">The Open Innovation theme of this hackathon invites participants to explore new ways of problem-solving and collaboration. This theme encourages individuals to work together, share ideas, and bring innovative solutions to life. Participants will have the opportunity to develop their solutions with the support of a diverse community, utilizing a range of technologies and approaches.</div>
          </div>
        </div></SwiperSlide>
      </Swiper>
    </section>
  );
}