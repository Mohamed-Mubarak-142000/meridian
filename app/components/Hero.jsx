import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover  bg-no-repeat h-[80vh] object-contain"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25 rtl:sm:bg-gradient-to-l"></div>

      <div className="absolute w-full text-center lg:text-left md:w-[90%] xl:w-[70%] mx-auto h-[350px] lg:h-[443px] top-[60%] transform translate-y-[-50%] left-[20%] translate-x-[-20%]">
        <p className=" font-semibold text-[35px] lg:text-[50px] text-text_white">
          MODERN, CONTEMPORARY OUTDOOR FURNITURE
        </p>

        <p className="hidden lg:block font-normal text-[20px] text-text_link_light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo et rem
          laboriosam? Quia vitae modi incidunt quibusdam asperiores, reiciendis
          porro amet veritatis rerum est repellat obcaecati harum eaque commodi
          veniam quis enim.
        </p>

        <div className="w-[300px] mx-auto lg:mx-0 h-[60px] my-5">
          <button type="button" className="btn-styling">
            shop collections
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
