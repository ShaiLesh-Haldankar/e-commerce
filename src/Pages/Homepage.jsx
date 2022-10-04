import React, { useContext } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Layout from "../Components/Layout/Layout";
import "./homepage.scss";
import { Context } from "./../Components/Context/Context";
export default function Homepage() {
  const data = useContext(Context);
  const [count, setCount] = React.useState(0)
  return (
    <>
      <Layout>
        {arrayTest.map((obj) => (
          <div className="card">
            <img src={obj.productImage}/>
            <h5>{obj.productName}</h5>
            <h6>{obj.price}</h6>
            <p>{obj.brand}</p>
            <ul>
              {obj.specs.map((spec) => (
                <li>{spec}</li>
              ))}
            </ul>
            {obj.showCompare ? <button>COmpare</button> : null}
            <button onClick={() => data.setTest(data.test + 1)}>
              Add to cart
            </button>
          </div>
        ))}
      </Layout>
    </>
  );
}
const arrayTest = [
  {
    price: 20,
    productName: "Hello1",
    brand: "Hello Brand",
    specs: ["1", "2", "3", "4"],
    warranty: "1 year warranty",
    productImage: "https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-550,w-0,c-at_max",
    reviews: {
      averageRating: 3.3,
      noOfrating: 100,
    },
    showCompare: true,
  },
  {
    price: 40,
    productName: "Infi1",
    brand: "Hello Infi",
    productImage: "",
    specs: ["1", "2", "3", "4"],
    warranty: "2 year warranty",
    reviews: {
      averageRating: 4.3,
      noOfrating: 100,
    },
    showCompare: false,
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
