import React from "react";
import SwiperProducts from "./SwiperProducts";

const PopularProduct = () => {
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
    <section className="container my-5">
      <div className="w-full flex items-center justify-center flex-col gap-2 my-5">
        <h1 className="capitalize text-[40px] font-bold">
          Shop Our Other Popular Sets
        </h1>
      </div>

      <SwiperProducts slides={slides} />
    </section>
  );
};

export default PopularProduct;
