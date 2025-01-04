import { useState } from 'react';

const ProductQuickView = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-4xl p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
          onClick={() => console.log("Close")}
        >
          &times;
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div>
            <img
              src="https://via.placeholder.com/500"
              alt="Product"
              className="w-full h-auto rounded-lg"
            />
            <div className="flex space-x-2 mt-4">
              {[1, 2, 3, 4].map((_, index) => (
                <img
                  key={index}
                  src="https://via.placeholder.com/100"
                  alt={`Thumbnail ${index + 1}`}
                  className="w-16 h-16 rounded-lg cursor-pointer border border-gray-200 hover:border-green-500"
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Chinese Cabbage
            </h2>
            <div className="flex items-center space-x-4 mt-2">
              <span className="text-yellow-500 text-lg">★★★★☆</span>
              <span className="text-sm text-gray-500">(4 Reviews)</span>
              <span className="text-sm text-gray-500">SKU: 251,594</span>
            </div>

            <div className="flex items-center mt-4">
              <span className="text-gray-400 line-through text-xl">$48.00</span>
              <span className="text-green-500 text-3xl font-bold ml-4">
                $17.28
              </span>
              <span className="text-red-500 text-sm font-semibold ml-4">
                64% Off
              </span>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
              consequat nec, ultrices et ipsum.
            </p>

            <div className="mt-6">
              <p className="text-gray-700">
                Brand:{" "}
                <span className="text-green-500 font-semibold">Fairway</span>
              </p>
              <p className="text-gray-700 mt-2">
                Category: <span className="text-gray-500">Vegetables</span>
              </p>
              <p className="text-gray-700 mt-2">
                Tags:{" "}
                <span className="text-gray-500">
                  Vegetables, Healthy, Chinese, Cabbage, Green Cabbage
                </span>
              </p>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="mt-6 flex items-center space-x-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  className="px-3 py-2 text-gray-700 hover:bg-gray-200"
                  onClick={decrement}
                >
                  -
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button
                  className="px-3 py-2 text-gray-700 hover:bg-gray-200"
                  onClick={increment}
                >
                  +
                </button>
              </div>
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 flex items-center">
                Add to Cart <span className="ml-2 text-xl">🛒</span>
              </button>
              <button className="border border-green-500 text-green-500 px-4 py-2 rounded-lg hover:bg-green-100">
                ♥
              </button>
            </div>

            {/* Share Icons */}
            <div className="mt-6 flex items-center space-x-4">
              <span className="text-gray-700">Share item:</span>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-green-500 hover:text-green-600 text-lg"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-green-500 hover:text-green-600 text-lg"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-green-500 hover:text-green-600 text-lg"
                >
                  Pinterest
                </a>
                <a
                  href="#"
                  className="text-green-500 hover:text-green-600 text-lg"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickView;
