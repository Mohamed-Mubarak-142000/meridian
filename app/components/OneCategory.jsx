"use client";
import React, { useState } from "react";

const OneCategory = ({ categoryData }) => {
  const [showCat, setShowCat] = useState(false);
  const handleToggle = () => {
    setShowCat(!showCat);
  };
  return (
    <div className="my-3">
      <h1
        className=" capitalize tracking-[1px] flex items-center justify-between p-2 cursor-pointer"
        onClick={handleToggle}
      >
        <span>{categoryData.titleCat}</span>
        <span>
          {showCat ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          ) : (
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          )}
        </span>
      </h1>
      {showCat ? (
        <ul className="ms-5 leading-8 capitalize my-3">
          {categoryData.categoriesAll.map((item) => {
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
      ) : null}
    </div>
  );
};

export default OneCategory;
