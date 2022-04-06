import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";



// import required modules
import { Autoplay, Navigation } from "swiper";






const bikeImages = [
    {
        name: "Adventure Touring",
        image: "./images/bikes/adventure-touring.jpg"
    },

    {
        name: "Cvo",
        image: "./images/bikes/cvo.png"
    },

    {
        name: "Dyna",
        image: "./images/bikes/dyna.png"
    },

    {
        name: "Sportster",
        image: "./images/bikes/sportster.png"
    },

    {
        name: "Softail",
        image: "./images/bikes/softail.png"
    },


    {
        name: "Touring",
        image: "./images/bikes/touring.png"
    },


    {
        name: "Trike",
        image: "./images/bikes/trike.png"
    },


    {
        name: "V-rod",
        image: "./images/bikes/v-rod.png"
    },
]


export default function BikeCarousel() {
  return (
    <>
    <div className="my-10 md:hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
          {
              bikeImages.map(bike => (
                  <SwiperSlide>
                  <div className="flex flex-col justify-center w=50 h-50 align-middle text-center cursor-pointer mx-16">
                      <img src={bike.image} alt={`${bike.name}`}/>
                        <p className="font-bold text-3xl hover:text-main">{bike.name}</p>
                      </div>
                    </SwiperSlide>
              ))
          }
      </Swiper>
    </div>

    <div className="my-10 hidden md:flex">
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
          {
              bikeImages.map(bike => (
                  <SwiperSlide>
                  <div className="flex flex-col justify-center w=50 h-50 align-middle text-center cursor-pointer">
                      <img src={bike.image} alt={`${bike.name}`}/>
                        <p className="font-bold text-3xl hover:text-main">{bike.name}</p>
                      </div>
                    </SwiperSlide>
              ))
          }
      </Swiper>
    </div>

    </>
  );
}
