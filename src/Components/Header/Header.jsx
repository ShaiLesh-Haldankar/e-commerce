import React, { useContext } from 'react'
import "./header.scss"
import { Context } from './../Context/Context';
export default function Header() {
  const data = useContext(Context)
  console.log(data);
  return (
    <div className="header">
      <button>Cart({data.cartCount})</button>
    </div>
  )
}
