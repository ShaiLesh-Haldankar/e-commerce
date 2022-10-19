import React, { useContext } from "react";
import "./header.scss";
import { Context } from "./../Context/Context";
import { NavLink } from "react-router-dom";

export default function Header() {
  const value = useContext(Context);
  console.log(value);
  return (
    <div className="header px-5">
      <div className="header-left">
        <img src="https://img.icons8.com/ios-glyphs/60/000000/menu--v1.png" />
        
        <NavLink to="/"><span>SH<b>17</b></span></NavLink>
      </div>
      <div className="header-center">
        <input placeholder="Search mobiles, brands" />
        <img height="20" width="20" src="https://img.icons8.com/material-outlined/48/d9d9d9/search.png"/>
      </div>
      <div className="header-right">
        <button>
          <img src="https://img.icons8.com/material-outlined/48/000000/shopping-cart.png" />
       <span>0</span>
        </button>
        <NavLink to="login">
        <button>Login</button>
        </NavLink>
      </div>
    </div>
  );
}
