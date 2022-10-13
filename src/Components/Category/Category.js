import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./category.scss";
export default function Category() {
  return (
    <div className="category-main">
      <h5 className="category-title mb-4">Apple</h5>
      <div className="category-products-wrapper">
        <ProductCard />
      </div>
    </div>
  );
}
