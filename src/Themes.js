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
// import "swiper/css/pagination";
import "./App.css";
// import { Pagination } from "swiper";
import saket from "./images/saket.jpeg";
// import ashwin from "./images/ashwin.jpeg";
// import aryan from "./images/aryan.jpeg";
// import avneesh from "./images/avneesh.jpeg";
// import khushi from "./images/khushi.jpeg";
// import sambhrant from "./images/sambhrant.jpeg";
// import ayush from "./images/ayush.jpeg";
import SwiperCore, { Autoplay } from 'swiper';
// import Archit from "./images/Archit.jpeg";
// import Tushar from "./images/Tushar.jpeg";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import React from "react";

SwiperCore.use([Autoplay]);
// test 



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
        // navigation={true}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false
        }
        }
        // pagination={{
        //     clickable: true,
        // }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <div className="swip-slide">
          <div className="slide-img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" alt="ashwin" />
          </div>
          <div className="slide-content">
            <div className="text-white main text-6xl semibold ">Fitech</div>
            <div className="abouttext text-white text-3xl semibold pt-8 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque </div>
          </div>
        </div></SwiperSlide>
        <SwiperSlide> <div className="swip-slide">
          <div className="slide-img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" alt="ashwin" />

          </div>
          <div className="slide-content">
            <div className="text-white main text-6xl semibold ">Edtech</div>

            <div className="abouttext text-white text-3xl semibold pt-8 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque</div>
          </div>
        </div></SwiperSlide>
        <SwiperSlide> <div className="swip-slide">
          <div className="slide-img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" alt="ashwin" />
          </div>
          <div className="slide-content">
            <div className="text-white main text-6xl semibold ">Healthcare</div>

            <div className="abouttext text-white text-3xl semibold pt-8 ">hLorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque</div>
          </div>
        </div></SwiperSlide>
        <SwiperSlide> <div className="swip-slide">
          <div className="slide-img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" alt="ashwin" />
          </div>
          <div className="slide-content">
            <div className="text-white main text-6xl semibold ">WEB 3.0</div>

            <div className="abouttext text-white text-3xl semibold pt-8 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque</div>
          </div>
        </div></SwiperSlide>
        <SwiperSlide> <div className="swip-slide">
          <div className="slide-img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" alt="ashwin" />
          </div>
          <div className="slide-content">
            <div className="text-white main text-6xl semibold ">Open Innovation</div>

            <div className="abouttext text-white text-3xl semibold pt-8 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque</div>
          </div>
        </div></SwiperSlide>
      </Swiper>
    </section>
  );
}