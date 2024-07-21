import Image from "next/image";
import Link from "next/link";
import React from "react";

const OneProduct = ({ item }) => {
  return (
    <Link href={"/productDetails"} className="w-full lg:w-[300px] p-5 rounded">
      <div className="relative w-full h-[250px] ">
        <Image src={item.imageSlider} alt="image" fill objectFit="contain" />
      </div>

      <div className="flex flex-col gap-2">
        <h2>{item.name}</h2>
        <p className="flex items-center gap-2">
          <span className="text-bg_btn">{item.discount}</span>
          <span className="text-text_link_light">{item.price}</span>
          <span className="text-bg_btn">40% off</span>
        </p>
      </div>
    </Link>
  );
};

export default OneProduct;
