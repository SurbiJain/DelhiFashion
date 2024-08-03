import { mycart } from "@/redux/cartSlice";
import React from "react";
import { useSelector } from "react-redux";

const Order = () => {
  const cart = useSelector(mycart);
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex  flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Delhi Fashion Emporium
            </h2>
            <p className="leading-relaxed mb-4">
              Your order has been successfully placed
            </p>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              OrderId: #89777
            </h1>
            <div class="flex  mb-4">
              <a class="flex-grow text-indigo-500  border-indigo-500 py-2 text-lg px-12">
                Item
              </a>
              <a class="flex-grow border-gray-300 py-2 text-lg px-1">
                Quantity
              </a>
              <a class="flex-grow  border-gray-300 py-2 text-lg px-1">Price</a>
            </div>

            {cart.map((item) => {
              return (
                <div className="flex   border-b">
                  <div className=" mx-auto text-center border-gray-200 py-2">
                    {item.title}
                  </div>
                  <div className="mx-auto px-6 border-gray-200 py-2">
                    {item.quantity}
                  </div>
                  <div className="mx-auto px-6  mb-6 border-gray-200 py-2">
                    {item.price}
                  </div>
                </div>
              );
            })}

            <button className="flex mt-4 text-white bg-slate-500 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded">
              Track Your Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
