import Image from "next/image";
import React from "react";

const OrderSummary = () => {
  return (
    <section className="w-full lg:w-[30%] lg:mt-5">
      <h2 className="text-[25px] capitalize">order summary</h2>

      <div className="border border-text_link_light p-2">
        <p className="flex items-center justify-between p-2">
          <span className="text-[12px]">subtotal</span>
          <span className="text-[12px]">$125.00</span>
        </p>

        <p className="text-end w-full text-text_link_light py-2">
          (includes £416.67 20% VAT)
        </p>

        <fieldset className="space-y-4">
          <legend className="sr-only">Delivery</legend>

          <div>
            <label
              htmlFor="DeliveryStandard"
              className="flex cursor-pointer justify-between gap-4 border border-text_link_light bg-white p-4 text-sm bg-[#eee] "
            >
              <input
                type="radio"
                name="DeliveryOption"
                value="DeliveryStandard"
                id="DeliveryStandard"
                className="size-5 text-bg_btn"
              />

              <div className="flex items-center justify-between w-full font-300">
                <span className="text-text_black">Standard Free Shipping</span>

                <span className=" text-text_black">$00.00</span>
              </div>
            </label>
          </div>

          <div>
            <label
              htmlFor="DeliveryPriority"
              className="flex cursor-pointer justify-between gap-4 border border-text_link_light bg-white p-4 text-sm bg-[#eee] "
            >
              <input
                type="radio"
                name="DeliveryOption"
                value="DeliveryPriority"
                id="DeliveryPriority"
                className="size-5 border-gray-300 text-bg_btn"
              />

              <div className="flex items-center justify-between w-full font-300">
                <p className="text-text_black">Premium Shipping</p>
                <p className="text-text_black">£9.99</p>
              </div>
            </label>
          </div>
        </fieldset>

        <p className="flex items-center justify-between p-2 my-2">
          <span className="text-[18px] capitalize">total</span>
          <span className="text-[18px]">$125.00</span>
        </p>

        <div className="w-[full] h-[60px] my-5">
          <button
            type="button"
            className="btn-styling tracking-[0px] capitalize text-[18px]"
          >
            proceed to checkout
          </button>
        </div>

        <ul className="flex items-center w-full gap-3 my-5 justify-center">
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

        <p className="text-text_link_light text-center">
          Discount prices will be active after entering the checkout process
        </p>
      </div>
    </section>
  );
};

export default OrderSummary;
