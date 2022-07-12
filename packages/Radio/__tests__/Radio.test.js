/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { axe, toHaveNoViolations } from "jest-axe";

import Radio from "../index";

expect.extend(toHaveNoViolations);

describe("Checkbox", () => {
  it("should render Input correctly", () => {
    render(<Radio />);
    // screen.debug();
  });

  it("Renders with a attribute required", () => {
    render(<Radio label="required" required />);
    const inputNode = screen.getByLabelText("required", { selector: "input" });

    expect(inputNode).toBeRequired();
  });

  it("Renders with a attribute disabled", () => {
    render(<Radio label="disabled" disabled />);
    const inputNode = screen.getByLabelText("disabled", { selector: "input" });

    expect(inputNode).toBeDisabled();
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<Radio label="test  label" />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
