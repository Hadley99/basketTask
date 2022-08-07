export const findIndexOfProduct = (Products, name, type) => {
  const indexOfProductToUpdate = Products.findIndex(
    (prod) => prod[type] === name
  );
  return indexOfProductToUpdate;
};
