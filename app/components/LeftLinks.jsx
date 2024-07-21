"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef, useState } from "react";

const LeftLinks = () => {
  const pathname = usePathname();
  const links = [
    { id: 1, lName: "home", linkPath: "" },
    { id: 2, lName: "products", linkPath: "collection" },
    { id: 5, lName: "about us", linkPath: "about" },
    { id: 3, lName: "Faq", linkPath: "faq" },
    { id: 4, lName: "contact", linkPath: "contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const responsiveElement = useRef(null);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <ul className="hidden lg:flex lg:items-center lg:gap-5">
        {links.map((link) => {
          const isActive = pathname === `/${link.linkPath}`;
          return (
            <li key={link.id}>
              <Link
                href={`/${link.linkPath}`}
                className={
                  isActive
                    ? "text-text_link_dark capitalize"
                    : "text-text_link_light capitalize"
                }
              >
                {link.lName}
              </Link>
            </li>
          );
        })}
      </ul>

      <div>
        <div className="lg:hidden">
          <svg
            onClick={handleToggle}
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <ul
          ref={responsiveElement}
          className={` fixed bg-bg_btn w-[100%] md:w-[350px] z-50 top-0 left-0 h-full flex flex-col items-center justify-center gap-10 transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        >
          <div className="absolute top-2 w-full flex items-center justify-between py-2 px-3">
            <Link href="/" onClick={handleToggle}>
              <Image src={"/logo.png"} alt="image" width={100} height={60} />
            </Link>
            <span
              className="text-text_link_light text-[25px]"
              onClick={handleToggle}
            >
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
            </span>
          </div>

          {links.map((link) => {
            const isActive = pathname === `/${link.linkPath}`;
            return (
              <li onClick={handleToggle} key={link.id}>
                <Link
                  href={`/${link.linkPath}`}
                  className={
                    isActive
                      ? "text-text_link_dark capitalize text-[20px]"
                      : "text-text_link_light capitalize text-[20px]"
                  }
                >
                  {link.lName}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default LeftLinks;
