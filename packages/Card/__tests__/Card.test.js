/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Card from "../index";

describe("Card", () => {
  it("should render Card correctly", () => {
    render(<Card></Card>);
    screen.debug();
  });

  it("Renders with a custom className ", () => {
    const { container } = render(<Card className="custom-class"> </Card>);
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("Renders with a className equal to the variant", () => {
    const { container } = render(<Card variant="outlined" />);
    expect(container.firstChild).toHaveClass("outlined");
  });
});
