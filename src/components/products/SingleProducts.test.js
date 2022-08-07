import { render, screen, fireEvent } from "@testing-library/react";
import SingleProduct from "./SingleProduct";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("SingleProduct", () => {
  it("testing of add to cart button", async () => {
    const { getByDisplayValue } = render(
      <Provider store={store}>
        <SingleProduct />
      </Provider>
    );

    const addButton = screen.getByDisplayValue("Add");

    expect(addButton).toBeInTheDocument();
  });
});
