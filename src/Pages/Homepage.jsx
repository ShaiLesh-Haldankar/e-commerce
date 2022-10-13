import React, { useContext, useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import "./homepage.scss";
import { Context } from "./../Components/Context/Context";
import Category from "../Components/Category/Category";
export default function Homepage() {

  return (
    <>
      <Layout>
        <div className="homepage-main px-5 py-4">
          <Category />
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
