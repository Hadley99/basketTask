import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  it("should check if button is rendered", () => {
    render(<Button value="Add" />);

    const addButton = screen.getByText("Add");
    expect(addButton.textContent).toBe("Add");
  });
});
