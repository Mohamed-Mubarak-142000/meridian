"use client";
import Image from "next/image";
import React, { useState } from "react";

const ImageDetail = () => {
  const listImage = [
    { id: 1, image: "/slider1.png" },
    { id: 2, image: "/slider2.png" },
    { id: 3, image: "/slider3.png" },
    { id: 4, image: "/slider4.png" },
  ];

  const [currentImage, setCurrentImage] = useState(listImage[0].image);

  const renderImage = (image) => {
    return <Image src={image} alt="collection" fill objectFit="contain" />;
  };

  return (
    <section className="w-full lg:w-[50%] my-2 lg:my-10 border border-[#eee] p-2">
      <div className="w-full h-[500px] relative">
        {renderImage(currentImage)}
      </div>

      <div className=" w-full flex items-center justify-evenly gap-5 rounded my-5 p-2">
        {listImage.map((item) => (
          <div
            onClick={() => setCurrentImage(item.image)}
            className="w-[100px] h-[100px] relative cursor-pointer"
            key={item.id}
          >
            <Image
              src={item.image}
              alt="image-slide"
              fill
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageDetail;
