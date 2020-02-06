import { UPDATE_CART } from "./types";

// the functions created here will be exported to the component that needs to use that function. those function will be adding a item and removing item from the cart

export const updateCart = items => {
  return {
    type: UPDATE_CART,
    data: items
  };
};
