import Image from "next/image";
import React from "react";

const WriteAbout = () => {
  return (
    <section className="container my-10 p-5 flex items-center justify-center flex-wrap-reverse xl:flex-wrap gap-5">
      <div className="w-full xl:w-[45%]">
        <h2 className="font-bold my-3 text-text_black uppercase text-[25px] xl:text-[35px] tracking-[2px] xl:tracking-[5px]">
          FURNITURE TO WRITE HOME ABOUT
        </h2>
        <p className="text-sm font-300 my-3 text-[18px] xl:text-[20px] leading-8 xl:tracking-[1px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nisi
          facilis a ducimus distinctio minus illum sunt modi ullam blanditiis ea
          velit dolor commodi nobis nihil libero, rerum tempore cum? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Illo nisi facilis a
          ducimus distinctio minus illum sunt modi ullam blanditiis ea velit
          dolor commodi nobis nihil libero, rerum tempore cum?
        </p>

        <div className="flex items-center justify-start gap-3 my-5">
          <div className="w-[200px] h-[30px] relative">
            <Image src="/stars.png" alt="star-image" fill objectFit="contain" />
          </div>

          <h5 className="uppercase tracking-[5px] font-200">wade warren</h5>
        </div>
      </div>

      <div className="relative w-full xl:w-[45%] h-[400px]">
        <Image
          src="/writeAboutHome.png"
          fill
          objectFit="contain"
          alt="about-image"
        />
        <div className="absolute bottom-[-10%] left-[50%] transform translate-x-[-50%] flex items-center justify-center">
          <Image
            src="/arrowleft.png"
            width={40}
            height={40}
            objectFit="contain"
            alt="arrow"
          />

          <span>10</span>

          <Image
            src="/arrowRight.png"
            width={40}
            height={40}
            objectFit="contain"
            alt="arrow"
          />
        </div>
      </div>
    </section>
  );
};

export default WriteAbout;
