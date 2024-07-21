import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <section className="w-full min-h-[400px] xl:h-[380px] relative ">
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
        <Image
          src="/help.png"
          alt="help-image"
          fill
          className="cover xl:contain"
        />

        <div className="container px-5 lg:px-12 absolute top-[50%] transform translate-y-[-50%] left-[30%] translate-x-[-30%] flex items-center justify-center xl:justify-between flex-wrap gap-3">
          <div className="w-full lg:w-1/2 flex items-start justify-start flex-col ">
            <h2 className="text-[35px] capitalize text-text_white font-bold my-5">
              How Can We Help You?
            </h2>
            <p className="text-[16px] text-text_white font-thin my-3">
              We pride ourselves on superior customer service. Speak to a member
              of our sales team to help with your order.
            </p>

            <p className="text-text_white font-normal text-[14px] my-3">
              Get In Touch support@Meridian.com
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex xl:items-end justify-start flex-col ">
            <button
              className="w-[200px] bg-text_white p-3 text-text_black flex items-center justify-center gap-2 outline-none border-none"
              type="button"
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
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              01050867135
            </button>

            <p className="text-text_white text-[12px] my-5">
              8am to 6pm, 7 days a week
            </p>
          </div>
        </div>
      </section>

      <section className=" bg-text_black py-10">
        <div className="container">
          <div className="relative w-[100px] h-[100px]">
            <Image src="/shortLogo.png" alt="logo" fill objectFit="contain" />
          </div>

          <div className="h-[.5px] opacity-12 w-full bg-text_link_light"></div>

          <section className="flex flex-col gap-5 p-5 text-text_link_light capitalize">
            <div className=" w-full flex items-start justify-between xl:flex-wrap flex-wrap-reverse gap-4 md:gap-0">
              <ul className="w-full md:w-1/2 xl:w-1/4 leading-10 text-sm">
                <li>head office</li>
                <li>
                  32 Plum St, Trenton, NJ <br />
                  08638, United States
                </li>
                <li className="flex items-center gap-3">
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  01050867135
                </li>

                <li className="flex items-center gap-3">
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
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  support@Meridian.com
                </li>
              </ul>

              <ul className="w-full md:w-1/2 xl:w-1/4 leading-8 text-sm my-2 xl:my-0">
                <li>product</li>
                <li>new arrival</li>
                <li>living room</li>
                <li>Kitchen & Dining Room</li>
                <li>Bed Room</li>
                <li>Accent</li>
                <li>Occasional Table</li>
                <li>Office/Home Office</li>
                <li>Outdoor Furniture</li>
              </ul>

              <ul className="w-full md:w-1/2 xl:w-1/4 leading-8 text-sm my-2 xl:my-0">
                <li>help</li>
                <li>about us</li>
                <li>contact</li>
              </ul>

              <div className="w-full md:w-1/2 xl:w-1/4 leading-5 text-sm my-2 xl:my-0">
                <p className="my-3">Join Meridian for Exclusive Offers</p>

                <label
                  htmlFor="UserEmail"
                  className="relative my-5 block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                >
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="Email"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                    Email
                  </span>
                </label>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  maiores sed placeat dicta asperiores facilis, corrupti
                  suscipit et at odit ipsum officiis eum architecto assumenda.
                  Dolores porro velit a eaque?
                </p>
              </div>
            </div>

            <div className="w-full flex items-center justify-between">
              <div className="flex flex-col gap-3 ">
                <ul className="flex items-center gap-5">
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Shipping Policy</li>
                </ul>

                <ul className="flex items-center">
                  <li>
                    <Image
                      src="/card1.png"
                      alt="card1"
                      width={50}
                      height={50}
                      objectFit="contain"
                    />
                  </li>
                  <li>
                    <Image
                      src="/card4.png"
                      alt="card1"
                      width={50}
                      height={50}
                      objectFit="contain"
                    />
                  </li>
                  <li>
                    <Image
                      src="/card2.png"
                      alt="card1"
                      width={50}
                      height={50}
                      objectFit="contain"
                    />
                  </li>
                  <li>
                    <Image
                      src="/card3.png"
                      alt="card1"
                      width={50}
                      height={50}
                      objectFit="contain"
                    />
                  </li>
                </ul>
              </div>

              <ul className="flex items-center gap-3">
                <li>
                  <Image
                    src="/facebook.png"
                    alt="facebook"
                    width={15}
                    height={15}
                    objectFit="contain"
                  />
                </li>

                <li>
                  <Image
                    src="/instagram.png"
                    alt="facebook"
                    width={15}
                    height={15}
                    objectFit="contain"
                  />
                </li>
              </ul>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Footer;
