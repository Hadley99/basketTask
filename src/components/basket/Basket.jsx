import React from "react";
import SingleBasketItem from "./SingleBasketItem";
import { useSelector } from "react-redux";

import { calculateTotalSavings } from "../../utils/calcutateTotalSavings";
import { calculateTotalItemCost } from "../../utils/calculateTotalItemCost";
import { calculateSubTotal } from "../../utils/calculateSubTotal";

const Basket = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <>
      <div>
        {cartItems?.map((product) => (
          <SingleBasketItem key={product.id} product={product} />
        ))}
      </div>

      {cartItems.length > 0 && (
        <section>
          <div className="font-medium text-lg flex my-2 justify-between items-center">
            <p>Sub Total:</p>
            <p>
              <span className="text-gray-400">£ </span>
              {calculateSubTotal(cartItems).toFixed(2)}
            </p>
          </div>
          <div className="font-medium text-lg flex my-2 justify-between items-center">
            <p>Savings:</p>
            <p>
              <span className="text-gray-400">£ </span>
              {calculateTotalSavings(cartItems).toFixed(2)}
            </p>
          </div>
          <div className="font-medium text-lg flex my-2 justify-between items-center">
            <p>Total Amount:</p>
            <p>
              <span className="text-gray-400">£ </span>
              {calculateTotalItemCost(cartItems).toFixed(2)}
            </p>
          </div>
        </section>
      )}
    </>
  );
};

export default Basket;
