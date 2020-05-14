import React, { Component } from 'react';
import { createCar } from "../actions/cars.js"
import { connect } from "react-redux"
import Form from "react-bootstrap/Form"
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup"
import ToggleButton from "react-bootstrap/ToggleButton"

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

  handleUsedToggle = val => this.setState({
    used: val
  })

  resetForm = () => {
    this.setState(initialState)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createCar(this.state, this.props.history)
      .then(response => {
        if (!response.error) {
          this.resetForm()
          this.props.history.push("/cars")
        }
      })
  }

  render() {
    return (
      <div className="NewCar">
        <h4>New Car</h4>
        <Form>
          <Form.Group>
            <Form.Control
              name="year"
              onChange={this.handleChange}
              type="year"
              placeholder="year"
              value={this.state.year}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              name="make"
              onChange={this.handleChange}
              type="make"
              placeholder="make"
              value={this.state.make}
            />
          </Form.Group>
          <Form.Group>
              <Form.Control
              name="model"
              onChange={this.handleChange}
              type="model"
              placeholder="model"
              value={this.state.model}
            />
          </Form.Group>
          <Form.Group>
              <Form.Control
              name="miles"
              onChange={this.handleChange}
              type="miles"
              placeholder="miles"
              value={this.state.miles}
            />
          </Form.Group>
          <Form.Group>
              <Form.Control
              name="price"
              onChange={this.handleChange}
              type="price"
              placeholder="price"
              value={this.state.price}
            />
          </Form.Group>
          <ToggleButtonGroup
            type="radio"
            name="used"
            value={this.state.used}
            onChange={this.handleUsedToggle}
          >
            <ToggleButton
              variant="outline-light"
              value={true}
            >
              Used
            </ToggleButton>
            <ToggleButton
              variant="outline-light"
              value={false}
            >
              New
            </ToggleButton>
          </ToggleButtonGroup>
        </Form>
      </div>
    );
  }

}

export default connect(null, { createCar })(NewCar);
