import React from "react";
import Link from "next/link";

const Fabrics = ({ tshirts }) => {
  return (
    <section className="text-gray-600 body-font">
      <img
        className="w-full"
        src="https://siyaram-images.s3.ap-south-1.amazonaws.com/images/top_banner/fabrics.png"
      />
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 ">
          {Object.keys(tshirts)?.map((item) => {
            return (
              <div
                key={tshirts[item].id}
                className="lg:w-1/6 md:w-1/2 p-6 mr-10 border shadow-md"
              >
                <Link
                  href={`/product/${tshirts[item].id}`}
                  className="block relative h-48 rounded overflow-hidden"
                >
                  <img
                    alt="ecommerce"
                    className="h-full w-full "
                    src={tshirts[item].img}
                  />
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {tshirts[item].title}
                  </h2>
                  <p className="mt-1">{tshirts[item].price}</p>
                  <div className="mt-1 ">
                    {tshirts[item].size.map((k) => {
                      return (
                      
                        <div className="inline-block border border-gray-600 px-1 mx-1 mt-2">
                          {k}
                        </div>
                       
                      );
                    })}
                    <div className="mt-4">
                      {tshirts[item].color.map((k) => {
                        return (
                          <button
                            style={{ backgroundColor: `${k}` }}
                            className=" border-2 rounded-full w-6 h-6 "
                          ></button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export async function getServerSideProps(context) {
  const apiUrlEndpoint = `http://localhost:3002/api/getdata`;
  const response = await fetch(apiUrlEndpoint);
  const res = await response.json();
  let products = res.name;
  let tshirts = {};
  for (let item of products) {
    if (item.title in tshirts) {
      if (
        !tshirts[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        tshirts[item.title].color.push(item.color);
      }
      if (
        !tshirts[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        tshirts[item.title].size.push(item.size);
      }
    } else {
      tshirts[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        tshirts[item.title].color = [item.color];
        tshirts[item.title].size = [item.size];
      }
    }
  }
  return {
    props: { tshirts },
  };
}

export default Fabrics;
