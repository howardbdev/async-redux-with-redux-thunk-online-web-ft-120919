import React, { Component } from 'react';
import { updateCar } from "../actions/cars.js"
import { connect } from "react-redux"

const initialState = {
  year: "",
  make: "",
  model: "",
  miles: "",
  price: "",
  used: true,
  id: 0
}

class EditCar extends Component {

  state = this.props.car ?
  {
    year: this.props.car.year,
    make: this.props.car.make,
    model: this.props.car.model,
    miles: this.props.car.miles,
    price: this.props.car.price,
    used: this.props.car.used,
    id: this.props.car.id
  } :
  initialState

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  resetForm = () => {
    this.setState(initialState)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateCar(this.state)
      .then(response => {
        if (!response.error) {
          this.resetForm()
          this.props.history.push(`/cars/${response.id}`)
        }
      })
  }

  render() {
    return (
      this.props.car ?
      <div className="EditCar">
        <h4>Edit Car</h4>
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
          <input type="submit" value="Update this Car"/>
        </form>
      </div>
      : <h3>Loading</h3>
    );
  }

}

export default connect(null, { updateCar })(EditCar);
