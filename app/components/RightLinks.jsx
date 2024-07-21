"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const RightLinks = () => {
  const pathname = usePathname();
  const links = [
    { id: 1, lName: "dealer login", linkPath: "" },
    { id: 2, lName: "become a dealer", linkPath: "/products" },
    { id: 3, lName: "find a retail", linkPath: "/showroom" },
  ];
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
      <Link href="/cartPage" className="relative w-5 h-5 ms-5">
        <Image
          src="/cart.png"
          alt="cart_image"
          fill
          className="object-contain"
        />
        <span className="absolute top-3 bg-bg_btn text-text_white left-2 text-center text-sm w-[20px] h-[20px] rounded-full">
          1
        </span>
      </Link>

      <div className="relative w-5 h-5 ms-5">
        <Image
          src="/search.png"
          alt="search_image"
          fill
          className="object-contain"
        />
      </div>
    </>
  );
};

export default RightLinks;
