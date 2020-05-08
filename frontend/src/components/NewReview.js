import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createReview } from '../actions/reviews.js'
import StarRating from './StarRating'

class NewReview extends Component {

  state = {
    rating: 0,
    content: ""
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleStarClick = (rating) => {
    this.setState({ rating })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createReview(this.state)
      .then(response => !response.error && this.resetForm())
  }

  resetForm = () => {
    this.setState({
      rating: 0,
      content: ""
    })
  }

  render() {
    return (
      <div className="NewReview">
        <h4>New Review</h4>
        <StarRating handleStarClick={this.handleStarClick} rating={this.state.rating}/>
        <form onSubmit={this.handleSubmit}>
          <textarea
            onChange={this.handleChange}
            placeholder="Review Content"
            value={this.state.content}
            name="content"
          /><br/>
          <input type="submit" value="Add Review"/>
        </form>
        <div>
        </div>
      </div>
    );
  }
}

export default connect(null, { createReview })(NewReview);
