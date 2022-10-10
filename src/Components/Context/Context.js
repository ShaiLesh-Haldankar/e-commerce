import React, { createContext } from "react";

export const Context = createContext();
export default function ContextProvider({ children }) {
  const [test, setTest] = React.useState(0);
  const [cartCount, setCartCount] = React.useState(0);

 
  return (
    <Context.Provider value={{cartCount: cartCount, setCartCount: setCartCount}}>
      {children}
    </Context.Provider>
  );
}
