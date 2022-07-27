import React, { useState } from "react";
import { ProductCard } from "./ProductCard";
import { IProduct } from "../../../globalTypes";
import SwiperCore, {
  Pagination,
  Navigation,
  Mousewheel,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SliderStyle.scss";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Loader from "../../../Components/Loader";

SwiperCore.use([Pagination, Navigation, Mousewheel, Autoplay]);

export default function Slider(props: { data: IProduct[] }): JSX.Element {
  const initialSlide = Number(window.sessionStorage.getItem("sliderIndex"));

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  const [activeSlideIndex, setactiveSlideIndex] = useState(initialSlide);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Swiper
        onClick={(swiper) => {
          // console.log(swiper);
          if (swiper.activeIndex < swiper.clickedIndex) {
            swiper.slideNext(1000, false);
          }
          if (swiper.activeIndex > swiper.clickedIndex) {
            swiper.slidePrev(1000, false);
          }
        }}
        onSlideChange={(swiper) => {
          setactiveSlideIndex(swiper.activeIndex);
          setIsLoading(true);
          window.sessionStorage.setItem(
            "sliderIndex",
            String(swiper.activeIndex)
          );
        }}
        pagination={pagination}
        navigation={true}
        className="mySwiper"
        speed={500}
        spaceBetween={10}
        initialSlide={initialSlide | 0}
        mousewheel={true}
        // autoplay={{
        //   delay: 10000,
        // }}
        centeredSlides={true}
        breakpoints={{
          1025: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {props.data.map((el, index) => (
          <SwiperSlide key={el.name}>
            {index == activeSlideIndex && isLoading && <Loader />}
            <ProductCard
              data={el}
              index={index}
              activeSlide={activeSlideIndex}
              setIsLoading={setIsLoading}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
