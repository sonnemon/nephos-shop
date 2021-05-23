export function deleteWish(wishList, wishToDelete) {
  console.log(wishList, wishToDelete);
  return wishList.filter((wish) => wish.id != wishToDelete.id);
}

export function deleteItemToWishlist(wishlist, wishToEdit, productToDelete) {
  const existingWish = wishlist.find((wish) => wish.id == wishToEdit.id);
  existingWish.products = existingWish.products.filter(
    (product) => product.id != productToDelete.id
  );
  return wishlist.map((wish) => {
    if (wish.id == existingWish.id) {
      return existingWish;
    }
    return wish;
  });
}

export function addItemToWishlist(wishlist, itemToAdd, wishId) {
  const wishSelected = wishlist.find((wish) => wish.id == wishId);
  const existProduct = wishSelected.products.find(
    (product) => product.id == itemToAdd.id
  );
  if (existProduct) {
    return wishlist;
  }
  wishSelected.products = [...wishSelected.products, itemToAdd];
  return wishlist.map((wish) => {
    if (wish.id == wishSelected.id) {
      return wishSelected;
    }
    return wish;
  });
}
