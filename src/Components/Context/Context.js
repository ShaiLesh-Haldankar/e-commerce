import React, { createContext } from "react";

export const Context = createContext();
export default function ContextProvider({ children }) {
  const [test, setTest] = React.useState(0);

  const value = {
    test,
    setTest,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
