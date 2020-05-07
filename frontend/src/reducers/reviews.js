export default (state=[], action) => {
  switch (action.type) {
    case "LOAD_REVIEWS":
      return action.reviews
    case "ADD_REVIEW":
      return state.concat(action.review)
    default:
      return state
  }
}
