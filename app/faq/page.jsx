import React from "react";
import Frequently from "../components/Frequently";
import Image from "next/image";

const page = () => {
  return (
    <section>
      <div className="w-full h-[350px] relative">
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
          }}
        ></div>
        <Image src="/contact.png" alt="help-image" fill objectFit="cover" />
      </div>

      <Frequently />
    </section>
  );
};

export default page;
