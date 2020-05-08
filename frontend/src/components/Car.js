import React from 'react'
import { Link } from 'react-router-dom'

const Car = ({ car }) => {
  return (
    car
      ? <div className="Car">
          <h3>{car.make} {car.model}</h3>
          <p>Year: {car.year}</p>
          <p>Miles: {car.miles}</p>
          <p>Price: ${car.price}</p>
          <p>{car.used ? "Used" : "New!"}</p>
          <Link className="edit-car-link" to={`/cars/${car.id}/edit`}>Edit this car</Link>
        </div>
      : <h3>...Still Loading...</h3>
  )
}

export default Car
