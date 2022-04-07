import React from "react";
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
        image: "./images/AE337B64-599B-429D-BCFA-532BB727163C.jpg",
        amount: "$12,000",
        year: 2015,
    },

    {
        image: "./images/6BAF4574-7DC5-4654-A450-8905C0832B1D.jpg",
        amount: "$26,000",
        year: 2019,
    },

    {
        image: "./images/BB52431A-6EF5-4014-94F9-955F61E283CE.jpg",
        amount: "$15,000",
        year: 2019,
    },

]


export default function WeekBike() {
  return (
    <>
    <div className="my-10 ">
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
                  <div className="flex flex-row justify-center w-[90%] h-[426px] align-middle text-center cursor-pointer mx-16">
                      <div>
                      <img src={bike.image} alt={`bike`} className="h-[419px] w-[557px]"/>
                        </div>
                      
                        <div className="h-[426px] w-[50%] bg-cta4 flex flex-col justify-center align-middle">
                            <p className="text-white text-6xl font-extrabold mb-8">{bike.amount}</p>
                            <p className="text-white text-3xl font-bold">PRE-OWNED | {bike.year}</p>
                        </div>
                    </div>
                    </SwiperSlide>
              ))
          }
      </Swiper>
    </div>


    </>
  );
}
