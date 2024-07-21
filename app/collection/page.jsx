import React from "react";
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

  return (
    <section className="container xl:my-10">
      <BreadCrumb pathname1={"collection"} pathname2={"products"} />

      <div className="w-full h-[320px] relative xl:my-5">
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
          alt="help-image"
          fill
          objectFit="cover "
        />

        <div className="container px-5 lg:px-12  absolute top-[50%] transform translate-y-[-50%] left-[50%] translate-x-[-50%] flex flex-col items-center justify-center gap-3">
          <h2 className=" text-[20px] xl:text-[35px] capitalize text-text_white ">
            Two Day Sale - Up To 40% Off{" "}
          </h2>

          <h2 className="text-[20px] xl:text-[35px] capitalize text-text_white ">
            20 : 10 : 08 : 20
          </h2>

          <p className="text-text_white font-normal text-[16px] tracking-[5px] ">
            Ending Soon!
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between flex-wrap-reverse">
        <h2 className="text-[20px] mt-3 xl:text-[30px] font-semibold capitalize">
          collection
        </h2>
        <p className="w-1/2 lg:w-fit text-[12px] lg:text-[18px] mt-3">
          showing-1-24 of 557 Products
        </p>

        <div className="w-1/2 lg:hidden p-2 flex items-center gap-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>
          <span className="text-[16px] capitalize "> filter</span>
        </div>

        <div className="flex items-center w-1/2 lg:w-fit">
          <label
            htmlFor="HeadlineAct"
            className="text-sm w-[100px] hidden lg:block text-text_black"
          >
            Sort by
          </label>

          <select
            name="HeadlineAct"
            id="HeadlineAct"
            className=" w-full border-text_link_light border p-2 text-text_black sm:text-sm"
          >
            <option value="">Please select</option>
            <option value="JM">John Mayer</option>
            <option value="SRV">Stevie Ray Vaughn</option>
            <option value="JH">Jimi Hendrix</option>
            <option value="BBK">B.B King</option>
            <option value="AK">Albert King</option>
            <option value="BG">Buddy Guy</option>
            <option value="EC">Eric Clapton</option>
          </select>
        </div>
      </div>

      <div className="flex items-start justify-between gap-2 my-10">
        <RenderCategory collections={collections} />
        <RenderAllCollection collections={collections} />
      </div>
    </section>
  );
};

export default page;
