import React from "react";
import Button from "../common/Button";
import { useSelector } from "react-redux";

const SingleProduct = ({ product, addToCart }) => {
  const cart = useSelector((state) => state.cart.cartItems);

  return (
    <>
      <div className="font-medium text-xl flex justify-around items-center my-4">
        <p>{product.name}</p>
        <div className="ml-auto flex justify-between items-center space-x-4">
          <p>
            <span className="text-gray-400 ">£</span> {product.price}
          </p>

          <Button
            data-testid="add-to-cart-button"
            value="Add"
            disabled={cart.find((p) => p.id === product.id)}
            onClick={() => addToCart(product)}
          />
        </div>
      </div>
      <hr />
    </>
  );
};

export default SingleProduct;
