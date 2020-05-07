import React from 'react';

const SideBar = ({cars, handleCarLinkClick, newCarClick}) => (
  <div className="SideBar">
    <h4>Cars Inventory </h4>
    {cars.map(car => <a key={car.id} onClick={() => handleCarLinkClick(car.id)}>{car.year} {car.make} {car.model}</a>)}
  </div>
);

export default SideBar;
