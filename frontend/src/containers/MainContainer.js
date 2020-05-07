import React from 'react'
import Car from '../components/Car.js'
import SideBar from '../components/SideBar.js'
import NewCar from '../components/NewCar.js'
import NewReview from '../components/NewReview.js'
import { Switch, Route } from 'react-router-dom'

const MainContainer = ({cars, handleCarLinkClick, carId }) => (
      <div className="MainContainer">
        <SideBar
          cars={cars}
          handleCarLinkClick={handleCarLinkClick}
        />
        <Car car={cars.find(car => car.id === carId)}/>
      </div>
    )


export default MainContainer
