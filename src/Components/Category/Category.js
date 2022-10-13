import React from "react";
import "./category.scss";
export default function Category() {
  return (
    <div className="category-main">
      <h5 className="category-title mb-4">Apple</h5>
      <div className="category-products-wrapper">
        <div className="product-card">
          <div className="product-details">
            <h6 className="name">Iphone 11</h6>
            <ul>
              <li>4 GB RAM | 64 GB ROM | Expandable Upto 1 TB</li>
              <li>16.76 cm (6.6 inch) Full HD+ Display</li>
              <li>50MP + 5MP + 2MP | 8MP Front Camera</li>
              <li>6000 mAh Lithium Ion Battery</li>
              <li>Exynos 850 Processor</li>
              <li>
                1 Year Warranty Provided By the Manufacturer from Date of
                Purchase
              </li>
            </ul>
            <h6 className="price">
              ₹46,000 <s>₹50,000</s>
            </h6>
            <button className="add-to-cart">
              <img
                src="https://img.icons8.com/material-outlined/48/02C3BD/shopping-cart.png"
                height="16"
                width="16"
              />{" "}
              Add to cart
            </button>
          </div>
          <div className="product-image">
            <img src="https://www.transparentpng.com/thumb/-iphone-x/7vQ8aI-iphone-pictures-transparent-png-pictures-free-icons.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
