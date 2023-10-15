import React from 'react'
export const ShopContext = createContet(null);
import {PRODUCTS}from "../products";
import React , {createContext, useState} from "react";

const getDefaultCart = ()=>{
    let cart = {}
    for (let i=1; i<PRODUCTS.length +1; i++){
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const[cartItems,setCartItems] = useState(getDefaultCart());
  return <ShopContext.Provider>{props.children}</ShopContext.Provider>;
    
  
}
