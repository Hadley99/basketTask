import Basket from "./components/basket/Basket";
import Products from "./components/products/Products";
import Wrapper from "./components/common/Wrapper";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "./redux/features/productsSlice";

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    dispatch(getAllProducts());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">
      <main className="w-full flex relative justify-between items-center space-x-8 px-40 ">
        <Wrapper title="Products">
          <Products />
        </Wrapper>

        <Wrapper title="Basket">
          {cart.length > 0 ? (
            <Basket />
          ) : (
            <>
              <p className="text-lg py-4 font-medium text-center">
                Your cart is empty!
              </p>
            </>
          )}
        </Wrapper>
      </main>
    </div>
  );
}

export default App;
