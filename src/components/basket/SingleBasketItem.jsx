import React, { useEffect } from "react";
import {
  decreaseQty,
  increaseQty,
  offersCheck,
} from "../../redux/features/cartSlice";
import Button from "../common/Button";
import { useDispatch } from "react-redux";
import ButtonOutline from "../common/ButtonOutline";
const SingleBasketItem = ({ product }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(offersCheck(product.name));
    return () => dispatch(offersCheck(product.name));
  }, [product.qty]);

  return (
    <div className="my-4 ">
      <div className=" flex justify-between items-center mt-4">
        <p className="font-medium text-xl">{product.name}</p>
        <p className="font-medium text-xl">
          <span className="text-gray-400 ">£</span> {product.price}
        </p>
        <div>
          <Button value="+" onClick={() => dispatch(increaseQty(product.id))} />
          <span className="py-2 px-4 text-xl ">{product.qty}</span>
          <ButtonOutline
            value="-"
            onClick={() => {
              dispatch(decreaseQty(product.id));
            }}
          />
        </div>
      </div>

      <p className="text-gray-500 mt-1 font-medium text-end">
        Item Price £ {product.price} * {product.qty} = £
        {product.subPrice.toFixed(2)}
      </p>
      <hr />
      {product.savings > 0 && (
        <>
          <p className="text-red-600 text-end mt-4 font-medium">
            Savings: £ {product.savings.toFixed(2)}
          </p>
          <hr />
        </>
      )}
      <p className="my-3 font-medium text-end">
        Item Cost: £ {product.itemCost.toFixed(2)}
      </p>
      <hr />
    </div>
  );
};

export default SingleBasketItem;
