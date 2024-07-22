import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import InfoDetails from "../components/InfoDetails";
import ImageDetail from "../components/ImageDetail";
import Image from "next/image";
import Frequently from "../components/Frequently";
import PopularProduct from "../components/PopularProduct";
import ReviewsProduct from "../components/ReviewsProduct";

const page = () => {
  return (
    <section className="container my-10">
      <BreadCrumb
        pathname1={"product details"}
        pathname2={"Siam Set 1 – 6 piece Corner"}
      />
      <div className="flex items-start justify-around flex-wrap ">
        <ImageDetail />
        <InfoDetails />
      </div>

      <section className="flex items-center justify-between flex-wrap my-10 lg:pe-10">
        <div className="relative w-full h-[400px] lg:w-1/2">
          <Image src="/MishaGrey.png" alt="image" fill objectFit="contain" />
        </div>

        <div className=" w-full lg:w-1/2">
          <h2 className="font-bold text-[35px] tracking-[2px]">
            Cast Aluminium Furniture
          </h2>
          <p className="text-text_link_light my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            doloribus reprehenderit reiciendis laborum atque corrupti quisquam
            maiores sapiente aliquam. Unde sint minima molestias consectetur
            consequuntur fuga quas voluptas quod possimus? Eligendi doloremque
            quisquam ipsam perferendis optio aliquam tenetur repudiandae natus
            delectus, animi, laboriosam autem quaerat exercitationem recusandae
            atque impedit rem. Sapiente accusamus harum, odit eos eligendi
            libero deserunt provident accusantium! Ab consequatur, animi sed non
            dolorem fuga quae neque inventore vel? Rem libero aperiam fuga optio
            voluptatem eos vero quis! Provident, ullam iusto eum possimus fugiat
            maiores alias natus labore. Maxime doloribus ad placeat. Commodi
            perferendis distinctio itaque dolorum, at natus facilis vel
            dignissimos, culpa explicabo nemo doloremque asperiores quibusdam
            accusantium animi numquam repellat? Non cupiditate mollitia rerum
            molestias perspiciatis! Laborum sunt eum, odit distinctio iure
            voluptatibus, deleniti veniam atque quae dicta id hic asperiores
            repudiandae libero consectetur adipisci?
          </p>
        </div>
        <Frequently />
        <PopularProduct />
        <ReviewsProduct />
      </section>
    </section>
  );
};

export default page;
