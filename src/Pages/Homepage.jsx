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

const categoryList = [
  {
    brandName: "Apple",
    products: [],
  },
  {
    brandName: "Samsung",
    products: [],
  },

  {
    brandName: "Redmi",
    products: [],
  },
];
