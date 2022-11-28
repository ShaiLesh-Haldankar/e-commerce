import React from "react";
import Layout from "../Layout/Layout";

export default function LoginForm() {
  const [token, settoken] = React.useState("");
  const [details, setDetails] = React.useState({
    email: "",
    password: "",
  });

  const authenticate = async () => {
    let user = userData.find((obj) => {
      return obj.email === details.email && obj.password === details.password;
    });
    if (user) {
      return user.token;
    }
    return null;
  };
  const handleSubmit = () => {
    let checkUser = authenticate();
    if (checkUser) {
      localStorage.setItem(checkUser);
      //navigate To Dashboard
    } else {
      alert("Wrong credentials");
    }
  };
  const logOut = () => {
    localStorage.removeItem("token");
    // localStorage.clear()
  };
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          required
          value={details.email}
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
        />
        <input
          type="password"
          required
          value={details.password}
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
        />

        <button onClick={() => handleSubmit()}>Submit</button>
      </form>
      {/* <button onClick={() => handleSubmit()}>Submit</button>
      <button onClick={() => logOut()}>Logout</button> */}
    </div>
  );
}
const userData = [
  {
    email: "pradnya@gmail.com",
    password: "1234",
    token: Math.random(10000000),
  },
  {
    email: "pradnya2@gmail.com",
    password: "1234",
    token: Math.random(10000000),
  },
  {
    email: "pradnya3@gmail.com",
    password: "1234",
    token: Math.random(10000000),
  },
];
