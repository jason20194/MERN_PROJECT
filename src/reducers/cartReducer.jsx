import { ADD_ITEM, REMOVE_ITEM, ADD_INITIAL_CART } from "../actions/types";

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
  let productsArray = [...state.products];

  switch (action.type) {
    case ADD_ITEM:
      productsArray.push(action.data);
      newState = { products: productsArray };

      localStorage.setItem("products", JSON.stringify(productsArray));
      break;
    case REMOVE_ITEM:
      const filteredArray = productsArray.filter(element => {
        console.log(element._id, action.data._id);
        if (element._id === action.data._id) {
          return false;
        }
        return true;
      });

      console.log(filteredArray);

      newState = { products: filteredArray };

      console.log(newState);

      localStorage.setItem("products", JSON.stringify(filteredArray));
      break;

    default:
      newState = { ...state };
  }

  return newState;
}

// if (element._id === action.data._id) {
//   return element;
// }
