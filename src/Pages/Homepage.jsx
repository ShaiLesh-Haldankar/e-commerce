import React, { useContext, useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import "./homepage.scss";
import { Context } from "./../Components/Context/Context";
export default function Homepage() {
  const context = useContext(Context);
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    // setList(arrayTest);
  }, []);

  return (
    <>
      <Layout>
        <div className="homepage">
          {arrayTest.map((data) => (
            <div className="card">
              <img src="https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-550,w-0,c-at_max" />
              <h5>{data.productName}</h5>
              <p>{data.price.currentPrice}</p>
              {data.inStock > 0 ? (
                <button
                  onClick={() => context.setCartCount(context.cartCount + 1)}
                >
                  Add to Cart
                </button>
              ) : (
                <h6>Out of Stock</h6>
              )}
            </div>
          ))}

          {/* {
            arrayTest.map(obj =>  <div className="card">
            <img src="https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-550,w-0,c-at_max" />
            <h5>{obj.productName}</h5>
            <p>{obj.price.currentPrice}</p>
            <button>Add to Cart</button>
          </div>)
          } */}
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
