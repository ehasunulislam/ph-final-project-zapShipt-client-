import React from "react";
import { assets } from "../../../assets/assets";

const Merchant = () => {
  return (
    <div className="bg-accent rounded-[10px] py-10 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full opacity-20 pointer-events-none">
        <img src={assets.beMerchantBg} alt="" className="w-full h-auto" />
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-10 relative z-10">
        {/* Text Section */}
        <div className="text-white space-y-5 max-w-xl">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
            Merchant and Customer Satisfaction <br /> is Our First Priority
          </h3>

          <p className="text-sm md:text-base leading-relaxed">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="btn bg-primary rounded-full px-8">
              Become a Merchant
            </button>

            <button className="btn border bg-transparent text-primary border-primary rounded-full px-8">
              Create an Account
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <img
            src={assets.locationMerchant}
            alt=""
            className="w-64 sm:w-80 md:w-96 lg:w-[420px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Merchant;
