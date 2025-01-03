import React from "react";
import { Button } from "./ui/button";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { ReactComponent as Cart } from "../assets/Cart.svg";

const ProductCard = ({}) => {
  return (
    <div className="w-[248px] h-[338px] border rounded-lg shadow-sm overflow-hidden">
      {/* Image */}
      <div className="w-[248px] h-[248px] flex items-center justify-center">
        <img src="/test.png" alt="product" className=" object-contain" />
      </div>

      <div className="w-[248px] h-[91px] flex justify-between items-center p-4">
        {/* Details */}
        <div>
          <p className="text-gray-700 font-thin truncate text-sm">
            Green Lettuce
          </p>
          <p className="font-medium pt-0.5">₹50</p>
          {/* ratings */}

          <div className="flex gap-0.5 pt-1.5">
            <StarFilledIcon className="h-3 w-3 warning star-fill" />
            <StarFilledIcon className="h-3 w-3 warning star-fill" />
            <StarFilledIcon className="h-3 w-3 warning star-fill" />
            <StarFilledIcon className="h-3 w-3 warning star-fill" />
            <StarFilledIcon className="h-3 w-3 text-gray-300 fill-gray-300" />
          </div>
        </div>
        {/* Add to cart */}
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <Cart className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
