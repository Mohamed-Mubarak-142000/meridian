import Image from "next/image";
import React from "react";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      headerSer: "8 year guarantee",
      paragSer: "For your 'peace' of mind",
      imageSer: "/gurentate.png",
    },
    {
      id: 2,
      headerSer: "Rust Free",
      paragSer: "Quality Materials",
      imageSer: "/rustfree.png",
    },
    {
      id: 3,
      headerSer: "PREMIUM SERVICE",
      paragSer: "Premium delivery available",
      imageSer: "/services.png",
    },
  ];
  return (
    <section className="container my-10 min-h-[300px] p-5 flex gap-10 lg:gap-0 items-center flex-wrap bg-color_green">
      {servicesData.map((item) => {
        return (
          <div
            key={item.id}
            className={`w-full lg:w-1/2 xl:w-1/3 flex items-center justify-center flex-col gap-2 py-5 ${
              item.id === 3 ? "" : "border-0 xl:border-r border-text_link_light"
            } `}
          >
            <div className="relative w-[150px] h-[100px] my-2">
              <Image
                src={item.imageSer}
                alt={`image-${item.id}`}
                className="object-contain"
                fill
              />
            </div>
            <h4 className="tracking-[5px] uppercase text-text_white">
              {item.headerSer}
            </h4>
            <p className="text-text_link_light">{item.paragSer}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Services;
