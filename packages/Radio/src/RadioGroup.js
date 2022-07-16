import React, { useEffect, useRef, forwardRef, useState } from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

const propTypes = {
  orientation: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
  onChange: PropTypes.func,
  as: PropTypes.string,
  value: PropTypes.any,
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
      <Component
        className={classNames(className, "wrap-radio-group")}
        ref={ref}
        {...restProps}
      >
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

RadioGroup.displayName = "RadioGroup";
RadioGroup.propTypes = propTypes;
RadioGroup.defaultProps = defaultProps;
