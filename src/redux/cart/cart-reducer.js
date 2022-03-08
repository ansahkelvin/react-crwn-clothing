
import CartActionType from "./cart.action.type";
import { addItemToCart } from "./cart.utils";

//Initial state for our reducer when the application first runs.

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

//Cart reducer to determine which action should be performed depending
//on the action type from the switch..

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionType.TOGGLE_CART_HIDDEN:
      //Returns the state object and set hidden to the opposite of the value in state
      //this works for only boolen values
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CartActionType.ADD_ITEM:
      //Returns the state object and a function which handles the cart items
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
