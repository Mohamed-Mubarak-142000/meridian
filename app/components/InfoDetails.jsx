"use client";
import Image from "next/image";
import React, { useState } from "react";

const InfoDetails = () => {
  const [contentTab, setContentTab] = useState(1);
  const linksTabs = [
    {
      id: 1,
      name: "what's included?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam amet justo mi pharetra, consectetur facilisis. Velit est proin orci tristique nunc varius. Id consectetur nibh at aliquet habitant proin volutpat adipiscing nisl. Facilisi donec tellus aliquet sed at non amet, massa.",
    },
    {
      id: 2,
      name: "Delivery",
      desc: "Delivery:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam amet justo mi pharetra, consectetur facilisis. Velit est proin orci tristique nunc varius. Id consectetur nibh at aliquet habitant proin volutpat adipiscing nisl. Facilisi donec tellus aliquet sed at non amet, massa.",
    },
    {
      id: 3,
      name: "Dimensions",
      desc: "Dimensions:Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam amet justo mi pharetra, consectetur facilisis. Velit est proin orci tristique nunc varius. Id consectetur nibh at aliquet habitant proin volutpat adipiscing nisl. Facilisi donec tellus aliquet sed at non amet, massa.",
    },
    {
      id: 4,
      name: "Finance",
      desc: " Finance: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam amet justo mi pharetra, consectetur facilisis. Velit est proin orci tristique nunc varius. Id consectetur nibh at aliquet habitant proin volutpat adipiscing nisl. Facilisi donec tellus aliquet sed at non amet, massa.",
    },
  ];

  const renderLinksTab = () => {
    return linksTabs.map((item) => (
      <button
        key={item.id}
        type="button"
        className={` text-sm ${
          contentTab === item.id
            ? "transition duration-150 border-b border-b-text_link_dark text-text_link_dark"
            : ""
        }`}
        onClick={() => setContentTab(item.id)}
      >
        {item.name}
      </button>
    ));
  };

  const renderContent = () => {
    const itemContent = linksTabs.find((item) => item.id === contentTab);
    return itemContent ? <p>{itemContent.desc}</p> : null;
  };
  return (
    <section className="">
      <h2 className="text-[30px] my-5">Alma Velvet Armless</h2>
      <div className="flex items-center gap-2 my-5">
        <span className="text-[#fe595e]">£1,500.00</span>
        <span className="text-text_link_light line-through">£2,500.00</span>
        <span className="text-[#fe595e]">40% Off</span>
      </div>
      <div className="flex items-center gap-1">
        <div className="w-[150px] h-[20px] relative">
          <Image src={"/stars.png"} alt="stars" fill objectFit="contain" />
        </div>
        <span>500,(200 customer review)</span>
      </div>
      <div className="my-3">
        <span className="text-text_black capitalize text-[16px] font-semibold">
          colors:
        </span>
        <ul className="flex items-center gap-3 my-2">
          <li className="w-[35px] h-[35px] rounded-full bg-bg_btn"></li>
          <li className="w-[35px] h-[35px] rounded-full bg-text_link_dark"></li>
          <li className="w-[35px] h-[35px] rounded-full bg-text_black"></li>
          <li className="w-[35px] h-[35px] rounded-full bg-color_green"></li>
          <li className="w-[35px] h-[35px] rounded-full bg-bg_block_image"></li>
        </ul>
      </div>

      <div className="w-full h-[60px] my-5">
        <button type="button" className="btn-styling">
          add to cart
        </button>
      </div>

      <div className="flex flex-col items-center justify-center text-center tracking-[5px] uppercase gap-5 p-3 w-full lg:w-2/3 h-[150px] mx-auto">
        <p>Guaranteed Safe Checkout</p>
        <ul className="flex items-center">
          <li>
            <Image
              src="/card1.png"
              alt="card1"
              width={50}
              height={50}
              objectFit="contain"
            />
          </li>
          <li>
            <Image
              src="/card4.png"
              alt="card1"
              width={50}
              height={50}
              objectFit="contain"
            />
          </li>
          <li>
            <Image
              src="/card2.png"
              alt="card1"
              width={50}
              height={50}
              objectFit="contain"
            />
          </li>
          <li>
            <Image
              src="/card3.png"
              alt="card1"
              width={50}
              height={50}
              objectFit="contain"
            />
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-center gap-5 w-full bg-[#eee] p-2 text-center">
        <div className="relative w-[100px] h-[100px]">
          <Image src="/delivery.png" alt="delivery" fill objectFit="contain" />
        </div>
        <div className="flex flex-col gap-2 font-normal text-[13px] items-center justify-center ">
          <p className="uppercase tracking-[5px]">Free UK Delivery</p>
          <p>Order now and enjoy free delivery on us! Restrictions apply.</p>
        </div>
      </div>

      <div className=" my-5 p-2 w-[450px] flex items-center text-text_link_light gap-5">
        {renderLinksTab()}
      </div>
      <div className="text-sm tracking-[2px] p-2 w-[450px] ">{renderContent()}</div>
    </section>
  );
};

export default InfoDetails;
