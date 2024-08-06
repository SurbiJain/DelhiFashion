import React, { useEffect, useState } from 'react'
import Link from 'next/link'


const Fabrics = () => {
  const [dataResponse, setDataResponse] = useState()
  useEffect(()=>{
    async function getPageData(){
      const apiUrlEndpoint = `http://localhost:3002/api/getdata`
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      setDataResponse(res.name)
    }
    getPageData()
  }, [])
  return (
    <section className="text-gray-600 body-font">
      <img className='w-full' src='https://siyaram-images.s3.ap-south-1.amazonaws.com/images/top_banner/fabrics.png'/>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      {dataResponse?.map((item)=>{
        return  <div key={item.product_id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={`/product/${item.product_id}`} className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.src}/>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{item.productName}</h2>
          <p className="mt-1">{item.price}</p>
        </div>
      </div>
      })}
     
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href='/product/2' className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://fabcurate.com/cdn/shop/products/32000304-A.jpg?v=1696678413&width=1426/421x261"/>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href='/product/3'  className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://fabcurate.com/cdn/shop/products/32000304-A.jpg?v=1696678413&width=1426/422x262"/>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href='/product/4'  className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://fabcurate.com/cdn/shop/products/32000304-A.jpg?v=1696678413&width=1426/423x263"/>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href='/product/5'  className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://fabcurate.com/cdn/shop/products/32000304-A.jpg?v=1696678413&width=1426/424x264"/>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href='/product/6'  className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://fabcurate.com/cdn/shop/products/32000304-A.jpg?v=1696678413&width=1426/425x265"/>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href='/product/8' className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://fabcurate.com/cdn/shop/products/32000304-A.jpg?v=1696678413&width=1426/427x267"/>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href='/product/9' className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://fabcurate.com/cdn/shop/products/32000304-A.jpg?v=1696678413&width=1426/428x268"/>
        </Link>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Fabrics