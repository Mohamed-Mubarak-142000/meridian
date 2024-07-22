import Image from "next/image";
import React from "react";

const ReviewsProduct = () => {
  const dataReview = [
    {
      id: 1,
      name: "Darrell Steward",
      buyer: "Verified Buy",
      desc: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod me placeat facere possimus, omnis voluptas assumenda.",
      opining: "I Like This Product!",
      date: "February 1st, 2022",
    },
    {
      id: 2,
      name: "Darrell Steward",
      buyer: "Verified Buy",
      desc: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod me placeat facere possimus, omnis voluptas assumenda.",
      opining: "I Like This Product!",
      date: "February 1st, 2022",
    },
    {
      id: 3,
      name: "Darrell Steward",
      buyer: "Verified Buy",
      desc: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod me placeat facere possimus, omnis voluptas assumenda.",
      opining: "I Like This Product!",
      date: "February 1st, 2022",
    },

    {
      id: 4,
      name: "Darrell Steward",
      buyer: "Verified Buy",
      desc: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod me placeat facere possimus, omnis voluptas assumenda.",
      opining: "I Like This Product!",
      date: "February 1st, 2022",
    },
  ];
  return (
    <section className="container my-5">
      <div className="flex items-center justify-between my-2">
        <h1 className="text-[20px] xl:text-[35px] text-text_black capitalize ">
          review (168)
        </h1>
        <button
          type="button"
          className="text-text_white capitalize text-[14px] xl:text-[16px] py-3 px-5 bg-color_green"
        >
          write a review
        </button>
      </div>

      {dataReview.map((item) => {
        return (
          <section
            key={item.id}
            className="w-full border-b xl:border-0 flex items-start justify-between flex-wrap xl:flex-nowrap gap-5 my-10 text-text_link_light"
          >
            {/* first col  */}
            <div className="flex flex-col gap-3 w-full lg:w-1/4">
              <h3>{item.name}</h3>
              <p className="flex items-center gap-2">
                <span>{item.buyer}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </p>
              <div className="relative w-[100px] h-[20px]">
                <Image src="/stars.png" alt="stars" fill objectFit="contain" />
              </div>
            </div>
            {/* second col  */}
            <div className="flex flex-col gap-2 w-full lg:w-1/2">
              <span>{item.opining}</span>
              <p>{item.desc}</p>
            </div>
            {/* third col  */}
            <div className="flex flex-col gap-2 w-full lg:w-1/4">
              <span>{item.date.split(",")[0]}</span>
              <span>{item.date.split(",")[1]}</span>
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default ReviewsProduct;
