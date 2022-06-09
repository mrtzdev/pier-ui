/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Grid from "../index";

describe("Grid", () => {
  it("should render grid correctly", () => {
    render(<Grid></Grid>);
    screen.debug();
  });

  it("Renders with a custom className ", () => {
    const { container } = render(<Grid className="custom-class"> </Grid>);
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("should render empty grid correctly", () => {
    expect(<Grid />).toMatchSnapshot();
  });
});
