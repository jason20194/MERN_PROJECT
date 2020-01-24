import { ADD_ITEM, REMOVE_ITEM } from "../actions/types";

let initialState = { products: [] };

if (localStorage.getItem("products")) {
  const initialCart = JSON.parse(localStorage.getItem("products"));
  console.log(initialCart);
  initialState = { products: initialCart };
}

export default function(state = initialState, action) {
  let newState = {};
  let productsArray;
  if ([...state.products].length === 0) {
    productsArray = [];
  } else {
    productsArray = [...state.products];
  }

  switch (action.type) {
    case ADD_ITEM:
      productsArray.push(action.data);
      newState = { products: productsArray };

      localStorage.setItem("products", JSON.stringify(productsArray));
      break;
    case REMOVE_ITEM:
      const filteredArray = productsArray.filter(element => {
        if (element._id === action.data._id) {
          return false;
        }
        return true;
      });

      newState = { products: filteredArray };

      localStorage.setItem("products", JSON.stringify(filteredArray));
      break;

    default:
      newState = { ...state };
  }

  return newState;
}
