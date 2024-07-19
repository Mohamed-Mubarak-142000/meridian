import React from "react";
import TopHeader from "./TopHeader";
import LeftLinks from "./LeftLinks";
import Image from "next/image";
import RightLinks from "./RightLinks";

const Header = () => {
  return (
    <section className="shadow-md">
      <TopHeader />
      <div className="container py-4 flex items-center justify-evenly ">
        <LeftLinks />
        <div className="relative w-2/3 lg:w-1/3 h-[40px]">
          <Image
            src="/logo.png"
            fill
            className="object-contain"
            alt="logo_image"
          />
        </div>
        <RightLinks />
      </div>
    </section>
  );
};

export default Header;
