import React from "react";
import "./product-card.scss";
export default function ProductCard(props) {
  const { data } = props;
  return (
    <div className="product-card">
      <div className="product-details">
        <h6 className="name">{data.productname}</h6>
        <ul>
          {
              data.miniSpecs.map(spec =><li>{spec}</li>)
          }
        </ul>
        <h6 className="price">
          ₹${data.price.currentPrice} <s>₹${data.price.originalPrice}</s>
        </h6>
        {data.quantity > 0?<button className="add-to-cart">
          <img
            src="https://img.icons8.com/material-outlined/48/02C3BD/shopping-cart.png"
            height="16"
            width="16"
          />{" "}
          Add to cart
        </button>: <button  className="out-of-stock">Out of stock</button>
        }
      </div>
      <div className="product-image">
        <img src="https://www.transparentpng.com/thumb/-iphone-x/7vQ8aI-iphone-pictures-transparent-png-pictures-free-icons.png" />
      </div>
    </div>
  );
}
