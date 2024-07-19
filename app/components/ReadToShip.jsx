"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const ReadToShip = () => {
  const slides = [
    {
      id: 7,
      imageSlider: "/slider3.png",
      name: "clarion dining chair",
      price: "$795.00",
    },
    {
      id: 1,
      imageSlider: "/slider1.png",
      name: "clarion dining chair",
      price: "$795.00",
    },
    {
      id: 2,
      imageSlider: "/slider2.png",
      name: "clarion dining chair",
      price: "$795.00",
    },
    {
      id: 3,
      imageSlider: "/slider3.png",
      name: "clarion dining chair",
      price: "$795.00",
    },
    {
      id: 4,
      imageSlider: "/slider4.png",
      name: "clarion dining chair",
      price: "$795.00",
    },
    {
      id: 6,
      imageSlider: "/slider2.png",
      name: "clarion dining chair",
      price: "$795.00",
    },
    {
      id: 5,
      imageSlider: "/slider1.png",
      name: "clarion dining chair",
      price: "$795.00",
    },
    {
      id: 8,
      imageSlider: "/slider4.png",
      name: "clarion dining chair",
      price: "$795.00",
    },
  ];

  return (
    <section className="container my-10">
      <div className="w-full flex items-center justify-center flex-col gap-2 my-5">
        <h1 className="capitalize text-[40px] font-bold">Ready To Ship</h1>
        <p className="font-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est id
          pretium pellentesque leo. Lorem.
        </p>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={4}
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
            className="flex items-center w-[250px] justify-center"
          >
            <div className="relative w-[250px] mx-auto h-[200px]">
              <Image
                src={slide.imageSlider}
                alt={`Slide ${slide.id}`}
                fill
                objectFit="contain"
              />
            </div>

            <h4>{slide.name}</h4>
            <h5 className="text-text_link_light my-1">{slide.price}</h5>

            <div className="w-full h-[60px] my-5">
              <Link
                href={"/productDetails"}
                className="btn-styling p-3 text-sm tracking-[1px]"
              >
                view details products
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ReadToShip;
