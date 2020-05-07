export default (state=[], action) => {
  switch (action.type) {
    case "LOAD_CARS":
      return action.cars
    case "ADD_CAR":
      return state.concat(action.car)
    default:
      return state
  }
}
