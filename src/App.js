import { Navigate, Route, Routes } from "react-router";
import "./App.scss";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import ProductDescription from "./Pages/ProductDescription";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
        <Route path="product">
          <Route path=":productId" element={<ProductDescription />} />
        </Route>
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </div>
  );
}

export default App;
