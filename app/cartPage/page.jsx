import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import OrderSummary from "../components/OrderSummary";
import CartProducts from "../components/CartProducts";

const page = () => {
  return (
    <section className="container my-10">
      <BreadCrumb pathname1={"cart"} pathname2={"shopping cart"} />
      <div className="flex items-start justify-between flex-wrap lg:flex-nowrap lg:gap-5">
        <CartProducts />
        <OrderSummary />
      </div>
    </section>
  );
};

export default page;
