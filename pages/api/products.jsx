import query  from "@/local/db";

export default async function handler (req, res){
const id = req.body.id
try{
  const querySql = "SELECT product_id, src, productName, price, quantity size FROM products where product_id = ?";
  const valueParams = [id];
  const result = await query({query: querySql, values: valueParams });
  res.status(200).json({ name: result });
}
catch(error){
  res.status(500).json({ error: error.message });
}  
}