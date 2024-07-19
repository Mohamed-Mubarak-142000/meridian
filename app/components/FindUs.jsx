import Image from "next/image";
import React from "react";

const FindUs = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="w-full relative h-[300px]">
          <Image src={"/explor1.png"} alt="col-1" fill objectFit="cover" />

          <button
            className="absolute top-[50%] left-[30%] border text-[20px] p-2 font-thin outline-none border-text_white text-text_white uppercase tracking-[3px] "
            type="button"
          >
            view product
          </button>
        </div>

        <div className="w-full relative h-[300px]">
          <Image src={"/collection2.png"} alt="col-1" fill objectFit="cover" />
        </div>

        <div className="w-full relative h-[300px]">
          <Image src={"/collection3.png"} alt="col-1" fill objectFit="cover" />
        </div>

        <div className="w-full relative h-[300px]">
          <Image src={"/collection4.png"} alt="col-1" fill objectFit="cover" />
        </div>
      </section>
    </>
  );
};

export default FindUs;
