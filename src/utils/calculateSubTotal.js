export const calculateSubTotal = (cartItems) => {
  const subTotal = cartItems.reduce((acc, curr) => acc + curr.subPrice, 0);
  return subTotal;
};
