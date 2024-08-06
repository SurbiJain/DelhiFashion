import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { addToCart } from "@/redux/cartSlice";
import { useDispatch } from "react-redux";

const Product = () => {
  const router = useRouter();
  const [quantity, setQuantity] = useState();
  const { slug } = router.query;
  const dispatch = useDispatch();
  const [dataResponse, setDataResponse] = useState();

  let price = 500 * quantity;

  const handleAddCart = (item) => {
    dispatch(
      addToCart({
        itemCode: item.product_id,
        quantity,
        price: Number(item.price) * quantity,
        title: item.productName,
      })
    );
  };
  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = `http://localhost:3002/api/products`;
      const postData = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          id: slug,
        }),
      };
      const response = await fetch(apiUrlEndpoint, postData);
      const res = await response.json();
      setDataResponse(res.name);
    }
    getPageData();
  }, [router.query.slug, router.isReady]);

  return (
    <>
      <section className="text-gray-600 body-font">
        {dataResponse?.map((item) => {
          return (
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center" key={item.product_id}>
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900">
                  {item.productName}
                </h1>
                <h3 className="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-600">
                  Before they sold out
                  <br className="hidden lg:inline-block" />
                  readymade gluten
                </h3>
                <p className="mb-8 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  illum quis dolore pariatur dicta ullam consequuntur quod.
                  Architecto, facilis voluptatum.
                </p>
                <div className="mt-4">
                  <button
                    onClick={() => {
                      handleAddCart(item);
                    }}
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded ml-4"
                  >
                    Add to cart
                  </button>
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
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src={item.src}
                />
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Product;
