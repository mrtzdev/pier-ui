/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { axe, toHaveNoViolations } from "jest-axe";

import DropdownSelect from "../index";

expect.extend(toHaveNoViolations);

describe("Dropdown Select", () => {
  it("should render Input correctly", () => {
    render(
      <DropdownSelect
        options={[
          { label: "Grapes", value: "grapes" },
          { label: "Mango", value: "mango" },
          { label: "Strawberry", value: "strawberry" },
        ]}
        value={{ label: "Grapes", value: "grapes" }}
      />
    );
    //screen.debug();
  });

  it("Renders with a wrapper className equal to the size", () => {
    const { container } = render(
      <DropdownSelect
        size="lg"
        options={[
          { label: "Grapes", value: "grapes" },
          { label: "Mango", value: "mango" },
          { label: "Strawberry", value: "strawberry" },
        ]}
        value={{ label: "Grapes", value: "grapes" }}
      />
    );
    expect(container.firstChild).toHaveClass("wrap-lg");
  });

  it("Renders with className disabled", () => {
    const { container } = render(
      <DropdownSelect
        disabled
        options={[
          { label: "Grapes", value: "grapes" },
          { label: "Mango", value: "mango" },
          { label: "Strawberry", value: "strawberry" },
        ]}
        value={{ label: "Grapes", value: "grapes" }}
      />
    );
    const dropdown = container.querySelector(".dropdown-select");
    expect(dropdown).toHaveClass("disabled");
  });

  it("Renders with label", () => {
    const { container } = render(
      <DropdownSelect
        label="testlabel"
        options={[
          { label: "Grapes", value: "grapes" },
          { label: "Mango", value: "mango" },
          { label: "Strawberry", value: "strawberry" },
        ]}
        value={{ label: "Grapes", value: "grapes" }}
      />
    );
    const label = screen.getByText(/testLabel/i);

    expect(container).toContainElement(label);
  });

  it("calls onChange prop when clicked", () => {
    const handleChange = jest.fn();
    render(
      <DropdownSelect
        options={[
          { label: "Grapes", value: "grapes" },
          { label: "Mango", value: "mango" },
          { label: "Strawberry", value: "strawberry" },
        ]}
        value={{ label: "Grapes", value: "grapes" }}
        onChange={handleChange}
      />
    );
    const listItem = screen.getByText(/Mango/i);
    // screen.debug(listItem);
    fireEvent.click(listItem);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("should render with class visible when clicked dropdown-title", () => {
    const { container } = render(
      <DropdownSelect
        options={[
          { label: "Grapes", value: "grapes" },
          { label: "Mango", value: "mango" },
          { label: "Strawberry", value: "strawberry" },
        ]}
        value={{ label: "Grapes", value: "grapes" }}
      />
    );

    const dropdownTitle = container.querySelector(".dropdown-title");
    const dropdownContainer = container.querySelector(".dropdown-title");
    fireEvent.click(dropdownTitle);
    expect(dropdownTitle).toHaveClass("visible");
    expect(dropdownContainer).toHaveClass("visible");
  });

  it("should not have accessibility violations", async () => {
    const { container } = render(
      <DropdownSelect
        size="lg"
        options={[
          { label: "Grapes", value: "grapes" },
          { label: "Mango", value: "mango" },
          { label: "Strawberry", value: "strawberry" },
        ]}
        value={{ label: "Grapes", value: "grapes" }}
      />
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
