/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Container from "../index";

describe("Container", () => {
  it("should render Container correctly", () => {
    render(<Container></Container>);
    screen.debug();
  });

  it("Renders with a custom className ", () => {
    const { container } = render(
      <Container className="custom-class"> </Container>
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
