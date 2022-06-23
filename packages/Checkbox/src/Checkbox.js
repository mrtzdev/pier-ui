import React, { forwardRef, useState } from "react";

import classNames from "classnames";
import PropTypes from "prop-types";
import defaultTheme from "../../Theme/theme";
import { useTheme } from "../../UiProvider";

const propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(["base", "sm", "md", "lg", "xl"]),
};

const defaultProps = {
  size: "base",
  disabled: false,
  as: "div",
};

const Checkbox = forwardRef((props, ref) => {
  const {
    variant,
    className,
    size,
    width,
    disabled,
    required,
    as,
    children,
    onChange,
    value,
    label,
    isChecked,
    defaultChecked,
    ...restProps
  } = props;
  const Component = as;

  const customTheme = useTheme();
  const theme = customTheme ? customTheme : defaultTheme;

  const [isCheckedUncontrolled, setIsCheckedUncontrolled] =
    useState(defaultChecked);

  const hasChanged = () => {
    setIsCheckedUncontrolled(!isCheckedUncontrolled);
  };

  return (
    <>
      <Component>
        <label>
          <input
            className="checkbox-input"
            type="checkbox"
            {...(onChange
              ? { onChange }
              : {
                  onChange: () => {
                    hasChanged();
                  },
                })}
            value={value}
            defaultChecked={defaultChecked ? true : false}
            {...restProps}
          />
          <span
            className={`checkbox ${isChecked ? "checkbox--active" : ""} ${
              isCheckedUncontrolled ? "checkbox--active" : ""
            } `}
            aria-hidden="true"
          />
          Don't you dare to check me!
        </label>
      </Component>

      <style jsx>{`
        .checkbox-input[type="checkbox"] {
          clip: rect(0 0 0 0);
          clip-path: inset(50%);
          height: 1px;
          overflow: hidden;
          position: absolute;
          white-space: nowrap;
          width: 1px;
        }

        .checkbox {
          display: inline-block;
          height: 20px;
          width: 20px;
          background: #fff;
          border: 2px #ddd solid;
          margin-right: 4px;
        }

        .checkbox--active {
          border-color: purple;
          background: purple;
        }
      `}</style>
    </>
  );
});

export default Checkbox;

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
