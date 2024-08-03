export const saveCart = (mycart)=>{
  localStorage.setItem("cart", JSON.stringify(mycart));
  };
  
  