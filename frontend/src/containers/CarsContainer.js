import React from 'react'
import Car from '../components/Car.js'
import ChooseCarPrompt from '../components/ChooseCarPrompt.js'
import SideBar from '../components/SideBar.js'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

const CarsContainer = ({ cars }) => {

    return (
      <div className="CarsContainer">
        <SideBar cars={cars} />

        <Switch>
          <Route exact path="/cars" component={ ChooseCarPrompt }/>
          <Route exact path="/cars/:id" render={(routerProps)=> {
            const car = cars.find(car => car.id === parseInt(routerProps.match.params.id))
            return <Car {...routerProps} car={car}/>
          }}/>
        </Switch>

      </div>
    )
}

// long-hand way of writing mstp function:
// const mapStateToProps = state => {
//   return {
//     cars: state.cars
//   }
// }

// I could also use destructuring and arrow function implicit return:
const mapStateToProps = ({ cars }) => ({ cars })

export default connect(mapStateToProps)(CarsContainer)
