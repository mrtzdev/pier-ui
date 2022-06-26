/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Checkbox from "../index";

describe("Checkbox", () => {
  it("should render Input correctly", () => {
    render(<Checkbox />);
    // screen.debug();
  });

  it("Renders with a attribute required", () => {
    render(<Checkbox label="required" required />);
    const inputNode = screen.getByLabelText("required", { selector: "input" });

    expect(inputNode).toBeRequired();
  });

  it("Renders with a attribute disabled", () => {
    render(<Checkbox label="disabled" disabled />);
    const inputNode = screen.getByLabelText("disabled", { selector: "input" });

    expect(inputNode).toBeDisabled();
  });
});
