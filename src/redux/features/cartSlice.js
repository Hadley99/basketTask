import { createSlice, current } from "@reduxjs/toolkit";
import { findIndexOfProduct } from "../../utils/findIndexOfProduct";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [] },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push({ ...action.payload });
    },

    incrementQty: (state, action) => {
      state.cartItems = action.payload;
    },

    decrementQty: (state, action) => {
      state.cartItems = action.payload;
    },

    offersCheck: (state, action) => {
      const productName = action.payload;
      const currentProducts = state.cartItems;

      if (productName === "Butter") {
        const indexOfProductToUpdate = findIndexOfProduct(
          currentProducts,
          productName,
          "name"
        );
        let butter = currentProducts[indexOfProductToUpdate];
        if (butter) {
          let savings = (butter.price * butter.qty) / 3;
          let itemCost = butter.price * butter.qty - savings;

          butter = { ...butter, savings, itemCost };

          currentProducts[indexOfProductToUpdate] = butter;

          state.cartItems = currentProducts;
        }
      }

      if (productName === "Cheese") {
        const indexOfProductToUpdate = findIndexOfProduct(
          currentProducts,
          productName,
          "name"
        );

        let cheese = currentProducts[indexOfProductToUpdate];
        if (cheese) {
          if (cheese.qty % 2 === 0) {
            let noOfProductsFree = cheese.qty / 2;
            let priceToReduce = noOfProductsFree * cheese.price;
            let newPrice = cheese.price * cheese.qty - priceToReduce;

            cheese = {
              ...cheese,
              savings: priceToReduce,
              itemCost: newPrice,
            };
          }

          if (cheese.qty % 2 !== 0) {
            let noOfProductsFree = Math.floor(cheese.qty / 2);
            let priceToReduce = noOfProductsFree * cheese.price;
            let newPrice = cheese.price * cheese.qty - priceToReduce;

            cheese = {
              ...cheese,
              savings: priceToReduce,
              itemCost: newPrice,
            };
          }
        }

        currentProducts[indexOfProductToUpdate] = cheese;
        state.cartItems = currentProducts;
      }

      //bread and soup
      if (productName === "Soup" || productName === "Bread") {
        const isSoupInCart = currentProducts.some(
          (product) => product.name === "Soup"
        );

        const indexOfProductToUpdate = findIndexOfProduct(
          currentProducts,
          "Bread",
          "name"
        );
        const indexOfSoup = findIndexOfProduct(currentProducts, "Soup", "name");

        let bread = currentProducts[indexOfProductToUpdate];
        let soup = currentProducts[indexOfSoup];

        if (isSoupInCart) {
          if (bread) {
            let offer = (bread.price / 2) * soup.qty;
            let itemCost = bread.qty * bread.price - offer;

            bread = { ...bread, savings: offer, itemCost };
            currentProducts[indexOfProductToUpdate] = bread;
            state.cartItems = currentProducts;
          }
          // if (bread) {
          //   // only one bread price is half
          //   let offerPrice = bread.price / 2;
          //   let itemCost = bread.price * bread.qty - offerPrice;
          //   let savings = offerPrice;

          //   bread = { ...bread, savings, itemCost };
          //   currentProducts[indexOfProductToUpdate] = bread;
          //   state.cartItems = currentProducts;
          // }
        } else {
          if (bread) {
            let itemCost = bread.price * bread.qty;
            bread = { ...bread, savings: 0, itemCost };
            currentProducts[indexOfProductToUpdate] = bread;

            state.cartItems = currentProducts;
          }
        }
      }
    },
  },
});

export const {
  addToCart,
  incrementQty,
  decrementQty,
  removeProduct,
  offersCheck,
} = cartSlice.actions;

export default cartSlice.reducer;

export const increaseQty = (id) => async (dispatch, getState) => {
  const state = getState().cart.cartItems;

  const currentProducts = [...state];
  const indexOfProductToUpdate = findIndexOfProduct(currentProducts, id, "id");

  let product = currentProducts[indexOfProductToUpdate];
  const qty = product.qty + 1;
  const savings = product.savings;

  product = {
    ...product,
    qty,
    itemCost: product.price * qty - savings,
    subPrice: product.price * qty,
  };
  currentProducts[indexOfProductToUpdate] = product;

  dispatch(incrementQty(currentProducts));
};

export const decreaseQty = (id) => async (dispatch, getState) => {
  const state = getState().cart.cartItems;
  const currentProducts = [...state];
  const indexOfProductToUpdate = findIndexOfProduct(currentProducts, id, "id");

  let product = currentProducts[indexOfProductToUpdate];
  const quantity = product.qty - 1;
  const savings = product.savings;

  if (product.qty > 0) {
    product = {
      ...product,
      qty: quantity,
      itemCost: product.price * quantity - savings,
      subPrice: product.price * quantity,
    };
    currentProducts[indexOfProductToUpdate] = product;

    dispatch(decrementQty(currentProducts));
  }

  if (product.qty <= 0) {
    const filteredProducts = currentProducts.filter((p) => p.id !== id);
    // currentProducts[indexOfProductToUpdate] = product;

    dispatch(decrementQty(filteredProducts));
  }
};
