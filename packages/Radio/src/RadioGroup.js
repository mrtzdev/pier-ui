import React, { useEffect, useMemo, useRef, forwardRef, useState } from "react";

import classNames from "classnames";
import PropTypes from "prop-types";
import defaultTheme from "../../Theme/theme";
import { useTheme } from "../../UiProvider";

const propTypes = {
  orientation: PropTypes.string,
  className: PropTypes.string,
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
    ...restProps
  } = props;
  const Component = as;

  const customTheme = useTheme();
  const theme = customTheme ? customTheme : defaultTheme;

  const [isChecked, setIsChecked] = useState(false);
  const [selected, setSelected] = useState("");

  const childrenRef = useRef([]);

  const selectItem = (selected) => {
    onChange(selected);
  };

  useEffect(() => {
    setSelected(value);
  }, [value]);

  return (
    <>
      <Component className={classNames("wrap-radio-group")} {...restProps}>
        {React.Children.map(children, (childElement, index) =>
          React.cloneElement(childElement, {
            ref: (ref) => (childrenRef.current[index] = ref),
            onChange: () => selectItem(childElement.props.value),
            isChecked: childElement.props.value == selected ? true : false,
            checked: childElement.props.value == selected ? true : false,
          })
        )}
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

RadioGroup.propTypes = propTypes;
RadioGroup.defaultProps = defaultProps;
