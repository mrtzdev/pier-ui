/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { axe, toHaveNoViolations } from "jest-axe";

import Checkbox from "../index";

expect.extend(toHaveNoViolations);

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

  it("Renders default checked", () => {
    render(<Checkbox defaultChecked label="defaultChecked" />);
    const inputNode = screen.getByLabelText("defaultChecked", {
      selector: "input",
    });

    expect(inputNode).toBeChecked();
  });

  it("Renders with label", () => {
    const { container } = render(<Checkbox label="testlabel" />);
    const label = screen.getByText(/testLabel/i);

    expect(container).toContainElement(label);
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<Checkbox label="test label" />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it("should render empty checkbox correctly", () => {
    expect(<Checkbox />).toMatchSnapshot();
  });
});
