import React from "react";
import Layout from "../Layout/Layout";

export default function LoginForm() {
  const [userDetails, setUserDetails] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    console.log("user details", userDetails);
    console.log("user details", usersData);
    // Iterate over usersData array and write your logic...
    // Use can use Array.map or Array.find Array.forEach..... I'll prefer Array.find
    // check how does Array.find work.. How to write logic in it & what it return

    //Then if your condition is matched route user back to homepage. we need to use history.push("/") which I'll explain
    
    //If not show then alert()
  };
  const logOut = () => {
    localStorage.removeItem("token");
    // localStorage.clear()
  };
  return (
    <div>
      <div>
        <label>Email</label>
        <input
          type="email"
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          onChange={(e) =>
            setUserDetails({ ...userDetails, password: e.target.value })
          }
        />
      </div>
      <button onClick={() => handleSubmit()}>Submit</button>
      <button onClick={() => logOut()}>Logout</button>
    </div>
  );
}

const usersData = [
  { email: "1234@gmail.com", password: "1234" },
  { email: "2345@gmail.com", password: "2345" },
  { email: "7854@gmail.com", password: "7854" },
  { email: "1342@gmail.com", password: "1342" },
];
