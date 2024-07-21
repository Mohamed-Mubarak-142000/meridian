import React from "react";
import OneCollection from "./OneCollection";

const TopCollections = ({ collectionsList }) => {
  return (
    <section className="container my-10 flex items-center justify-center xl:justify-center gap-1 flex-wrap">
      {collectionsList.map((item, index) => (
        <OneCollection
          key={item.id}
          item={item}
          isFirst={index === 0} // Mark the first item as `isFirst`
        />
      ))}
    </section>
  );
};

export default TopCollections;
