import React, { useRef } from "react";
import Link from "next/link";
import { IoIosAddCircle } from "@react-icons/all-files/Io/IoIosAddCircle";
import { FiMinusCircle } from "@react-icons/all-files/Fi/FiMinusCircle";
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";
import {  removeFromCart, clearCart, increment, loadCart } from "@/redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => {
    return state.cart;
  });
  const subTotal  = useSelector((state) => {
    return state.cart.subTotal;
  });

  const ref = useRef();
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.add("translate-x-full");
      ref.current.classList.remove("translate-x-0");
    }
  };
  const cartQuantity = cart.length;
  
  return (
    <div className="flex flex-col md:flex-row items-center bg-white justify-between md:justify-start  mb-4 shadow-md sticky top-0 z-10">
      <Link href={"/"} className="logo mx-5">
        <img
          width={200}
          height={40}
          src="/DelhiFashionEmporium_Logo 2.jpg"
          alt="myiamge"
        />
      </Link>
      <div className="nav">
        <ul className="flex space-x-10 font-bold md:ml-20  ">
          <Link href={"/about"}>
            <li>About us</li>
          </Link>
          <Link href={"/brands"}>
            <li>Brands</li>
          </Link>
          <Link href={"/fabrics"}>
            <li>Fabrics</li>
          </Link>
          <Link href={"/contact"}>
            {" "}
            <li>Enquire</li>
          </Link>
        </ul>
      </div>
      <div onClick={toggleCart} className="cart absolute right-0 top-8 mx-5">
        <FaShoppingCart className="text-xl md:text-3xl " />
        <div className="absolute -top-4 right-1"></div>
      </div>
      <div
        ref={ref}
        className="w-72 sideCart absolute top-0 right-0 bg-black p-10 transform translate-x-full h-dvh transition-transform text-white opacity-90 z-10"
      >
        <h2 className="font-bold text-3xl text-center">My Shopping Cart </h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2 cursor-pointer"
        >
          X
        </span>

        <div>
          <ol className="list-decimal text-white">
            {cartQuantity === 0 ? (
              <h2>Cart is empty</h2>
            ) : (
              cart.map((item) => {
             
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
          </ol>
          <h2>subTotal: {subTotal}</h2>
        </div>

        <div className="flex gap-4">
          <Link href={"/checkout"} className="cursor-pointer">
            <button className=" text-white bg-slate-900 px-4 py-2 text-centerfocus:outline-none hover:bg-slate-400 rounded text-lg mt-10">
              Checkout
            </button>
          </Link>
          <button
            className=" text-white bg-slate-900  px-4 py-2 focus:outline-none hover:bg-slate-400 rounded text-lg mt-10"
            onClick={() => {
             dispatch(clearCart())
            
            }}
          >
            Clear{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
