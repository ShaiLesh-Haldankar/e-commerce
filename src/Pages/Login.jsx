import React from "react";
import Header from "./../Components/Header/Header";
import Footer from "./../Components/Footer/Footer";
import { useNavigate } from "react-router";
import LoginForm from './../Components/LoginForm/LoginForm';

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
        <LoginForm />
        {/* <button onClick={()=>handleSubmit(true)}>Submit</button> */}
      </div>
      <Footer />
    </>
  );
}
