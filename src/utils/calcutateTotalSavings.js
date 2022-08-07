export const calculateTotalSavings = (cartItems) => {
  const totalSavings = cartItems.reduce((acc, curr) => acc + curr.savings, 0);
  return totalSavings;
};
