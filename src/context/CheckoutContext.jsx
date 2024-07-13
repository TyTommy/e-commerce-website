import React, { createContext } from "react";

export const CheckoutContext = createContext();

function CheckoutContextProvider({ children }) {
  const [cart, setCart] = React.useState([]);

  return (
    <CheckoutContext.Provider value={{ cart, setCart }}>
      {children}
    </CheckoutContext.Provider>
  );
}

export default CheckoutContextProvider;
