import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "../../../Components/Design/ReviewCard/ReviewCard";
import { assets } from "../../../assets/assets";

const Reviews = ({ reviewPromise }) => {
  const reviews = use(reviewPromise);
  console.log(reviews);

  return (
    <div className="my-9">
      <div className="flex justify-center mt-10">
        <img src={assets.customerTop} alt="" />
      </div>
      <div className="text-center mt-9">
        <h3 className="text-2xl md:text-3xl font-bold">
          What our customers are sayings
        </h3>
        <p className="mt-3">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. <br /> Achieve proper alignment, reduce pain, and strengthen your
          body with ease!
        </p>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: "50%",
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: false,
        }}
        autoplay={{
          display: 1000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((i) => {
          return (
            <SwiperSlide key={i.id}>
              <ReviewCard i={i}></ReviewCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Reviews;
