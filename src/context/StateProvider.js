import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducers/reducer";
//prepares data layer
export const CartContext = createContext();

//wrap our app and provide data layer
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    basket: [],
  });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

//pull info from data layer
export const useCartValue = () => useContext(CartContext);
