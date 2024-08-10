import React from "react";
import PriceCard from "./PriceCard";
import { pricingPlans } from "../../constant";

const PricingPlan = () => {
  return (
    <div className="xl:py-36 py-20 flex justify-center items-center flex-col gap-8">
      <p className="w-fit px-3 py-2 rounded-md text-slate-yellow relative text-xl font-medium after:yellowBgOpacity">
        Pricing Plan
      </p>
      <p className="xl:text-5xl text-4xl text-white font-syne font-semibold font-syne">
      Choose Your Best<br/> Plan For Investing
      </p>
      <div className="flex flex-wrap justify-center px-5 gap-8 mt-5">
        {pricingPlans.map((price) => (
            <PriceCard key={price.title} price={price}/>
        ))}
      </div>
    </div>
  );
};

export default PricingPlan;
