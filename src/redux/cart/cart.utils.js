//Checks state to find out if item already exist in the cart
//if it exists returns true

export const addItemToCart = (cartItems, cartItemsToAdd) => {
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === cartItemsToAdd.id
  );

  //If item exists in cart items are mapped to check item if it exist in the object and if it exists
  //it returns the whole object and add quantity + 1
  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //if it doesn't exist returns the whole array and object of item to add with default quantity of 1

  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItems.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
