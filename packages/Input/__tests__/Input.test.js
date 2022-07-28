/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { axe, toHaveNoViolations } from "jest-axe";

import Input from "../index";

expect.extend(toHaveNoViolations);

describe("Input", () => {
  it("should render Input correctly", () => {
    render(<Input />);
    // screen.debug();
  });

  it("Renders with a attribute required", () => {
    render(<Input placeholder="required" required />);
    const inputNode = screen.getByPlaceholderText("required");

    expect(inputNode).toBeRequired();
  });

  it("Renders with a attribute disabled", () => {
    render(<Input placeholder="disabled" disabled />);
    const inputNode = screen.getByPlaceholderText("disabled");

    expect(inputNode).toBeDisabled();
  });

  it("Renders with a className equal to the variant", () => {
    render(<Input placeholder="variant filled" variant="filled" />);
    const inputNode = screen.getByPlaceholderText("variant filled");

    expect(inputNode).toHaveClass("filled");
  });

  it("Renders with label", () => {
    const { container } = render(
      <Input label="test label" labelFor="test-id" id="test-id" />
    );
    const label = container.querySelector(".input-label");

    expect(container).toContainElement(label);
  });

  it("Renders with floating label", () => {
    const { container } = render(
      <Input
        label="test floating label"
        floatingLabel={true}
        labelFor="test-id-02"
        id="test-id-02"
        aria-label="test floating label"
      />
    );
    const label = container.querySelector(".input-label");

    expect(container).toContainElement(label);
    // screen.debug(label);
    expect(label).toHaveClass("floating-label");
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(
      <Input
        label="test floating label"
        floatingLabel={true}
        labelFor="test-id-02"
        id="test-id-02"
        aria-label="test floating label"
      />
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
