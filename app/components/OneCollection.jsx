import Image from "next/image";
import Link from "next/link";
import React from "react";

const OneCollection = ({ item, isFirst }) => {
  return (
    <Link
      href={"/collection"}
      className={`relative ${
        isFirst
          ? "w-full md:w-[45%] xl:w-[65%]"
          : "w-full md:w-[45%] xl:w-[450px]"
      } 
     my-2 h-[400px] `}
    >
      <Image
        src={item.imageCol}
        alt={`collection-${item.id}`}
        fill
        className="object-cover "
      />
      <div className="absolute bottom-0 left-0 w-full bg-bg_block_image py-5 text-center uppercase tracking-[5px] text-text_white">
        {`collection ${item.id}`}
      </div>
    </Link>
  );
};

export default OneCollection;
