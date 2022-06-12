import PropTypes from "prop-types";

import defaultTheme from "../../Theme/theme";
import { useTheme } from "../../UiProvider";

const propTypes = {
  className: PropTypes.string,
  as: PropTypes.string,
  children: PropTypes.any,
  maxWidth: PropTypes.string,
};

const defaultProps = {
  as: "div",
};

const Container = (props) => {
  const { className, maxWidth, as, children, ...restProps } = props;
  const Component = as;

  const customTheme = useTheme();
  const theme = customTheme ? customTheme : defaultTheme;

  return (
    <>
      <Component className={`container ${className ? className : ""}`}>
        {children}
      </Component>
      <style jsx>{`
        .container {
          width: 100%;
          margin: 0 auto;
          position: relative;
          ${maxWidth
            ? "max-width:" + maxWidth
            : "max-width:" + theme.maxWidth.lg};
        }
      `}</style>
    </>
  );
};

export default Container;

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;
