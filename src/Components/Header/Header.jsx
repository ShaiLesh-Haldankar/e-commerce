import React, { useContext } from 'react'
import "./header.scss"
import { Context } from './../Context/Context';
export default function Header() {
  const value = useContext(Context)
  console.log(value);
  return (
    <div className="header">
      <button>Cart({value.cartCount})</button>
    </div>
  )
}
