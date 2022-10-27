import React from "react";
import { Context } from "./../Context/Context";
import "./cart-list.scss";
export default function CartList() {
  const context = React.useContext(Context);
  const { cartData, updateCartCount } = context;
  return (
    <div className="cart-list-main">
      {cartData.length ? (
        <ul className="cart-list">
          {cartData.map((data) => (
            <li>
              <div className="cart-image">
                <img src={data && data.productImage && data.productImage[0]} />
              </div>
              <div className="cart-info">
                <p>{data.productName}</p>
                <h6><s>₹{data.price.currentPrice}</s>₹{data.price.originalPrice}</h6>
                
              </div><div className="update-count">
                  <button
                    onClick={() =>
                      updateCartCount({
                        ...data,
                        addedQuantity: data.addedQuantity - 1,
                      })
                    }
                  >
                    {data.addedQuantity === 1 ? (
                      <img
                        height="14"
                        width="14"
                        src="https://img.icons8.com/ios-glyphs/60/000000/delete-forever.png"
                      />
                    ) : (
                      "-"
                    )}
                  </button>
                  <span>{data.addedQuantity}</span>
                  <button
                    onClick={() =>
                      updateCartCount({
                        ...data,
                        addedQuantity: data.addedQuantity + 1,
                      })
                    }
                  >
                    +
                  </button>
                </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty-cart">
          <p>Empty Cart</p>
          <img
            src="https://img.icons8.com/material-outlined/48/d9d9d9/shopping-cart.png"
            height="46"
            width="46"
          />
        </div>
      )}
    </div>
  );
}
