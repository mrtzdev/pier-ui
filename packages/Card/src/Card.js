import classNames from "classnames";
import PropTypes from "prop-types";
import defaultTheme from "../../Theme/theme";
import { useTheme } from "../../UiProvider";

const propTypes = {
  variant: PropTypes.oneOf(["flat", "outlined", "shadow"]),
  className: PropTypes.string,
  as: PropTypes.string,
  children: PropTypes.any,
  maxWidth: PropTypes.string,
};

const defaultProps = {
  variant: "flat",
  as: "div",
};

const Card = (props) => {
  const { variant, className, maxWidth, as, children, ...restProps } = props;
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
          border-radius: ${theme.borderRadius.base};
          min-height: 100px;
          ${maxWidth ? "max-width:" + maxWidth : "max-width:" + "none"};
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

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
