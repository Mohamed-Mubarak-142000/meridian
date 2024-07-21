import Image from "next/image";
import React from "react";

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
        <Image src="/contact.png" alt="help-image" fill objectFit="contain " />
      </div>

      <section className="container my-10">
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1 className="text-[35px] my-5">We Ready To Help</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            nulla a ut diam et, sapien dis
          </p>

          <div className="flex items-center justify-around w-full lg:w-[80%] mx-auto my-10">
            <div className="flex items-center gap-3">
              <Image
                src={"/phone.png"}
                alt="image"
                width={70}
                height={70}
                objectFit="contain"
              />

              <p className="flex flex-col gap-2">
                <span className="tracking-[3px] text-text_link_light uppercase">
                  Phone Number
                </span>
                <span>(62) 1829017</span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Image
                src={"/message.png"}
                alt="image"
                width={70}
                height={70}
                objectFit="contain"
              />

              <p className="flex flex-col gap-2">
                <span className="tracking-[3px] text-text_link_light uppercase">
                  Email
                </span>
                <span>Hello@Meridian.co</span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Image
                src={"/location.png"}
                alt="image"
                width={70}
                height={70}
                objectFit="contain"
              />

              <p className="flex flex-col gap-2">
                <span className="tracking-[3px] text-text_link_light uppercase">
                  Map Street
                </span>
                <span>John Bucarest St. 199</span>
              </p>
            </div>
          </div>
          <h1 className="text-[35px] my-5">Let’s Talk With Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            nulla a ut diam et, sapien dis
          </p>
        </div>

        <section className="my-10 flex items-center justify-center w-[80%] mx-auto ">
          <form action="#" className="space-y-4 w-full p-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full border border-text_link_light p-3 text-sm"
                  placeholder="Email address"
                  type="text"
                  id="name"
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full border border-text_link_light p-3 text-sm"
                  placeholder="Email address"
                  type="email"
                  id="email"
                />
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>

              <textarea
                className="w-full border border-text_link_light p-3 text-sm"
                placeholder="Message"
                rows="8"
                id="message"
              ></textarea>
            </div>

            <div className="w-[300px] h-[60px] my-5 mx-auto">
              <button type="button" className="btn-styling">
                Send Enquiry
              </button>
            </div>
          </form>
        </section>
      </section>
    </section>
  );
};

export default page;
