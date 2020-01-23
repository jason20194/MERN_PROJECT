import { ADD_ITEM, REMOVE_ITEM, ADD_INITIAL_CART } from "../actions/types";

// how will reducer get access to the state and what structure should the data be in?

// these are the sample products to show that a state can update and add new products in it

let initialState = { products: [] };

if (localStorage.getItem("products")) {
  const initialCart = JSON.parse(localStorage.getItem("products"));
  initialState = { products: initialCart };
}

// try this one as well
// if (localStorage.products) {
//   const initialCart = JSON.parse(localStorage.products);
//   const initialState = { products: initialCart };
//   console.log(initialState.products);
// }

export default function(state = initialState, action) {
  let newState = {};

  switch (action.type) {
    case ADD_ITEM:
      let productsArray = [...state.products];
      productsArray.push(action.data);
      newState = { products: productsArray };

      localStorage.setItem("products", JSON.stringify(productsArray));
      break;

    default:
      newState = { ...state };
  }

  return newState;
}
