import React from "react";
import Layout from "../Layout/Layout";

export default function LoginForm() {
  const [token, settoken] = React.useState("");

  const handleSubmit = () => {
    //
    //
    //
    let res = {success: true, token: "12334"}
    if(res.success){
      sessionStorage.setItem("token", res.token)
    }

  };
  const logOut = () =>{
    localStorage.removeItem("token")
    // localStorage.clear()

  }
  return (
      <div>
        <button onClick={() => handleSubmit()}>Submit</button>
        <button onClick={() => logOut()}>Logout</button>
      </div>
  );
}
