import React, { useContext, useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import "./homepage.scss";
import { Context } from "./../Components/Context/Context";
import Category from "../Components/Category/Category";
export default function Homepage() {
  const context = useContext(Context);
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    // setList(arrayTest);
  }, []);

  return (
    <>
      <Layout>
        <div className="homepage-main px-5 py-4">
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
        </div>
      </Layout>
    </>
  );
}
const arrayTest = [
  {
    productName: "Phone 1",
    price: {
      originalPrice: "23000",
      offerPrice: "17000",
      currentPrice: "17000",
      primePrice: 15000,
    },
    image:
      "https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-550,w-0,c-at_max",
    inStock: 10,
    rating: {
      average: 4.1,
      numberOfRatings: 200,
    },
  },
  {
    productName: "Phone 2",
    price: {
      originalPrice: "33000",
      offerPrice: "27000",
      currentPrice: "27000",
    },
    image:
      "https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-550,w-0,c-at_max",
    inStock: 0,
    rating: {
      average: 4.1,
      numberOfRatings: 200,
    },
  },
];
// export default function Homepage() {
//   return (
//     <Layout >
//       <div>

//       </div>

//     </Layout>
//   )
// }

const a = {
  productName: "",
  price: {
    originalPrice: "",
    currentPrice: "",
  },
  brand: "",
  quantity: 0,
  images: [""],
};
