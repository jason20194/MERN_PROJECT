import { ADD_ITEM, REMOVE_ITEM } from "./types";

// the functions created here will be exported to the component that needs to use that function. those function will be adding a item and removing item from the cart

// how will they get access to the data??
export const addItem = item => {
  return {
    type: ADD_ITEM,
    data: item
  };
};

// are we going to make the api calls here or in reducers???

export const removeItem = item => {
  return {
    type: REMOVE_ITEM,
    data: item
  };
};
