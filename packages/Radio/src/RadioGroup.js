import React, { forwardRef } from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import { RadioGroupContext } from "./RadioGroupContext";

/// todo: add defaultValue for uncontrolled componennt.

const propTypes = {
  orientation: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
  onChange: PropTypes.func,
  as: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
};

const defaultProps = {
  as: "div",
  orientation: "vertical",
};

const RadioGroup = forwardRef((props, ref) => {
  const {
    className,
    as,
    children,
    onChange,
    value,
    orientation,
    defaultValue,
    ...restProps
  } = props;
  const Component = as;

  const isUncontrolled = value === undefined ? true : false;
  let selected = value;

  function handleOnChange(value) {
    selected = value;
    if (!isUncontrolled) onChange(value);
  }

  return (
    <>
      <Component
        className={classNames(className, "wrap-radio-group")}
        ref={ref}
        {...restProps}
      >
        <RadioGroupContext.Provider
          value={[selected, handleOnChange, defaultValue]}
        >
          {children}
        </RadioGroupContext.Provider>
      </Component>

      <style jsx>{`
        .wrap-radio-group {
          display: flex;
          flex-direction: column;
          ${
            orientation === "horizontal"
              ? "flex-direction: row"
              : "flex-direction: column"
          }
      `}</style>
    </>
  );
});

export default RadioGroup;

RadioGroup.displayName = "RadioGroup";
RadioGroup.propTypes = propTypes;
RadioGroup.defaultProps = defaultProps;
