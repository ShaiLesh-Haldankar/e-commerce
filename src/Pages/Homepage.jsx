import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Layout from "../Components/Layout/Layout";

export default function Homepage() {
  return (
    <>
      <Header />
      <div>
        {[1, 2, 3].map((obj) => (
          <div></div>
        ))}
      </div>
      <Footer />
    </>
  );
}

// export default function Homepage() {
//   return (
//     <Layout >
//       <div>

//       </div>

//     </Layout>
//   )
// }
