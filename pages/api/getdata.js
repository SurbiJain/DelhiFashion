import query from "@/local/db";

export default async function handler(req, res) {  

  if(req.method==="GET"){
    try{
      const querySql = "SELECT product_id, src, productName, price, quantity size FROM products";
      const valueParams = [];
      const result = await query({query: querySql, value: valueParams });
      res.status(200).json({ name: result });
    }
    catch(error){
      res.status(500).json({ error: error.message });
    }  
  }
  if (req.method === "POST"){
    const {product_id, productName, price, quantity, size, src} = req.body
  let message;
  try{
    const querySql = "Insert into products (product_id,  productName, price, quantity, size, src) values(?,?,?,?,?,?)";
    const valueParams = [product_id, productName, price, quantity, size, src];
    const result = await query({query: querySql, values: valueParams });
    
    if(result.insertId){
      message = "success";
    } else {
      message="error"
    }
    let product = {
      product_id: result.product_id,
      productName:  productName , 
      price: price, 
      quantity: quantity, 
      size: size, 
      src: src

    }
    res.status(200).json({ response: {product: product, message: message} });
 }
  catch(error){
    res.status(500).json({ error: error.message });
  }  
  }
  
}


