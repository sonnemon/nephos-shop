export function addItemToCart(cartItems, itemToAdd) {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + itemToAdd.quantity,
          }
        : cartItem
    );
  }
  return [
    ...cartItems,
    {
      ...itemToAdd,
    },
  ];
}

export function removeItemToCart(cartItems, itemToRemove) {
  return cartItems.filter((cartItem) => cartItem.id != itemToRemove.id);
}

export function changeQuantityItemToCart(cartItems, itemToCart) {
  if (itemToCart.quantity == 0) {
    return cartItems.filter((cartItem) => cartItem.id != itemToCart.id);
  }
  return cartItems.map((cartItem) => {
    if (cartItem.id == itemToCart.id) {
      return {
        ...cartItem,
        quantity: itemToCart.quantity,
      };
    }
    return cartItem;
  });
}

export function calcTotalAmount(cartItems) {
  let totalAmount = 0;
  for (const cartItem of cartItems) {
    totalAmount = totalAmount + cartItem.price * cartItem.quantity;
  }
  return totalAmount;
}
