import React, { useContext } from 'react'
import "./header.scss"
import { Context } from './../Context/Context';
export default function Header() {
  const data = React.useContext(Context)
  console.log(data);
  return (
    <h1><button>Cart({data.test})</button></h1>
  )
}
