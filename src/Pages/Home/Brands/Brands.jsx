import React from "react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { assets } from "../../../assets/assets";
import { Autoplay } from "swiper/modules";

const Brands = () => {
  const brandImages = [
    assets.amazon,
    assets.amazonVector,
    assets.casio,
    assets.moonstar,
    assets.randstad,
    assets.star,
    assets.startPeople,
  ];
  return (
    <div className="py-9">
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        autoplay={{
          display: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {brandImages.map((img, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img src={img} alt="brand" className="w-28 h-auto object-contain" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
