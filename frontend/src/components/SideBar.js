import React from 'react';
import { Link } from 'react-router-dom'

const SideBar = ({ cars }) => {
  const carLinks = cars.map ( car => (
    <Link key={car.id} to={`/cars/${car.id}`}>{car.year} {car.make} {car.model}</Link>
  ))
  return(
    <div className="SideBar">
    <h4>Cars Inventory </h4>
      {carLinks}
    </div>
  )
}


export default SideBar
