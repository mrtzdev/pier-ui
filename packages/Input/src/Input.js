import classNames from "classnames";
import PropTypes from "prop-types";

import defaultTheme from "../../Theme/theme";
import { useTheme } from "../../UiProvider";

const propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  labelFor: PropTypes.string,
  floatingLabel: PropTypes.bool,
  variant: PropTypes.oneOf(["outline", "filled"]),
  className: PropTypes.string,
  size: PropTypes.oneOf(["base", "sm", "md", "lg"]),
  width: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  color: PropTypes.string,
  focusColor: PropTypes.string,
  children: PropTypes.any,
  onChange: PropTypes.func,
};

const defaultProps = {
  variant: "outline",
  size: "base",
  width: "auto",
  disabled: false,
  required: false,
  readOnly: false,
  autoComplete: "off",
  type: "text",
  floatingLabel: false,
};

const Input = (props) => {
  const {
    value,
    onChange,
    type,
    required,
    readOnly,
    label,
    labelFor,
    placeholder,
    floatingLabel,
    autoComplete,
    variant,
    className,
    size,
    width,
    disabled,
    //isInvalid, //// isInvalid is not added yet: tests with form
    color, //// props: color = insgesamt color auch für filled,  focusColor extra invalid color ??? borderColor
    focusColor,

    children,
    ...restProps
  } = props;
  const Component = "div";

  const customTheme = useTheme();
  const theme = customTheme ? customTheme : defaultTheme;

  return (
    <>
      <Component
        className={classNames(
          "wrap-input",
          variant && `wrap-${variant}`,
          size && `wrap-${size}`,
          disabled && `wrap-disabled`,
          required && `wrap-required`
        )}
      >
        {label && !floatingLabel ? (
          <label htmlFor={labelFor} className="input-label">
            {label}
          </label>
        ) : (
          ""
        )}

        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={classNames(
            "input",
            className,
            variant && `${variant}`,
            size && `${size}`,
            disabled && `disabled`,
            required && `required`,
            readOnly && `readonly`
          )}
          type={type}
          disabled={disabled ? true : false}
          required={required ? true : false}
          readOnly={readOnly ? true : false}
          autoComplete={autoComplete}
          {...restProps}
        />
        {floatingLabel && label ? (
          <label htmlFor={labelFor} className="input-label floating-label">
            {label}
          </label>
        ) : (
          ""
        )}
        {children}
      </Component>

      <style jsx>{`
        .wrap-input {
          position: relative;
          display: inline-block;
          width: ${width};
          font-size: ${theme.fontSizes.base};
        }

        .wrap-disabled {
          cursor: not-allowed;
        }

        .input {
          width: 100%;
          height: 40px;
          background-color: transparent;
          border: 1px solid ${theme.colors.grey};
          font-size: ${theme.fontSizes.base};
          padding: 0px 14px;
          border-radius: ${theme.borderRadius.base};
          line-height: 1;
          ${color
            ? "border: 1px solid" + color
            : "border: 1px solid" + theme.colors.grey};
        }

        .input:focus {
          outline: none !important;

          ${focusColor
            ? "border: 1px solid" + focusColor
            : "border: 1px solid" + theme.colors.primary};
        }

        .input.readonly:focus {
          border: 1px solid ${theme.colors.grey};
        }

        .input::placeholder {
          color: ${theme.colors.textLight};
        }

        .input.disabled {
          pointer-events: none;
          cursor: not-allowed;
        }

        .input-label {
          display: block;
          margin-bottom: 8px;
          padding-left: 4px;
          overflow: hidden;
          white-space: nowrap;

          ${color ? "color:" + color : ""};
        }

        .wrap-sm {
          font-size: ${theme.fontSizes.sm};
        }

        .input.sm {
          font-size: ${theme.fontSizes.sm};
          height: 32px;
        }

        .wrap-md {
          font-size: ${theme.fontSizes.md};
        }
        .input.md {
          font-size: ${theme.fontSizes.md};
          height: 40px;
        }
        .wrap-lg {
          font-size: ${theme.fontSizes.lg};
        }
        .input.lg {
          font-size: ${theme.fontSizes.lg};
          height: 52px;
        }

        .input.filled {
          background-color: ${theme.colors.greyLight};

          ${color
            ? "border: 1px solid" + color
            : "border: 1px solid" + theme.colors.greyLight};
        }
        .input.filled:focus {
          outline: none !important;
          ${focusColor
            ? "border: 1px solid" + focusColor
            : "border: 1px solid" + theme.colors.primary};
        }

        .wrap-base .floating-label {
          position: absolute;
          top: 10px;
          left: 11px;
          pointer-events: none;
          transform: translateY(0px);
          color: ${theme.colors.textLight};
          transition: transform ${theme.transitions.base};
        }

        .wrap-base .input:focus ~ .floating-label {
          transform: translateY(-34px);
          color: ${theme.colors.text};
        }

        .wrap-sm .floating-label {
          position: absolute;
          top: 8px;
          left: 11px;
          transform: translateY(0px);
          pointer-events: none;
          color: ${theme.colors.textLight};
          transition: transform ${theme.transitions.base};
        }

        .wrap-sm .input:focus ~ .floating-label {
          transform: translateY(-30px);
          color: ${theme.colors.text};
        }
        .wrap-lg .floating-label {
          position: absolute;
          top: 13px;
          left: 11px;
          transform: translateY(0px);
          pointer-events: none;
          color: ${theme.colors.textLight};
          transition: transform ${theme.transitions.base};
        }

        .wrap-lg .input:focus ~ .floating-label {
          transform: translateY(-46px);
          color: ${theme.colors.text};
        }
      `}</style>
    </>
  );
};

export default Input;

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
