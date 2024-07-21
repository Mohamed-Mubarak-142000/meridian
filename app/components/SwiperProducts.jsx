"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperProducts = ({ slides }) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      navigation={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="py-5 my-20"
    >
      {slides.map((slide) => (
        <SwiperSlide
          key={slide.id}
          className="flex flex-col items-center w-full xl:w-[250px] justify-center"
        >
          <div className="relative w-full xl:w-[250px] mx-auto h-[200px]">
            <Image
              src={slide.imageSlider}
              alt={`Slide ${slide.id}`}
              fill
              objectFit="contain"
            />
          </div>

          <h4>{slide.name}</h4>
          <h5 className="text-text_link_light my-1">{slide.price}</h5>

          <div className="w-full h-[60px] my-5 mx-auto">
            <Link
              href={"/productDetails"}
              className="btn-styling p-3 text-sm tracking-[1px] w-full text-center"
            >
              View Details Products
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperProducts;
