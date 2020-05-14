import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button'

const SideBar = ({ cars }) => {
  const carLinks = cars.map ( car => (
    <LinkContainer
      key={car.id}
      to={`/cars/${car.id}`}
    >
      <Button variant="link">{car.year} {car.make} {car.model}</Button>
    </LinkContainer>
  ))
  return(
    <div className="SideBar">
      <h4>Cars Inventory </h4>
      {carLinks}
    </div>
  )
}


export default SideBar
