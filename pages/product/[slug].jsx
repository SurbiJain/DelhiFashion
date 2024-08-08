import React, {useState } from "react";

import { addToCart, buyNow } from "@/redux/cartSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const Product = ({ product, variants }) => {
  const [quantity, setQuantity] = useState('');
  const [size, setSize] = useState(product.size);
  const [color, setColor] = useState(product.color);
  const dispatch = useDispatch();
  const refreshVariant = (newSize, newColor)=>{
    let url = `http://localhost:3002/product/${variants[newColor][newSize]["slug"]}`
    window.location = url;  
    
  }
   const router = useRouter()
  console.log(variants)
  const handleAddCart = (item) => {
    dispatch(
      addToCart({
        itemCode: item.id,
        quantity: Number(quantity),
        price: Number(item.price) * Number(quantity),
        title: item.title,
      })
    );
  };
  const handleBuyNow = (item)=>{
    dispatch(
      buyNow({
        itemCode: item.id,
        quantity: quantity,
        price: Number(item.price) * Number(quantity),
        title: item.title,
       
      }),
      router.push("../checkout")
    );
  }
  return (
    <>
      <section className="text-gray-600 body-font">
        <div
          className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
          key={product.id}
        >
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900">
              {product.title} ({product.size}/{product.color})
            </h1>
            <h3 className="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-600">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h3>
            <p className="mb-8 leading-relaxed">{product.about}</p>
            <div className="mt-4 flex" >
              <button
                onClick={() => {
                  handleAddCart(product);
                }}
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded ml-4"
              >
                Add to cart
              </button>
              <button
                onClick={() => {
                  handleBuyNow(product);
                }}
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded ml-4"
              >
               Buy now
              </button>
              
              
              
              <select
                className="ml-4 border-2 p-1"
                value={size}
                onChange={(e)=>{refreshVariant(e.target.value, color)}}
              >
                {Object.keys(variants[color]).includes("XS") && (
                  <option value={"XS"}>XS</option>
                )}
                {Object.keys(variants[color]).includes("S") && (
                  <option value={"S"}>S</option>
                )}{" "}
                {Object.keys(variants[color]).includes("M") && (
                  <option value={"M"}>M</option>
                )}{" "}
                {Object.keys(variants[color]).includes("L") && (
                  <option value={"L"}>L</option>
                )}{" "}
                {Object.keys(variants[color]).includes("XL") && (
                  <option value={"XL"}>XL</option>
                )}{" "}
                {Object.keys(variants[color]).includes("XXL") && (
                  <option value={"XXL"}>XXL</option>
                )}{" "}
                {Object.keys(variants[color]).includes("XXXL") && (
                  <option value={"XXXL"}>XXXL</option>
                )}
              </select>
              <select
                className="ml-4 border-2 p-1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              >
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>

              <div className="ml-6 mt-2">
                {Object.keys(variants).includes("white") && Object.keys(variants["white"]).includes(size) && (
                  <button
                    style={{ backgroundColor: "white" }}
                    className={`${color === "white" ? "border-black" : "border-gray-300"} border-2 rounded-full w-6 h-6 `}
                    onClick={()=>{refreshVariant(size, "white" )}}
                  ></button>
                )}

                {Object.keys(variants).includes("black") && Object.keys(variants["black"]).includes(size) && (
                  <button
                    style={{ backgroundColor: "black" }}
                    className={`${color === "black" ? "border-black" : "border-gray-300"} border-2 rounded-full w-6 h-6 `}
                    onClick={()=>{refreshVariant(size, "black" )}}
                  ></button>
                )}

                {Object.keys(variants).includes("beige") && Object.keys(variants["beige"]).includes(size) && (
                  <button
                    style={{ backgroundColor: "beige" }}
                    className={`${color === "beige" ? "border-black" : "border-gray-300"} border-2 rounded-full w-6 h-6 `}
                    onClick={()=>{refreshVariant(size, "beige" )}}
                  ></button>
                )}

                {Object.keys(variants).includes("red") && Object.keys(variants["red"]).includes(size) && (
                  <button
                    style={{ backgroundColor: "red" }}
                    className={`${color === "red" ? "border-black" : "border-gray-300"} border-2 rounded-full w-6 h-6 `}
                    onClick={()=>{refreshVariant(size, "red" )}}
                  ></button>
                )}

                {Object.keys(variants).includes("blue") && Object.keys(variants["blue"]).includes(size) && (
                  <button
                    style={{ backgroundColor: "blue" }}
                    className={`${color === "blue" ? "border-black" : "border-gray-300"} border-2 rounded-full w-6 h-6 `}
                    onClick={()=>{refreshVariant(size, "blue" )}}
                  ></button>
                )}

                {Object.keys(variants).includes("yellow") && Object.keys(variants["yellow"]).includes(size) && (
                  <button
                    style={{ backgroundColor: "yellow" }}
                    className={`${color === "yellow" ? "border-black" : "border-gray-300"} border-2 rounded-full w-6 h-6 `}
                    onClick={()=>{refreshVariant(size, "yellow" )}}
                  ></button>
                )}

                {Object.keys(variants).includes("green") && Object.keys(variants["green"]).includes(size) && (
                  <button
                    style={{ backgroundColor: "green" }}
                    className={`${color === "green" ? "border-black" : "border-gray-300"} border-2 rounded-full w-6 h-6 `}
                    onClick={()=>{refreshVariant(size, "green" )}}
                  ></button>
                )}
              </div>
              
              
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className=" h-[40vh] object-cover object-center rounded"
              alt="hero"
              src={product.img}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;

export async function getServerSideProps(context) {
  const apiUrlEndpoint = `http://localhost:3002/api/getdata`;
  const response = await fetch(apiUrlEndpoint);
  const res = await response.json();

  let product = await res.name.find(
    (item) => item.id === Number(context.query.slug)
  );
  console.log(product);
  let variants = await res.name.filter((item) => item.title === product.title);
  let colorSizeSlug = {};
  for (let item of variants) {
    if (Object.keys(colorSizeSlug).includes(item.color)) {
      colorSizeSlug[item.color][item.size] = { slug: item.id };
    } else {
      colorSizeSlug[item.color] = {};
      colorSizeSlug[item.color][item.size] = { slug: item.id };
    }
  }

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      variants: JSON.parse(JSON.stringify(colorSizeSlug)),
    },
  };
}
