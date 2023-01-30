import React from 'react'
import 'tw-elements';
import Cards from './Cards';
import Cards2 from './Cards2';
import Cards3 from './Cards3';
import Cards5 from './Cards5';
import Cards4 from './Cards4';
import C from './Cards.json';
function Themes() {
  let i=0;
  return (
    <div>
      <div className='flex justify-center'>
        <h1 className=' text-white text-7xl main '>Themes</h1>
      </div>
        <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="3"
      aria-label="Slide 4"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="4"
      aria-label="Slide 5"
    ></button>
  </div>
  
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full">
   

      <Cards  image={C[i].image} heading={C[i].heading} text={C[i++].text}  />
    </div>
    <div class="carousel-item relative float-left w-full">
      <Cards image={C[i].image} heading={C[i].heading} text={C[i++].text}/>
      
    </div>
    <div class="carousel-item relative float-left w-full">
     <Cards3 />
     
    </div>
    <div class="carousel-item relative float-left w-full">
     <Cards4 />
     
    </div>
    
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Themes