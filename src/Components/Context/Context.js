import React, { createContext } from "react";

export const Context = createContext();
export default function ContextProvider({ children }) {
  const [test, setTest] = React.useState(0);
  const [cartData, setCartData] = React.useState([]);
  const [cartCount, setCartCount] = React.useState(0);
  const [cartCalculation, setCartCalculation] = React.useState({
    totalQuantity: 0,
    totalAmount: 0,
    totalAmountWithDiscount: 0,
  });

  const deleteItemFromCart = (data) => {
    let newCart = cartData.filter((obj) => {
      return obj.product_id !== data.product_id;
    });
    setCartData([...newCart]);
  };
  const checkIfPresentInCart = (data) => {
    let prod = cartData.find((obj) => {
      return data.product_id === obj.product_id;
    });
    if (!prod) return false;
    return true;
  };

  const addItemToCart = (data) => {
    if (!data) return;
    setCartData([...cartData, { ...data, addedQuantity: 1 }]);
  };

  const updateCartCount = (data) => {
    if (checkIfPresentInCart(data)) {
      if (data.addedQuantity == 0) {
        deleteItemFromCart(data);
        return;
      }
      let index = cartData.findIndex((obj) => {
        return obj.product_id === data.product_id;
      });
      cartData[index] = { ...data };
      setCartData([...cartData]);
    }
  };

  const calculate = () => {
    let temp = {
      totalAmount: 0,
      totalAmountWithDiscount: 0,
    };
    cartData.map((obj) => {
      temp.totalAmount =
        temp.totalAmount + obj.addedQuantity * obj.price.originalPrice;
      temp.totalAmountWithDiscount =
        temp.totalAmountWithDiscount + obj.addedQuantity * obj.price.currentPrice;
    });
    setCartCalculation({ ...temp });
  };

  React.useEffect(() => {
    calculate();
  }, [cartData]);

  return (
    <Context.Provider
      value={{
        cartCount: cartCount,
        setCartCount: setCartCount,
        deleteItemFromCart,
        addItemToCart,
        updateCartCount,
        checkIfPresentInCart,
        cartData,
        cartCalculation
      }}
    >
      {children}
    </Context.Provider>
  );
}
