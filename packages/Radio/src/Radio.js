import React, { forwardRef, useState } from "react";

import classNames from "classnames";
import PropTypes from "prop-types";
import defaultTheme from "../../Theme/theme";
import { useTheme } from "../../PierUIProvider";

const propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(["base", "sm", "md", "lg"]),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  color: PropTypes.string,
  isChecked: PropTypes.bool,
  as: PropTypes.string,
};

const defaultProps = {
  size: "base",
  disabled: false,
  as: "div",
};

const Radio = forwardRef((props, ref) => {
  const {
    variant,
    color,
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
      <Component
        className={classNames(
          "wrap-radio",
          variant && `wrap-${variant}`,
          size && `wrap-${size}`,
          disabled && `wrap-disabled`,
          required && `wrap-required`
        )}
      >
        <label className="radio-label">
          <input
            className="radio-input"
            type="radio"
            {...(onChange
              ? { onChange }
              : {
                  onChange: () => {
                    hasChanged();
                  },
                })}
            value={value}
            {...(defaultChecked ? { defaultChecked } : {})}
            disabled={disabled ? true : false}
            required={required ? true : false}
            ref={ref}
            {...restProps}
          />
          <span
            className={`radio ${isChecked ? "radio--checked" : ""} ${
              isCheckedUncontrolled ? "radio--checked" : ""
            } `}
            aria-hidden="true"
          ></span>
          <span className="radio-label-text">{label} </span>
        </label>
      </Component>

      <style jsx>{`
        .wrap-radio {
          user-select: none;
          position: relative;
          display: block;
        }
        .wrap-disabled {
          cursor: not-allowed;
        }

        .wrap-disabled label {
          cursor: not-allowed;
          pointer-events: none;
        }

        .radio-input[type="radio"] {
          clip: rect(0 0 0 0);
          clip-path: inset(50%);
          height: 1px;
          overflow: hidden;
          position: absolute;
          white-space: nowrap;
          width: 1px;
        }
        .radio {
          position: relative;
          display: inline-block;
          height: 20px;
          width: 20px;
          background: #fff;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          ${color
            ? "border: 1px solid" + color
            : "border: 1px solid" + theme.colors.grey};
        }

        .radio:before {
          content: "";
          display: inline-block;
          position: relative;
          width: 50%;
          height: 50%;
          border-radius: 50%;
        }

        .radio.radio--checked:before {
          ${color
            ? "border: 1px solid" + color
            : "border: 1px solid" + theme.colors.grey};
          ${color ? "background-color:" + color : "background-color:" + "#000"};
        }
        .radio-label {
          display: inline-flex;
          justify-content: flex-start;
          align-items: center;
          position: relative;
          width: auto;
          cursor: pointer;
          margin-bottom: 8px;
        }

        .radio-label-text {
          padding-left: 8px;
          padding-right: 12px;
        }
      `}</style>
    </>
  );
});

export default Radio;

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;
