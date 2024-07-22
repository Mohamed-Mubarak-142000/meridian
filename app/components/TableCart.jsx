import React from "react";
import Image from "next/image";

const TableCart = () => {
  return (
    <table className="w-full divide-y-2 divide-text_link_light bg-white text-sm">
      <thead className="ltr:text-left rtl:text-right">
        <tr>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-text_black">
            products
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-text_black">
            quantity
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-text_black">
            total
          </th>
          <th className="whitespace-nowrap px-4 py-2 font-medium text-text_black"></th>
        </tr>
      </thead>

      <tbody className="divide-y divide-text_link_light">
        <tr>
          <td className="whitespace-nowrap lg:px-4 lg:py-2 font-medium text-text_black flex items-center gap-2">
            <Image
              src="/collection4.png"
              alt="image"
              width={100}
              height={100}
              objectFit="cover"
            />
            <p className="text-[14px] text-text_link_light hidden md:block">
              Lorem ipsum dolor sit, amet consectetur.
            </p>
          </td>
          <td className="whitespace-nowrap px-4 lg:py-2 text-text_black">
            <div className="border border-text_link_light rounded flex items-center justify-center">
              <button
                type="button"
                className="p-1 text-center text-bold lg:text-[25px] me-2"
              >
                +
              </button>
              <span className="p-2 border-s border-x border-text_link_light">
                1
              </span>
              <button
                type="button"
                className="p-1 text-center text-bold lg:text-[25px] ms-2 border-text_link_light"
              >
                -
              </button>
            </div>
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-text_black">
            $1.500
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-text_black">
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </td>
        </tr>

        <tr>
          <td className="whitespace-nowrap lg:px-4 lg:py-2 font-medium text-text_black flex items-center gap-2">
            <Image
              src="/collection2.png"
              alt="image"
              width={100}
              height={100}
              objectFit="cover"
            />
            <p className="text-[14px] text-text_link_light hidden md:block">
              Lorem ipsum dolor sit, amet consectetur.
            </p>
          </td>
          <td className="whitespace-nowrap px-4 lg:py-2 text-text_black">
            <div className="border border-text_link_light rounded flex items-center justify-center">
              <button
                type="button"
                className="p-1 text-center text-bold lg:text-[25px] me-2"
              >
                +
              </button>
              <span className="p-2 border-s border-x border-text_link_light">
                1
              </span>
              <button
                type="button"
                className="p-1 text-center text-bold lg:text-[25px] ms-2 border-text_link_light"
              >
                -
              </button>
            </div>
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-text_black">
            $1.500
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-text_black">
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </td>
        </tr>

        <tr>
          <td className="whitespace-nowrap lg:px-4 lg:py-2 font-medium text-text_black flex items-center gap-2">
            <Image
              src="/collection3.png"
              alt="image"
              width={100}
              height={100}
              objectFit="cover"
            />
            <p className="lg:text-[14px] text-text_link_light hidden md:block">
              Lorem ipsum dolor sit, amet consectetur.
            </p>
          </td>
          <td className="whitespace-nowrap px-4 lg:py-2 text-text_black">
            <div className="border border-text_link_light rounded flex items-center justify-center">
              <button
                type="button"
                className="p-1 text-center text-bold lg:text-[25px] me-2"
              >
                +
              </button>
              <span className="p-2 border-s border-x border-text_link_light">
                1
              </span>
              <button
                type="button"
                className="p-1 text-center text-bold lg:text-[25px] ms-2 border-text_link_light"
              >
                -
              </button>
            </div>
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-text_black">
            $1.500
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-text_black">
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
