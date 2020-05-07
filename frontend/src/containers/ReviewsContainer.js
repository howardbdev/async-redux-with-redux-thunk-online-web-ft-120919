import React, { Component } from 'react';
import Review from '../components/Review.js'
import NewReview from '../components/NewReview.js'

class ReviewsContainer extends Component {
  state = {
    dealerReviews: [],
    reviewId: 0,
    reviewsOn: true
  }

  componentDidMount() {
    this.getDealerReviews()
  }

  getDealerReviews = () => {
    fetch("http://localhost:3001/api/v1/dealer_reviews")
      .then(resp => resp.json())
      .then(reviews => {
        this.setState({
          dealerReviews: reviews
        })
      })
  }

  setReview = () => {
    // find a review at random
    // update the state with that review
    const review = this.state.dealerReviews[Math.floor(Math.random() * this.state.dealerReviews.length)]
    this.setState({
      reviewId: review ? review.id : 0
    })
  }

  handleReviewsButtonClick = () => {
    this.state.reviewsOn ? this.stopInterval() : this.startInterval()
    this.setState({reviewsOn: !this.state.reviewsOn})
  }

  createReview = (reviewData) => {
    const body = {
      dealer_review: reviewData
    }
    return fetch("http://localhost:3001/api/v1/dealer_reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(r => r.json())
      .then(newReview => {
        if (newReview.error) {
          alert(newReview.error)
        } else {
          this.setState({
            dealerReviews: this.state.dealerReviews.concat(newReview)
          })
        }
        return newReview
      })
  }

  render() {
    return (
      <div className="ReviewsContainer">
      <button
        onClick={() => this.setState({reviewId: (Math.floor(Math.random() * this.state.dealerReviews.length))})}
      >
        Click to Show Random Review
      </button>

      {this.state.reviewId ? <Review review={this.state.dealerReviews.find(review => review.id === this.state.reviewId)} /> : ""}

        <h3>No Hooks</h3>
        <NewReview createReview={this.createReview}/>

      </div>
    );
  }

}

export default ReviewsContainer;
