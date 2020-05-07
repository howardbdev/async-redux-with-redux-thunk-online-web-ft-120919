import React from 'react'

const Car = ({ car }) => {
  return (
    car
      ? <div className="Car">
          <h3>{car.make} {car.model}</h3>
          <p>Year: {car.year}</p>
          <p>Miles: {car.miles}</p>
          <p>Price: ${car.price}</p>
          <p>{car.used ? "Used" : "New!"}</p>
        </div>
      : <h3>...Still Loading...</h3>
  )
}

export default Car
