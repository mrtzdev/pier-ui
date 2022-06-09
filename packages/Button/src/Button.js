import classNames from "classnames";
import PropTypes from "prop-types";
import defaultTheme from "../../Theme/theme";
import { useTheme } from "../../UiProvider";

const propTypes = {
  variant: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "third",
    "default-outline",
    "primary-outline",
    "secondary-outline",
    "third-outline",
  ]),
  className: PropTypes.string,
  size: PropTypes.oneOf(["base", "sm", "md", "lg", "xl"]),
  width: PropTypes.string,
  disabled: PropTypes.bool,
  as: PropTypes.string,
  children: PropTypes.any,
};

const defaultProps = {
  variant: "default",
  size: "base",
  width: "auto",
  disabled: false,
  as: "button",
};

const Button = (props) => {
  const {
    variant,
    className,
    size,
    width,
    disabled,
    as,
    children,
    ...restProps
  } = props;
  const Component = as;

  const customTheme = useTheme();
  const theme = customTheme ? customTheme : defaultTheme;

  return (
    <>
      <Component
        {...restProps}
        className={classNames(
          "button",
          className,
          variant && `${variant}`,
          size && `${size}`,
          disabled && `${disabled}`
        )}
        disabled={as === "button" && disabled ? true : false} /// ad disabled attr only to button
      >
        {children}
      </Component>

      <style jsx>{`
        button {
          border: none;
          box-shadow: none;
          text-shadow: none;
          border: none;
          outline: none;
          -webkit-appearance: none;
          border-radius: ${theme.borderRadius.base};
        }
        button:active {
          outline: none;
        }
        button:focus {
          outline: none;
        }

        .button {
          color: ${theme.colors.text};
          background-color: ${theme.colors.greyLight};
          border: 1px solid ${theme.colors.greyLight};
          border-radius: 2px;
          padding: 10px 38px;
          width: ${width};
          display: inline-block;
          cursor: pointer;
          transition: background-color ${theme.transitions.base};
          font-size: ${theme.fontSizes.base};
          text-align: center;
          border-radius: ${theme.borderRadius.base};
          pointer-events: ${disabled ? "none" : "auto"};
        }

        .button.sm {
          padding: 7px 28px;
        }

        .button.md {
          padding: 10px 38px;
        }

        .button.lg {
          padding: 18px 52px;
        }

        .button.xl {
          padding: 26px 70px;
        }

        .button.default {
          background-color: ${theme.colors.greyLight};
        }
        .button.default:hover {
          background-color: ${theme.colors.grey};
        }

        .button.primary {
          background-color: ${theme.colors.primary};
          border: 1px solid ${theme.colors.primary};
          color: #fff;
        }
        .button.primary:hover {
          background-color: ${theme.colors.primaryHover};
          border: 1px solid ${theme.colors.primaryHover};
          color: #fff;
        }
        .button.secondary {
          background-color: ${theme.colors.secondary};
          border: 1px solid ${theme.colors.secondary};
          color: #fff;
        }
        .button.secondary:hover {
          background-color: ${theme.colors.secondaryHover};
          border: 1px solid ${theme.colors.secondaryHover};
          color: #fff;
        }
        .button.third {
          background-color: ${theme.colors.third};
          border: 1px solid ${theme.colors.third};
          color: #fff;
        }
        .button.third:hover {
          background-color: ${theme.colors.thirdHover};
          border: 1px solid ${theme.colors.thirdHover};
          color: #fff;
        }

        .button.default-outline {
          background-color: transparent;
          border-color: ${theme.colors.grey};
        }
        .button.default-outline:hover {
          background-color: ${theme.colors.grey};
        }

        .button.primary-outline {
          background-color: transparent;
          border: 1px solid ${theme.colors.primary};
          color: ${theme.colors.primary};
        }
        .button.primary-outline:hover {
          background-color: ${theme.colors.primaryHover};
          border: 1px solid ${theme.colors.primaryHover};
          color: #fff;
        }
        .button.secondary-outline {
          background-color: transparent;
          border: 1px solid ${theme.colors.secondary};
          color: ${theme.colors.secondary};
        }
        .button.secondary-outline:hover {
          background-color: ${theme.colors.secondaryHover};
          border: 1px solid ${theme.colors.secondaryHover};
          color: #fff;
        }

        .button.third-outline {
          background-color: transparent;
          border: 1px solid ${theme.colors.third};
          color: ${theme.colors.third};
        }
        .button.third-outline:hover {
          background-color: ${theme.colors.thirdHover};
          border: 1px solid ${theme.colors.thirdHover};
          color: #fff;
        }
      `}</style>
    </>
  );
};

export default Button;

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
