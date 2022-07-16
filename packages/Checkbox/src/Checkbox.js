import React, { forwardRef, useState } from "react";

import classNames from "classnames";
import PropTypes from "prop-types";
import defaultTheme from "../../Theme/theme";
import { useTheme } from "../../PierUIProvider";

const propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(["base", "sm", "md", "lg"]),
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  color: PropTypes.string,
  isChecked: PropTypes.bool,
  as: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.string,
  onChange: PropTypes.func,
};

const defaultProps = {
  size: "base",
  disabled: false,
  as: "div",
};

const CheckIcon = (props) => {
  const { color } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="12"
      fill="none"
      viewBox="0 0 15 12"
    >
      <path
        fill={color}
        d="M5.6 11.3L.5 6l2-1.9 3.1 3.3L13 0l2 2-9.4 9.3z"
      ></path>
    </svg>
  );
};

const Checkbox = forwardRef((props, ref) => {
  const {
    variant,
    color,
    className,
    size,
    disabled,
    required,
    as,
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
      <Component
        className={classNames(
          "wrap-checkbox",
          className,
          variant && `wrap-${variant}`,
          size && `wrap-${size}`,
          disabled && `wrap-disabled`,
          required && `wrap-required`
        )}
        ref={ref}
      >
        <label className="checkbox-label">
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
            disabled={disabled ? true : false}
            required={required ? true : false}
            {...restProps}
          />
          <span
            className={`checkbox ${isChecked ? "checkbox--checked" : ""} ${
              isCheckedUncontrolled ? "checkbox--checked" : ""
            } `}
            aria-hidden="true"
          >
            <div className="checkbox-icon">
              {isChecked ? <CheckIcon color={color ? color : "#000"} /> : ""}
              {isCheckedUncontrolled ? (
                <CheckIcon color={color ? color : "#000"} />
              ) : (
                ""
              )}
            </div>
          </span>
          <span className="checkbox-label-text">{label} </span>
        </label>
      </Component>

      <style jsx>{`
        .wrap-checkbox {
          user-select: none;
          position: relative;
          display: inline-block;
        }
        .wrap-disabled {
          cursor: not-allowed;
        }

        .wrap-disabled label {
          cursor: not-allowed;
          pointer-events: none;
        }

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
          position: relative;
          display: inline-block;
          height: 20px;
          width: 20px;
          background: #fff;
          border-radius: ${theme.borderRadius.xs};
          ${color
            ? "border: 1px solid" + color
            : "border: 1px solid" + theme.colors.grey};
        }

        .checkbox--checked {
        }

        .checkbox-icon {
          position: absolute;
          padding: 1px;
          color: #eee;
        }

        .checkbox-label {
          display: inline-flex;
          justify-content: flex-start;
          align-items: center;
          position: relative;
          width: auto;
          cursor: pointer;
        }

        .checkbox-label-text {
          padding-left: 8px;
        }
      `}</style>
    </>
  );
});

export default Checkbox;

Checkbox.displayName = "Checkbox";
Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
