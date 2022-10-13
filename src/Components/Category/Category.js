import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./category.scss";
export default function Category(props) {
  const { category } = props;
  return (
    <div className="category-main mb-4">
      <h5 className="category-title mb-4">{category.brandName}</h5>
      <div className="category-products-wrapper pb-4">
        {category.products.map((data) => (
          <ProductCard data={data} />
        ))}
      </div>
    </div>
  );
}
