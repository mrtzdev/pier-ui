import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import defaultTheme from "../../Theme/theme";
import { useTheme } from "../../PierUIProvider";

const propTypes = {
  variant: PropTypes.oneOf(["flat", "outlined", "shadow"]),
  className: PropTypes.string,
  as: PropTypes.string,
  children: PropTypes.any,
  maxWidth: PropTypes.string,
  borderRadius: PropTypes.string,
};

const defaultProps = {
  variant: "flat",
  as: "div",
};

const Card = (props) => {
  const {
    variant,
    className,
    maxWidth,
    borderRadius,
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
        className={classNames("card", className, variant && `${variant}`)}
        {...restProps}
      >
        {children}
      </Component>
      <style jsx>{`
        .card {
          width: 100%;
          position: relative;
          min-height: 100px;
          overflow: hidden;
          ${maxWidth ? "max-width:" + maxWidth : "max-width:" + "none"};
          ${borderRadius
            ? "border-radius:" + borderRadius
            : "border-radius:" + theme.borderRadius.base};
        }

        .card.flat {
          background-color: ${theme.colors.greyLight};
          border: 1px solid ${theme.colors.greyLight};
        }
        .card.outlined {
          border: 1px solid ${theme.colors.grey};
        }
        .card.shadow {
          box-shadow: 0 3px 15px -4px rgb(0 0 0 / 30%);
        }
      `}</style>
    </>
  );
};

export default Card;

Card.displayName = "Card";
Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
