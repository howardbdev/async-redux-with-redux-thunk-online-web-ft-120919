export default (state=[], action) => {
  switch (action.type) {
    case "LOAD_CARS":
      return action.cars
    case "ADD_CAR":
      return state.concat(action.car)
    case "UPDATE_CAR_SUCCESS":
      return state.map(car => {
        // what am I doing?
        if (car.id === action.car.id) {
          return action.car
        } else {
          return car
        }
      })
    default:
      return state
  }
}
