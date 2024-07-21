import Image from "next/image";
import React from "react";

const OurProducts = () => {
  return (
    <section
      className="relative bg-cover bg-no-repeat h-[80vh] object-contain"
      style={{ backgroundImage: "url('/commited.png')" }}
    >
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

      <div className="absolute w-[90%] xl:w-[70%] mx-auto h-[443px] top-[50%] left-[50%] transform flex flex-col items-center justify-center gap-3 translate-x-[-50%] translate-y-[-50%] text-center">
        <div className="w-[100px] h-[100px] relative">
          <Image
            src="/pen.png"
            alt="Pen Image"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <p className="font-normal text-[20px] tracking-[5px] text-text_white">
          COMMITTED TO EUROPEAN MANUFACTURING
        </p>

        <p className="font-normal text-[30px] xl:text-[40px] text-text_white">
          Our products are made with high quality European fabric and sewn by a
          small team of craftspeople in Europe.
        </p>
      </div>
    </section>
  );
};

export default OurProducts;
