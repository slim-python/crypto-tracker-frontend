import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SingleSwiperCard from "./SingleSwiperCard";
import PortfolioIcon from "../../assests/protfolio-icon.svg";
import takeaQuizIcon from "../../assests/take-a-quiz.svg";
import lastSliderIcon from "../../assests/2nd-slider-image.svg";

const TopSwiper = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div className="p-0 sm:px-20 sm:py-2 mt-4 topSwiperComponent sm:mx-[85px]">
        <Swiper
          modules={[Pagination, Navigation]}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          className="mySwiper"
          //   className="w-full"
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <SingleSwiperCard
              title={"Take a quiz"}
              desc={"Track your trades in one place, not all over the place"}
              image={takeaQuizIcon}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSwiperCard
              title={"Portfolio"}
              desc={"Track your trades in one place, not all over the place"}
              image={PortfolioIcon}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSwiperCard
              title={"Portfolio"}
              desc={"Track your trades in one place, not all over the place"}
              image={lastSliderIcon}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSwiperCard
              title={"Take a quiz"}
              desc={"Track your trades in one place, not all over the place"}
              image={takeaQuizIcon}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSwiperCard
              title={"Portfolio"}
              desc={"Track your trades in one place, not all over the place"}
              image={PortfolioIcon}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSwiperCard
              title={"Portfolio"}
              desc={"Track your trades in one place, not all over the place"}
              image={lastSliderIcon}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default TopSwiper;
