import React, { useState } from "react";

const AddProduct = () => {
  const [dataResponse, setDataResponse] = useState();
  const [product, setProduct] = useState({
    product_id: "",
    productName: "",
    price: "",
    quantity: "",
    size: "",
    src: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };
  async function handleAddProduct() {
    const apiUrlEndpoint = `http://localhost:3002/api/getdata`;
    const postData = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(product),
    };
    const response = await fetch(apiUrlEndpoint, postData);
    const res = await response.json();
    setDataResponse(res.name);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    
    handleAddProduct();
    setProduct({
      product_id: "",
      productName: "",
      price: "",
      quantity: "",
      size: "",
      src: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <div className="form-group">
        <label htmlFor="id">Product ID:</label>
        <input
          type="text"
          id="product_id"
          name="product_id"
          value={product.product_id}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Product Name:</label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={product.productName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="size">Product Size:</label>
        <input
          type="text"
          id="size"
          name="size"
          value={product.size}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="src"
          name="src"
          value={product.src}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
