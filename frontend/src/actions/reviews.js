// synchronous action creators
export const loadReviews = reviews => ({ type: "LOAD_REVIEWS", reviews })

export const addReview = review => ({ type: "ADD_REVIEW", review })

// async action creators

export const fetchDealerReviews = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/dealer_reviews")
      .then(resp => resp.json())
      .then(reviews => {
        if (reviews.error) {
          alert(reviews)
        } else {
          dispatch(loadReviews(reviews))
        }
      })
      .catch(alert)
  }

}

export const createReview = reviewData => {
  return dispatch => {
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
          dispatch(addReview(newReview))
        }
        return newReview
      })
  }

}
