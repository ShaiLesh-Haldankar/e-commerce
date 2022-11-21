import React, { useContext, useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import "./homepage.scss";
import { Context } from "./../Components/Context/Context";
import Category from "../Components/Category/Category";
export default function Homepage() {
  return (
    <>
      <Layout>
        <div className="homepage-main py-4">
          {categoryList.map((category) => (
            <Category category={category} />
          ))}
        </div>
      </Layout>
    </>
  );
}

export const categoryList = [
  {
    brandName: "Apple",
    brand_id: "apple",
    products: [
      {
        productName: "Iphone 11 mini",
        brand: "Apple",
        product_id: "iphone-11-mini",
        miniSpecs: [
          "4 GB RAM | 64 GB ROM | Expandable Upto 1 TB",
          "16.76 cm (6.6 inch) Full HD+ Display",
          "50MP + 5MP + 2MP | 8MP Front Camera",
          "6000 mAh Lithium Ion Battery",
          "Exynos 850 Processor",
          "1 Year Warranty Provided By the Manufacturer from Date ofPurchase",
        ],
        productImage: [
          "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTF8ZW58MHx8MHx8&w=1000&q=80",
        ],
        price: {
          currentPrice: "36000",
          originalPrice: "60000",
        },
        quantity: 2,
      },
      {
        productName: "Iphone 12 ",
        brand: "Apple",
        product_id: "iphone-12",
        miniSpecs: [
          "3 GB RAM | 32 GB ROM | Expandable Upto 1 TB",
          "16.76 cm (6.2 inch) Full HD+ Display",
          "48MP + 5MP + 2MP | 8MP Front Camera",
          "5000 mAh Lithium Ion Battery",
          "A Bionic 850 Processor",
          "1 Year Warranty Provided By the Manufacturer from Date ofPurchase",
        ],
        productImage: [
          "https://pngimg.com/uploads/iphone_12/iphone_12_PNG17.png",
        ],
        price: {
          currentPrice: "45000",
          originalPrice: "65000",
        },
        quantity: 0,
      },
      {
        productName: "Iphone 13 mini",
        brand: "Apple",
        product_id: "iphone-13-mini",
        miniSpecs: [
          "2 GB RAM | 64 GB ROM | Expandable Upto 1 TB",
          "16.76 cm (5.6 inch) Full HD+ Display",
          "30MP + 5MP + 2MP | 8MP Front Camera",
          "4000 mAh Lithium Ion Battery",
          "A14 Bionic 850 Processor",
          "1 Year Warranty Provided By the Manufacturer from Date ofPurchase",
        ],
        productImage: [
          "https://fscl01.fonpit.de/devices/18/2018.png",
        ],
        price: {
          currentPrice: "65000",
          originalPrice: "75000",
        },
        quantity: 2,
      },
    ]
  },
  {
    brandName: "Samsung",
    products: [
      {
        productName: "Samsung A52",
        brand: "Samsung",
        product_id: "samsung-a52",
        miniSpecs: [
          "4 GB RAM | 64 GB ROM | Expandable Upto 1 TB",
          "16.76 cm (6.6 inch) Full HD+ Display",
          "50MP + 5MP + 2MP | 8MP Front Camera",
          "6000 mAh Lithium Ion Battery",
          "Exynos 850 Processor",
          "1 Year Warranty Provided By the Manufacturer from Date ofPurchase",
        ],
        productImage: [
          "https://images.samsung.com/is/image/samsung/p6pim/levant/sm-a526bzwhmeb/gallery/levant-galaxy-a52-5g-a526-sm-a526bzwhmeb-421564731?$650_519_PNG$",
        ],
        price: {
          currentPrice: "26000",
          originalPrice: "40000",
        },
        quantity: 2,
      },
      {
        productName: "Samsung S20FE",
        brand: "Samsung",
        product_id: "samsung-s20fe",
        miniSpecs: [
          "3 GB RAM | 32 GB ROM | Expandable Upto 1 TB",
          "16.76 cm (6.2 inch) Full HD+ Display",
          "48MP + 5MP + 2MP | 8MP Front Camera",
          "5000 mAh Lithium Ion Battery",
          "A Bionic 850 Processor",
          "1 Year Warranty Provided By the Manufacturer from Date ofPurchase",
        ],
        productImage: [
          "https://images.samsung.com/is/image/samsung/in-clear-standing-cover-for-galaxy-s20-fe-ef-jg780ctegin-fronttransparent-thumb-307977964?$480_480_PNG$",
        ],
        price: {
          currentPrice: "45000",
          originalPrice: "65000",
        },
        quantity: 0,
      }
    ]
  },

  {
    brandName: "Redmi",
    products: [
      {
        productName: "Redmi Note 10",
        brand: "Xiaomi",
        product_id: "redmi-note-10",
        miniSpecs: [
          "4 GB RAM | 64 GB ROM | Expandable Upto 1 TB",
          "16.76 cm (6.6 inch) Full HD+ Display",
          "50MP + 5MP + 2MP | 8MP Front Camera",
          "6000 mAh Lithium Ion Battery",
          "Exynos 850 Processor",
          "1 Year Warranty Provided By the Manufacturer from Date ofPurchase",
        ],
        productImage: [
          "http://cdn.shopify.com/s/files/1/0602/9334/9613/products/Xiaomi-Redmi-Note-10-Pro_Color__Glacier-Blue.png?v=1661601440",
        ],
        price: {
          currentPrice: "17999",
          originalPrice: "20000",
        },
        quantity: 2,
      },
      {
        productName: "Redmi Note 10 Pro ",
        brand: "Xiaomi",
        product_id: "redmi-note-10-pro",
        miniSpecs: [
          "3 GB RAM | 32 GB ROM | Expandable Upto 1 TB",
          "16.76 cm (6.2 inch) Full HD+ Display",
          "48MP + 5MP + 2MP | 8MP Front Camera",
          "5000 mAh Lithium Ion Battery",
          "A Bionic 850 Processor",
          "1 Year Warranty Provided By the Manufacturer from Date ofPurchase",
        ],
        productImage: [
          "https://images.samsung.com/is/image/samsung/p6pim/latin_en/2202/gallery/latin-en-galaxy-s22-s901-412946-sm-s901ezgjgto-thumb-530964482?$480_480_PNG$",
        ],
        price: {
          currentPrice: "19000",
          originalPrice: "22000",
        },
        quantity: 10,
      }
    ]
  },
];
