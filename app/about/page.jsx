import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section>
      <div className="w-full h-[500px] relative">
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
        <Image src="/about.png" alt="help-image" fill objectFit="cover " />

        <div className="container w-full lg:w-[50%] text-center px-5 lg:px-12 absolute top-[50%] transform translate-y-[-50%] left-[50%] translate-x-[-50%] flex flex-col items-center justify-center gap-3">
          <h2 className="text-[35px] capitalize text-text_white ">
            Meridian Furniture
          </h2>

          <h2 className="text-[16px] capitalize text-text_link_light ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
            rhoncus montes, sem lacus, sed sit sed. Scelerisque aliquam justo
            tincidunt vitae ultricies enim eget. Et sodales quis odio at risus
            semper. Et ante in.
          </h2>

          <div className="w-[320px] h-[60px] my-5">
            <button type="button" className="btn-styling ">
              See Our Collections
            </button>
          </div>
        </div>
      </div>

      <section className="flex items-start justify-between flex-wrap container my-10">
        <div className="w-full lg:w-[45%] h-[450px] relative">
          <Image src="/about2.png" alt="help-image" fill objectFit="contain " />
        </div>
        <div className="w-fll lg:w-[45%]">
          <h2 className="text-[35px] my-3">We Are Meridian</h2>
          <p className=" pe-0 lg:pe-12 leading-8 text-[16px] xl:text-[20px] font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            nulla a ut diam et, sapien dis. Iaculis turpis dui sed ipsum etiam.
            Habitant feugiat at enim pharetra. Lacus, dolor viverra amet purus
            nulla a, donec in egestas. Condimentum aenean odio pretium justo.
            Vitae in ut quam fermentum, eget. Luctus fermentum nulla magna eget
            at dapibus urna sit. Id non non arcu consequat at. Integer tortor
            interdum sit in quis fringilla euismod eros. Aliquam in enim morbi
            pulvinar. Sagittis accumsan pellentesque egestas ac massa sed sem.
            Mattis leo elementum dictum dolor faucibus. A sapien, nisi, justo
            euismod morbi.
          </p>
        </div>
      </section>
    </section>
  );
};

export default page;
