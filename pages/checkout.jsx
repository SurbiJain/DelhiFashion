'use client'

import React from "react";
import { useState } from "react";
import { IoIosAddCircle } from "@react-icons/all-files/Io/IoIosAddCircle";
import { FiMinusCircle } from "@react-icons/all-files/Fi/FiMinusCircle";
import {  removeFromCart,  increment,   mycart, totalAmount } from "@/redux/cartSlice";
import { useSelector, useDispatch } from 'react-redux'


const Checkout = () => {
  
  const [pin, setPin] = useState();
  const [service, setService] = useState();
  const dispatch = useDispatch();

  const cart = useSelector(mycart);


  const subTotal = useSelector(totalAmount)

 
 
 const cartQuantity = cart.length;


  const pinChange = (e) => {
    setPin(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const pins = await fetch("http://localhost:3003/api/pincode");
    const pinJson = await pins.json();
    if (pinJson.includes(parseInt(pin))) {
      setService(true);
    } else {
      setService(false);
    }
  };
  return (
    <div className="container m-auto">
      <div className="mx-auto">
        <div className="px-2">
          <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                  Checkout
                </h1>
                <h2 className=" text-xl font-semibold lg:w-2/3 mx-auto leading-relaxed ">
                  Delivery Details
                </h2>
              </div>
              <form className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor ="name"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                         htmlFor ="email"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor ="pincode"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Enter Pincode
                      </label>
                      <input
                        type="text"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={pinChange}
                        value={pin}
                      />

                      {service != null && service && (
                        <p className="text-green-500 mt-4">
                          Yayy! we deliver at your location
                        </p>
                      )}
                      {service != null && !service && (
                        <p className="text-red-500 mt-4">
                          Sorry! your location is currently out of reach
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                         htmlFor ="contact"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Phone Number
                      </label>
                      <input
                        type="number"
                        id="contact"
                        name="contact"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="address"
                        className="leading-7 text-sm text-gray-600"
                      >
                        address
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button
                      className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
          <section>
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <h2 className="text-xl font-semibold lg:w-2/3 mx-auto leading-relaxed ">
                  2. Review Cart Details
                </h2>
                <div className="sideCart w-full bg-gray-100 p-6 m-2">
                  <h2 className="font-bold text-3xl text-center">
                    My Shopping Cart{" "}
                  </h2>

                  <div>
                  <ul className="list-decimal">
            {cartQuantity === 0 ? (
              <h2>Cart is empty</h2>
            ) : (
              cart.map((item) => {
                const { price, quantity } = item;
                const itemTotal = price * quantity;
                return (
                  <li key={item.itemCode}>
                    <div className="flex my-5">
                      <div className="font-semibold w-2/3 "> {item.title}</div>
                      <IoIosAddCircle
                        className="cursor-pointer mt-1"
                        onClick={() => {
                          dispatch(increment(item.itemCode));
                        }}
                      />{" "}
                      <span className="mx-2">{item.quantity}</span>{" "}
                      <FiMinusCircle
                        className="cursor-pointer mt-1"
                        onClick={() => {
                          dispatch(removeFromCart(item.itemCode));
                        }}
                      />
                      <div className="ml-10">{item.price}</div>
                    </div>
                  </li>
                );
              })
            )}
          </ul>
      
        <div> Amount you Pay: {subTotal}</div>
    </div>
                  <div> Subtotal: {subTotal}</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
