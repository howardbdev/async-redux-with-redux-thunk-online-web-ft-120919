import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const activeStyle = {"background-color": "lightgreen"}
  return (
    <div className="NavBar">
      <NavLink exact activeStyle={activeStyle} to="/home"> Home </NavLink>
      <NavLink exact activeStyle={activeStyle} to="/cars"> Cars </NavLink>
      <NavLink exact activeStyle={activeStyle} to="/cars/new"> New Car </NavLink>
      <NavLink exact activeStyle={activeStyle} to="/reviews"> Reviews </NavLink>
    </div>
  )
}

export default NavBar
