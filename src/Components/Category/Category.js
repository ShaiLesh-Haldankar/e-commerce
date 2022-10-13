import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./category.scss";
export default function Category() {
  return (
    <div className="category-main">
      <h5 className="category-title mb-4">Apple</h5>
      <div className="category-products-wrapper pb-4">
          {
              [1,2,3,4,5,6,7].map(data =><ProductCard />)
          }
        
      </div>
    </div>
  );
}
