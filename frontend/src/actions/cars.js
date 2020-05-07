// In Redux, action creators are functions that create actions.
// In Redux, actions are plain JS objects with at least a 'type' property and often a payload as well.
// Therefore, an action creator is a function that returns a plain JS object with a type property.
// When our actions carry a payload, which is just the data that is needed to make a change in the store,
// the action creator receives the payload as an argument in order to build the correct action.

// synchronous (regular) action creators...

// here is what the long-hand version might look like
// export function loadCars(cars) {
//   return {
//     type: "ADD_CARS",
//     cars: cars
//   }
// }

// with ES6, we can clean action creators like loadCars() up into one line:
export const loadCars = cars => ({ type: "LOAD_CARS", cars })

export const addCar = car => ({ type: "ADD_CAR", car })
