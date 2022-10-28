import React from "react";
import { useParams } from "react-router";
import ProductCard from "../Components/ProductCard/ProductCard";
import Layout from "./../Components/Layout/Layout";
import { categoryList } from "./Homepage";
import "./pdp.scss"
export default function ProductDescription() {
  const { productId } = useParams();
  const [productDetais, setProductDetails] = React.useState(null);


  const getProductDetails = () => {
    let data = null;
    categoryList.map((category) => {
      category.products.map((product) => {
        if (product.product_id === productId) {
          data = product;
        }
      });
    });
    setProductDetails(data)
  };

  React.useEffect(() => {
    getProductDetails();
  }, []);

  if(!productDetais){
    return "Loading...."

  }
  return (
    <Layout>
      <div className="pdp">
      <ProductCard data={productDetais}/>
      </div>
    </Layout>
  );
}
