"use client";
import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Image from "next/image";
import RenderCategory from "../components/RenderCategory";
import RenderAllCollection from "../components/RenderAllCollection";

const page = () => {
  const collections = [
    {
      id: 7,
      imageSlider: "/slider3.png",
      name: "clarion dining chair",
      price: "$795.00",
      discount: "$2,500.00",
      categories: {
        titleCat: "new arrivals",
        categoriesAll: [
          { id: 1, name: "sofa" },
          { id: 2, name: "love seats" },
          { id: 3, name: "chairs" },
          { id: 4, name: "sectionals" },
          { id: 5, name: "ottomans" },
          { id: 6, name: "chaise lounges" },
          { id: 7, name: "collections" },
        ],
      },
    },
    {
      id: 1,
      imageSlider: "/slider1.png",
      name: "clarion dining chair",
      price: "$795.00",
      discount: "$2,500.00",
      categories: {
        titleCat: "Living Room",
        categoriesAll: [
          { id: 1, name: "sofa" },
          { id: 2, name: "love seats" },
          { id: 3, name: "chairs" },
          { id: 4, name: "sectionals" },
          { id: 5, name: "ottomans" },
          { id: 6, name: "chaise lounges" },
          { id: 7, name: "collections" },
        ],
      },
    },
    {
      id: 2,
      imageSlider: "/slider2.png",
      name: "clarion dining chair",
      price: "$795.00",
      discount: "$2,500.00",
      categories: {
        titleCat: "Kitchen & Dining Rooms",
        categoriesAll: [
          { id: 1, name: "sofa" },
          { id: 2, name: "love seats" },
          { id: 3, name: "chairs" },
          { id: 4, name: "sectionals" },
          { id: 5, name: "ottomans" },
          { id: 6, name: "chaise lounges" },
          { id: 7, name: "collections" },
        ],
      },
    },
    {
      id: 3,
      imageSlider: "/slider3.png",
      name: "clarion dining chair",
      price: "$795.00",
      discount: "$2,500.00",
      categories: {
        titleCat: "new arrivals",
        categoriesAll: [
          { id: 1, name: "sofa" },
          { id: 2, name: "love seats" },
          { id: 3, name: "chairs" },
          { id: 4, name: "sectionals" },
          { id: 5, name: "ottomans" },
          { id: 6, name: "chaise lounges" },
          { id: 7, name: "collections" },
        ],
      },
    },
    {
      id: 4,
      imageSlider: "/slider4.png",
      name: "clarion dining chair",
      price: "$795.00",
      discount: "$2,500.00",
      categories: {
        titleCat: "Bedrooms",
        categoriesAll: [
          { id: 1, name: "sofa" },
          { id: 2, name: "love seats" },
          { id: 3, name: "chairs" },
          { id: 4, name: "sectionals" },
          { id: 5, name: "ottomans" },
          { id: 6, name: "chaise lounges" },
          { id: 7, name: "collections" },
        ],
      },
    },
    {
      id: 6,
      imageSlider: "/slider2.png",
      name: "clarion dining chair",
      price: "$795.00",
      discount: "$2,500.00",
      categories: {
        titleCat: "Accents",
        categoriesAll: [
          { id: 1, name: "sofa" },
          { id: 2, name: "love seats" },
          { id: 3, name: "chairs" },
          { id: 4, name: "sectionals" },
          { id: 5, name: "ottomans" },
          { id: 6, name: "chaise lounges" },
          { id: 7, name: "collections" },
        ],
      },
    },
    {
      id: 5,
      imageSlider: "/slider1.png",
      name: "clarion dining chair",
      price: "$795.00",
      discount: "$2,500.00",
      categories: {
        titleCat: "Occasional Tables",
        categoriesAll: [
          { id: 1, name: "sofa" },
          { id: 2, name: "love seats" },
          { id: 3, name: "chairs" },
          { id: 4, name: "sectionals" },
          { id: 5, name: "ottomans" },
          { id: 6, name: "chaise lounges" },
          { id: 7, name: "collections" },
        ],
      },
    },
    {
      id: 8,
      imageSlider: "/slider4.png",
      name: "clarion dining chair",
      price: "$795.00",
      discount: "$2,500.00",
      categories: {
        titleCat: "Office/Home Office",
        categoriesAll: [
          { id: 1, name: "sofa" },
          { id: 2, name: "love seats" },
          { id: 3, name: "chairs" },
          { id: 4, name: "sectionals" },
          { id: 5, name: "ottomans" },
          { id: 6, name: "chaise lounges" },
          { id: 7, name: "collections" },
        ],
      },
    },
    {
      id: 8,
      imageSlider: "/slider4.png",
      name: "clarion dining chair",
      price: "$795.00",
      discount: "$2,500.00",
      categories: {
        titleCat: "Outdoor Furniture",
        categoriesAll: [
          { id: 1, name: "sofa" },
          { id: 2, name: "love seats" },
          { id: 3, name: "chairs" },
          { id: 4, name: "sectionals" },
          { id: 5, name: "ottomans" },
          { id: 6, name: "chaise lounges" },
          { id: 7, name: "collections" },
        ],
      },
    },
  ];
  const [showCat, setShowCat] = useState(false);

  const handleToggleCat = () => {
    setShowCat(!showCat);
  };

  return (
    <section className="container mx-auto xl:my-10 px-4">
      <BreadCrumb pathname1={"collection"} pathname2={"products"} />

      <div className="relative h-[320px] my-5">
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
          }}
        ></div>
        <Image
          src="/collctionPage.png"
          alt="collection-background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center text-text_white">
          <h2 className="text-[20px] xl:text-[35px] capitalize">
            Two Day Sale - Up To 40% Off
          </h2>
          <h2 className="text-[20px] text-text_white xl:text-[35px] capitalize">
            20 : 10 : 08 : 20
          </h2>
          <p className="font-normal text-[16px] text-text_white tracking-[5px]">
            Ending Soon!
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-start justify-between">
        <h2 className="text-[20px] mt-3 xl:text-[30px] font-semibold capitalize">
          Collection
        </h2>
        <p className="w-full lg:w-auto text-[12px] lg:text-[18px] mt-3">
          Showing 1-24 of 557 Products
        </p>

        <div className="w-full lg:w-[45%] my-2 relative lg:hidden">
          <p
            className="p-[7px] rounded-md flex items-center gap-2 border border-text_link_light cursor-pointer"
            onClick={handleToggleCat}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <span className="text-[16px] capitalize">Filter</span>
          </p>

          <div
            className={`absolute z-40 top-14 w-full border overflow-hidden border-text_link_light rounded-lg p-2 bg-text_white shadow-md transition-transform duration-300 ${
              showCat ? "translate-x-0 " : "-translate-x-full left-[-20%]"
            }`}
          >
            <RenderCategory collections={collections} />
          </div>
        </div>

        <div className="w-full lg:w-auto flex items-center">
          <label
            htmlFor="sortBy"
            className="text-sm hidden lg:block text-text_black"
          >
            Sort by
          </label>
          <select
            name="sortBy"
            id="sortBy"
            className="w-full lg:w-auto border-text_link_light border p-2 rounded-md text-text_black sm:text-sm"
          >
            <option value="">Please select</option>
            <option value="">Please select</option>
            <option value="JM">John Mayer</option>
            <option value="SRV">Stevie Ray Vaughn</option>
            <option value="JH">Jimi Hendrix</option>
            <option value="BBK">B.B King</option>
            <option value="AK">Albert King</option>
            <option value="BG">Buddy Guy</option>
            <option value="EC">Eric Clapton</option>{" "}
          </select>
        </div>
      </div>

      <div className="flex items-start justify-center xl:justify-between my-10">
        <div className="hidden lg:block xl:w-[25%]">
          <RenderCategory collections={collections} />
        </div>
        <RenderAllCollection collections={collections} />
      </div>
    </section>
  );
};

export default page;
