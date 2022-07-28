/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
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

  it("Renders with label", () => {
    const { container } = render(<Radio label="testlabel" />);
    const label = screen.getByText(/testLabel/i);

    expect(container).toContainElement(label);
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(<Radio label="test label" />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});

it("calls onChange prop when clicked", () => {
  const handleChange = jest.fn();
  render(
    <Radio.Group onChange={handleChange}>
      <Radio value="1" label="label">
        First
      </Radio>
      <Radio value="2">Second</Radio>
      <Radio value="3">Third</Radio>
    </Radio.Group>
  );
  const radio = screen.getByText(/label/i);

  fireEvent.click(radio);
  expect(handleChange).toHaveBeenCalledTimes(1);
});
