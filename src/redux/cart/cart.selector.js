import { createSelector } from "reselect";

//Selectors goes in the state to select a slice of data we need to perform a particular action..
//Selecting our state from the reducers.
//An input selector which returns a piece of the state..
const selectCart = (state) => state.cart;

//Selecting cartItems from cart reducer
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

//Returning the total quantity of the cart items
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartItemTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedPrice, cartItem) =>
        accumulatedPrice + cartItem.quantity * cartItem.price,
      0
    )
);
