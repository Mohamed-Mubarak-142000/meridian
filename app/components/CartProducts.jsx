import React from "react";
import TableCart from "./TableCart";

const CartProducts = () => {
  return (
    <section className="my-5 w-full lg:w-[70%]">
      <h2 className="text-[25px] capitalize">shopping cart</h2>

      <div className="w-full border border-text_link_light">
        <TableCart />
      </div>
    </section>
  );
};

export default CartProducts;
