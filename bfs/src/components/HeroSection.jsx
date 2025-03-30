import React from "react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="flex gap-6">
      {/* first banner */}
      <div className="relative">
        <img src="/Banner1.png" alt="banner1" className=" object-cover" />
        <div className="absolute text-white top-1/4 left-10">
          <div className="text-5xl font-semibold">
            <h2 className="pb-3">Fresh & Healthy</h2>
            <h2>Vegetables & Fruits</h2>
          </div>
          <div className="flex mt-8">
            <div className="w-[2px] h-[70px] light-primary-bg" />
            <div className="flex flex-col pl-3 pt-2">
              <div className="text-xl font-normal">
                Sale up to
                <span className="warning-bg rounded py-1.5 px-3 font-medium ml-2">
                  30% OFF
                </span>
              </div>
              <div className="pt-3 text-sm font-thin text-white/80">
                Free delivery on all your orders.
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Button
              variant="outline"
              className="brand-color rounded-full py-6 px-10 font-semibold text-base"
            >
              Shop now
              <img src="/right-arrow.svg" alt="arrow-icon" />
            </Button>
          </div>
        </div>
      </div>

      {/* Second Banner */}
      <div className="flex flex-col gap-3 -mt-1">
        <div className="relative h-72">
          <img
            src="/Banner2.png"
            alt="banner2"
            className=" object-cover rounded-lg h-[282px]"
          />
          <div className="absolute top-6 left-7">
            <h2 className="font-medium text-base text-black/80">WINTER SALE</h2>
            <h2 className="font-semibold text-3xl pt-1">75% OFF</h2>
            <p className="text-sm font-thin text-black/60 pt-2">
              Only Fruit & Vegetable
            </p>
            <div className="flex pt-5">
              <a
                href="#"
                className="brand-color font-semibold text-base pr-2 no-underline"
              >
                Shop Now
              </a>
              <img src="/right-arrow.svg" alt="arrow-icon" />
            </div>
          </div>
        </div>

        {/* Third Banner */}
        <div className="relative flex flex-col justify-center items-center h-72">
          <img
            src="/Banner3.png"
            alt="banner3"
            className=" object-cover rounded-lg h-[282px]"
          />
          <div className="absolute text-white text-center">
            <p className="">BEST DEAL</p>
            <h2 className="text-3xl font-semibold">Special Products</h2>
            <h2 className="text-3xl font-semibold">Deal of the Month</h2>
            <div className="flex pt-5 w-full justify-center items-center">
              <a
                href="#"
                className="brand-color font-semibold text-base pr-2 no-underline"
              >
                Shop Now
              </a>
              <img src="/right-arrow.svg" alt="arrow-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
