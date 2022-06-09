/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "../index";

describe("Button", () => {
  it("should render button correctly", () => {
    render(<Button>Button</Button>);
    screen.debug();
  });

  it("Renders with a className equal to the variant", () => {
    const { container } = render(<Button variant="primary" />);
    expect(container.firstChild).toHaveClass("primary");
  });

  it("Renders with a className equal to the size", () => {
    const { container } = render(<Button size="xl" />);
    expect(container.firstChild).toHaveClass("xl");
  });

  it("Renders with a attribute disabled", () => {
    const { container } = render(<Button disabled />);
    expect(container.firstChild).toBeDisabled();
  });

  it("should render empty button correctly", () => {
    expect(<Button />).toMatchSnapshot();
  });
});
