import React from "react";
import { Link } from "react-router-dom";
import "./product-card.scss";
import { Context } from "./../Context/Context";
export default function ProductCard(props) {
  const context = React.useContext(Context);
  const { addItemToCart, checkIfPresentInCart } = context;
  const { data } = props;

  const handleAddToCart = () => {
    addItemToCart(data);
  };
  return (
    <div className="product-card">
      <div className="product-details">
        <h6 className="name">{(data && data.productName) || "NA"}</h6>
        <ul>
          {data &&
            data.miniSpecs &&
            data.miniSpecs.map((spec) => <li>{spec}</li>)}
        </ul>
        <h6 className="price">
          ₹${data && data.price && data.price.currentPrice}{" "}
          <s>₹${data && data.price && data.price.originalPrice}</s>
        </h6>
        <div className="d-flex">
          {checkIfPresentInCart(data) ? (
            <button className="add-to-cart">
              Added to{" "}
              <img
                src="https://img.icons8.com/material-outlined/48/02C3BD/shopping-cart.png"
                height="16"
                width="16"
                style={{marginLeft: 5}}
              />
            </button>
          ) : data.quantity > 0 ? (
            <button className="add-to-cart" onClick={handleAddToCart}>
              <img
                src="https://img.icons8.com/material-outlined/48/02C3BD/shopping-cart.png"
                height="16"
                width="16"
              />{" "}
              Add to cart
            </button>
          ) : (
            <button className="out-of-stock">Out of stock</button>
          )}
          <Link
            className="view-product"
            to={`/product/${data && data.product_id}`}
          >
            View
          </Link>
        </div>
      </div>
      <div className="product-image">
        <img src={data && data.productImage && data.productImage[0]} />
      </div>
    </div>
  );
}
