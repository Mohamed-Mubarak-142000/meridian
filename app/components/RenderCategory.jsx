"use client";
import { useState } from "react";
import OneCategory from "./OneCategory";

const RenderCategory = ({ collections }) => {
  const dataFeatures = [
    { id: 1, name: "spring" },
    { id: 2, name: "sale" },
    { id: 3, name: "new arrival" },
    { id: 4, name: "clearance" },
  ];

  const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(100);

  const handleMinPriceChange = (e) => {
    const value = Math.min(e.target.value, maxPrice - 10);
    setMinPrice(value);
  };

  return (
    <div className="w-full">
      <h2 className="capitalize text-[20px] ">category</h2>
      {collections.map((item) => (
        <OneCategory key={item.id} categoryData={item.categories} />
      ))}
      <hr />
      <h2 className="capitalize text-[20px] mt-5">featured</h2>
      <ul className="ms-5 leading-8 capitalize">
        {dataFeatures.map((item) => {
          return (
            <li key={item.id}>
              <fieldset>
                <legend className="sr-only">{item.name}</legend>

                <div className="space-y-2">
                  <label
                    htmlFor={`${item.name}-${item.id}`}
                    className="flex cursor-pointer items-start gap-4"
                  >
                    <div className="flex items-center">
                      &#8203;
                      <input
                        type="checkbox"
                        className="size-4 rounded"
                        id={`${item.name}-${item.id}`}
                      />
                    </div>

                    <div>
                      <strong className="font-medium">{item.name}</strong>
                    </div>
                  </label>
                </div>
              </fieldset>
            </li>
          );
        })}
      </ul>

      <hr />

      <div className="sliderContainer">
        <h2 className="capitalize text-[20px]">price range</h2>
        <div className="priceDisplay">
          <span>{`$${minPrice}`}</span> - <span>{`$${maxPrice}`}</span>
        </div>
        <input
          type="range"
          min="50"
          max="100"
          value={minPrice}
          onChange={handleMinPriceChange}
          className="rangeInput"
        />
      </div>
    </div>
  );
};

export default RenderCategory;
