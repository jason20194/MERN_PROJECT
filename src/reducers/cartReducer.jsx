import { UPDATE_CART } from "../actions/types";

let initialState = { products: [] };

// read about the problems that localstorage and reducers have

// its difficult to use localstorage and reducers together

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CART:
      return {
        products: action.data
      }
    default:
      return state;
  }
}
