import React from "react";
import OneProduct from "./OneProduct";

const RenderAllCollection = ({ collections }) => {
  return (
    <section className="w-[75%] p-5 flex md:justify-between items-center flex-wrap xl:justify-center gap-5">
      {collections.map((item) => {
        return <OneProduct item={item} key={item.id} />;
      })}
    </section>
  );
};

export default RenderAllCollection;
