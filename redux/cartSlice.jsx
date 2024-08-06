import { saveCart } from "@/components/localStorage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  subTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItemId = action.payload.itemCode;

      const existingItem = state.cart.find(
        (item) => item.itemCode === newItemId
      );

      if (existingItem) {
        existingItem.quantity =
          Number(existingItem.quantity) + Number(action.payload.quantity);
        existingItem.price =
          Number(existingItem.price) + +Number(action.payload.price);
      } else {
        state.cart.push(action.payload);
      }
      const totalPrice = state.cart
        .map((item) => item.price)
        .reduce((prevValue, currValue) => prevValue + currValue, 0);

      state.subTotal = totalPrice;
      saveCart(state);
    },
    increment(state, action) {
      state.cart = state.cart.map((item) => {
        if (item.itemCode === action.payload) {
          item.quantity++;
          item.price = Number(item.price) + 700;

        }
        return item;
      });
      const totalPrice = state.cart
        .map((item) => item.price)
        .reduce((prevValue, currValue) => prevValue + currValue, 0);

      state.subTotal = totalPrice;
      
      saveCart(state);
    },
    clearCart(state) {
      localStorage.clear();
      return (state = initialState);
    },

    removeFromCart(state, action) {
   
      state.cart = state.cart
        .map((item) => {
          if (item.itemCode === action.payload) {
            item.quantity -= 1;
            item.price -= 700;
            item.price--;
          }
          return item;
        })
        .filter((item) => item.quantity !== 0);
      const totalPrice = state.cart
        .map((item) => item.price)
        .reduce((prevValue, currValue) => prevValue + currValue, 0);

      state.subTotal = totalPrice;
      saveCart(state);
    },
    loadCart(state) {
      try {
        if (localStorage.getItem("cart") !== null) {
          return (state = JSON.parse(localStorage.getItem("cart")));
        } else if (!localStorage.getItem("cart")) {
          return  (state = state);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export const { addToCart, removeFromCart, increment, loadCart, clearCart } =
  cartSlice.actions;


  export const totalAmount = (state)=>{
    return state.cart.subTotal
    
  }
  export const mycart= (state)=>{
    return state.cart.cart
  }

export default cartSlice.reducer;
