import React from "react";
import Header from "./../Components/Header/Header";
import Footer from "./../Components/Footer/Footer";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (value) => {
    if (value) {
      navigate("/");
    } else {
      alert("Wrong credentials");
    }
  };
  return (
    <>
      <Header />
      <div>
        <h1>Login</h1>
        <button onClick={()=>handleSubmit(true)}>Submit</button>
      </div>
      <Footer />
    </>
  );
}
