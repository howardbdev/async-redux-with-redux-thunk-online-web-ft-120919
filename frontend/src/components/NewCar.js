import React, { Component } from 'react';
import { addCar } from "../actions/cars.js"
import { connect } from "react-redux"

const initialState = {
  year: "",
  make: "",
  model: "",
  miles: "",
  price: "",
  used: true
}

class NewCar extends Component {

  state = initialState

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  resetForm = () => {
    this.setState(initialState)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.createCar()
      .then(response => {
        if (!response.error) {
          this.resetForm()
        } 
      })
  }

  createCar = () => {
    const body = {
      car: this.state
    }
    return fetch("http://localhost:3001/api/v1/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(r => r.json())
      .then(newCar => {
        if (newCar.error) {
          alert(newCar.error)
        } else {
          // this.setState({
          //   cars: this.state.cars.concat(newCar)
          // })
          this.props.addCar(newCar)
          this.props.history.push("/cars")
        }
        return newCar
      })
  }

  render() {
    return (
      <div className="NewCar">
        <h4>New Car</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            name="year"
            placeholder="year"
            onChange={this.handleChange}
            value={this.state.year}
          /><br/>
          <input
            name="make"
            placeholder="make"
            onChange={this.handleChange}
            value={this.state.make}
          /><br/>
          <input
            name="model"
            placeholder="model"
            onChange={this.handleChange}
            value={this.state.model}
          /><br/>
          <input
            name="miles"
            placeholder="miles"
            onChange={this.handleChange}
            value={this.state.miles}
          /><br/>
          <input
            name="price"
            placeholder="price"
            onChange={this.handleChange}
            value={this.state.price}
          /><br/>
          <select name="used" value={this.state.used} onChange={this.handleChange}>
            <option value={true}>Used</option>
            <option value={false}>New</option>
          </select><br/>
          <input type="submit" value="Add Car"/>
        </form>
      </div>
    );
  }

}

export default connect(null, { addCar })(NewCar);
