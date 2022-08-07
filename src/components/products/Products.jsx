import React from "react";
import SingleProduct from "./SingleProduct";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cartSlice";
import Loading from "../common/Loading";
const Products = () => {
  const { allProducts, loading } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const addItemToCart = (prod) => {
    dispatch(
      addToCart({
        ...prod,
        qty: 1,
        savings: 0,
        itemCost: prod.price,
        subPrice: prod.price,
      })
    );
  };
  return (
    <>
      {loading ? (
        <div className="flex justify-center py-6 items-center h-full">
          <Loading />
        </div>
      ) : (
        <div>
          {allProducts?.map((product) => (
            <SingleProduct
              key={product.id}
              product={product}
              addToCart={addItemToCart}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
