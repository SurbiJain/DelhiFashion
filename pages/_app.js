'use client'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

import { Provider } from "react-redux";
import store from "@/redux/store";
import { loadCart, saveCart } from "@/redux/cartSlice";
import { useEffect } from "react";


function App({ Component, pageProps }) {
 useEffect(()=>{
  store.dispatch(loadCart());
  
 }, [])
  
  return (
    <>
    <Provider store={store}>
      <Navbar
        
      
      />{" "}
      <Component
       {...pageProps}
      />
      <Footer />
      </Provider>
    </>
  );
}

export default App;
