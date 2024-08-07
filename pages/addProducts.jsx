import React, { useState } from "react";

const AddProduct = () => {
  const [dataResponse, setDataResponse] = useState();
  const [product, setProduct] = useState({
    title: "",
    about: "",
    img: "",
    category: "",
    size: "",
    color:"",
    price: "",
    availableQty: "",
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
    console.log(product)
    handleAddProduct();
    setProduct({
      title: "",
      about: "",
      img: "",
      category: "",
      size: "",
      color:"",
      price: "",
      availableQty: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
     <div className="form-group">
        <label htmlFor="name">Product Name:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={product.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="id">Description</label>
        <input
          type="text"
          id="about"
          name="about"
          value={product.about}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="img"
          name="img"
          value={product.img}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Category</label>
        <input
          type="text"
          id="category"
          name="category"
          value={product.category}
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
        <label htmlFor="image">Color</label>
        <input
          type="text"
          id="color"
          name="color"
          value={product.color}
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
        <label htmlFor="image">Quantity:</label>
        <input
          type="number"
          id="availableQty"
          name="availableQty"
          value={product.availableQty}
          onChange={handleChange}
          required
        />
      </div>
      
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
