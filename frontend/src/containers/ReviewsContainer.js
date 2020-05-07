import React, { Component } from 'react';
import Review from '../components/Review.js'
import NewReview from '../components/NewReview.js'

import { loadReviews, addReview } from "../actions/reviews.js"
import { connect } from 'react-redux'

class ReviewsContainer extends Component {
  state = {
    reviewId: 0
  }

  setReview = () => {
    // find a review at random
    // update the state with that review
    this.setState({
      reviewId: (Math.floor(Math.random() * this.props.dealerReviews.length))
    })
  }

  render() {
    return (
      <div className="ReviewsContainer">
        <button onClick={this.setReview}>
          Click to Show Random Review
        </button>

        {this.state.reviewId ? <Review review={this.props.dealerReviews.find(review => review.id === this.state.reviewId)} /> : ""}

        <NewReview />

      </div>
    );
  }

}
// get data from the Redux store
const mapStateToProps = state => {
  return {
    dealerReviews: state.reviews
  }
}

// log-hand way to write out MDTP function
// const mapDispatchToProps = dispatch => {
//   return {
//     loadReviews: (reviews) => dispatch(loadReviews(reviews)),
//     addReview: (review) => dispatch(addReview(review))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);

// a shorter, perhaps nicer way is to just pass an object as the second argument to connect():
export default connect(mapStateToProps, { loadReviews, addReview })(ReviewsContainer);
