import React from 'react'
import { NavLink } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button'

const NavBar = () => {
  const activeStyle = {"backgroundColor": "lightblue", "fontWeight": "bold"}
  return (
    <div className="NavBar">
      <LinkContainer exact activeStyle={activeStyle} to="/home">
        <Button variant="outline-primary"> Home </Button>
      </LinkContainer>
      <LinkContainer exact activeStyle={activeStyle} to="/cars">
        <Button variant="outline-primary"> Cars </Button>
      </LinkContainer>
      <LinkContainer exact activeStyle={activeStyle} to="/cars/new">
        <Button variant="outline-primary"> New Car </Button>
      </LinkContainer>
      <LinkContainer exact activeStyle={activeStyle} to="/reviews">
        <Button variant="outline-primary"> Reviews </Button>
      </LinkContainer>
    </div>
  )
}

export default NavBar
