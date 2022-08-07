export const calculateTotalItemCost = (cartItems) => {
  const totalItemCost = cartItems.reduce((acc, curr) => acc + curr.itemCost, 0);
  return totalItemCost;
};
