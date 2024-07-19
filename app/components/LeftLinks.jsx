"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LeftLinks = () => {
  const pathname = usePathname();
  const links = [
    { id: 1, lName: "home", linkPath: "" },
    { id: 2, lName: "products", linkPath: "/products" },
    { id: 3, lName: "showroom", linkPath: "/showroom" },
    { id: 4, lName: "contact", linkPath: "/contact" },
  ];

  return (
    <ul className="hidden lg:flex lg:items-center lg:gap-2">
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
  );
};

export default LeftLinks;
