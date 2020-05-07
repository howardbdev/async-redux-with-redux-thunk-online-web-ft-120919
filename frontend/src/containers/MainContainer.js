import React from 'react'
import Car from '../components/Car.js'
import SideBar from '../components/SideBar.js'
import NewCar from '../components/NewCar.js'
import NewReview from '../components/NewReview.js'

class MainContainer extends React.Component {
  componentToRender = () => {
    console.log("props", this.props)
    switch (this.props.currentView) {
      case "newCar":
        return <NewCar createCar={this.props.createCar}/>
      case "newReview":
        return <NewReview createReview={this.props.createReview}/>
      default:
        return <Car car={this.props.cars.find(car => car.id === this.props.carId)}/>
    }
  }
  render() {
    return (
      <div className="MainContainer">
        <SideBar
          cars={this.props.cars}
          handleCarLinkClick={this.props.handleCarLinkClick}
          newCarClick={this.props.newCarClick}
        />
        { this.componentToRender() }
      </div>
    )
  }
}

export default MainContainer
