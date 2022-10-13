import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./category.scss";
export default function Category() {
  return (
    <div className="category-main">
      <h5 className="category-title mb-4">Apple</h5>
      <div className="category-products-wrapper pb-4">
        {data.map((data) => (
          <ProductCard data={data}/>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    productname: "Iphone 11 mini",
    brand: "Apple",
    miniSpecs: [
      "4 GB RAM | 64 GB ROM | Expandable Upto 1 TB",
      "16.76 cm (6.6 inch) Full HD+ Display",
      "50MP + 5MP + 2MP | 8MP Front Camera",
      "6000 mAh Lithium Ion Battery",
      "Exynos 850 Processor",
      "1 Year Warranty Provided By the Manufacturer from Date ofPurchase",
    ],
    productImage: ["https://www.transparentpng.com/thumb/-iphone-x/7vQ8aI-iphone-pictures-transparent-png-pictures-free-icons.png"],
    price: {
      currentPrice: "36,000",
      originalPrice: "60,000",
    },
    quantity: 2,
  },
  {
    productname: "Iphone 12 ",
    brand: "Apple",
    miniSpecs: [
      "3 GB RAM | 32 GB ROM | Expandable Upto 1 TB",
      "16.76 cm (6.2 inch) Full HD+ Display",
      "48MP + 5MP + 2MP | 8MP Front Camera",
      "5000 mAh Lithium Ion Battery",
      "A Bionic 850 Processor",
      "1 Year Warranty Provided By the Manufacturer from Date ofPurchase",
    ],
    productImage: ["https://www.transparentpng.com/thumb/-iphone-x/7vQ8aI-iphone-pictures-transparent-png-pictures-free-icons.png"],
    price: {
      currentPrice: "45,000",
      originalPrice: "65,000",
    },
    quantity: 0,
  },
  {
    productname: "Iphone 13 mini",
    brand: "Apple",
    miniSpecs: [
      "2 GB RAM | 64 GB ROM | Expandable Upto 1 TB",
      "16.76 cm (5.6 inch) Full HD+ Display",
      "30MP + 5MP + 2MP | 8MP Front Camera",
      "4000 mAh Lithium Ion Battery",
      "A14 Bionic 850 Processor",
      "1 Year Warranty Provided By the Manufacturer from Date ofPurchase",
    ],
    productImage: ["https://www.transparentpng.com/thumb/-iphone-x/7vQ8aI-iphone-pictures-transparent-png-pictures-free-icons.png"],
    price: {
      currentPrice: "65,000",
      originalPrice: "75,000",
    },
    quantity: 2,
  },
];
