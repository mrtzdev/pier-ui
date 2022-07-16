import React, { useState, useMemo } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import defaultTheme from "../../Theme/theme";
import { useTheme } from "../../PierUIProvider";

import useOnClickOutside from "../../useClickOutside";

const IconChevron = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          fillRule="nonzero"
          d="M5.468 7L4 8.468l8 8 8-8L18.532 7 12 13.532z"
        ></path>
      </g>
    </svg>
  );
};

const propTypes = {
  value: PropTypes.array.isRequired,
  options: PropTypes.array.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string,
  focusColor: PropTypes.string,
  variant: PropTypes.oneOf(["outline", "filled"]),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  closeOnChange: PropTypes.bool,
};

const defaultProps = {
  variant: "outline",
  size: "base",
  width: "auto",
  disabled: false,
  required: false,
  closeOnChange: true,
};

const DropdownSelectMultiple = (props) => {
  const {
    className,
    list,
    options,
    value,
    label,
    floatingLabel,
    placeholder,
    disabled,
    required,
    onChange,
    closeOnChange,
    width,
    color,
    variant,
    focusColor,
    size,
    children,
    multiple,
    ...restProps
  } = props;

  const Component = "div";

  const customTheme = useTheme();
  const theme = customTheme ? customTheme : defaultTheme;

  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState([]);

  const modalRef = useOnClickOutside(() => setVisible(false));

  const selectItem = (selectedValue) => {
    const findItem = () => {
      let item = options.find((x) => x.value === selectedValue);
      return item;
    };

    /// Check if an Array contains  Object
    const index = selected.findIndex((element) => {
      if (element.value === findItem().value) {
        return true;
      }
    });
    /// object is in array: remove the item else add the item
    if (index !== -1) {
      const removeItem = selected.filter(
        (item) => item.value !== findItem().value
      );
      const newArray = removeItem;
      onChange(newArray);
    } else {
      const newArray = [...selected, findItem()];
      onChange(newArray);
    }

    if (closeOnChange) setVisible(false);
  };

  /// find the selected items
  const findSelected = (v) => {
    return selected.some(function (el) {
      return el.value === v;
    });
  };

  useMemo(() => {
    setSelected(value);
  }, [value]);

  return (
    <>
      <Component
        className={classNames(
          "wrap-dropdown-select",
          size && `wrap-${size}`,
          variant && `wrap-${variant}`,
          disabled && `wrap-disabled`,
          required && `wrap-required`,
          Object.keys(selected).length != 0 && `is-selected`,
          visible && `is-focused`
        )}
      >
        {label && !floatingLabel ? (
          <label className="dropdown-label">{label}</label>
        ) : (
          ""
        )}
        <div
          ref={modalRef}
          className={classNames(
            "dropdown-select",
            className,
            variant && `${variant}`,
            size && `${size}`,
            disabled && `disabled`,
            required && `required`
          )}
          {...restProps}
        >
          <div
            onClick={() => {
              setVisible(!visible);
            }}
            className={`dropdown-title ${visible ? "visible" : ""}`}
          >
            {placeholder && selected.length === 0 ? (
              <div className="dropdown-placeholder">{placeholder}</div>
            ) : (
              <div className="dropdown-selected">
                {selected.map((s, index, selected) => {
                  if (selected.length - 1 === index) return s.label + "  ";
                  return s.label + ", " + " ";
                })}
              </div>
            )}
            <div className="chevron-icon">
              <IconChevron />
            </div>
          </div>
          <div
            className={`dropdown-list-container  ${visible ? "visible" : ""}`}
          >
            <ul className="list" role="listbox">
              {options.map((item) => {
                return (
                  <li
                    onClick={() => {
                      selectItem(item.value);
                    }}
                    key={item.value}
                    className={`item ${
                      findSelected(item.value) ? "selected" : ""
                    }`}
                    role="option"
                    aria-selected={
                      item.value === selected.value ? "true" : "false"
                    }
                  >
                    <div className="item-label">{item.label}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {floatingLabel && label ? (
          <label
            className={`dropdown-label floating-label ${
              Object.keys(selected).length != 0 ? "selected" : ""
            }`}
          >
            {label}
          </label>
        ) : (
          ""
        )}
        {children}
      </Component>
      <style jsx>
        {`
          .wrap-dropdown-select {
            position: relative;
          }
          .wrap-disabled {
            cursor: not-allowed;
          }
          .dropdown-select {
            position: relative;
            width: ${width};
          }
          .dropdown-title {
            cursor: pointer;
            height: 40px;
            padding: 10px 24px 10px 7px;
            position: relative;
            border: 1px solid ${theme.colors.grey};
            border-radius: 0px;
            border-radius: ${theme.borderRadius.base};
            color: ${theme.colors.text};
            overflow: hidden;
            white-space: nowrap;
            ${color
              ? "border: 1px solid" + color
              : "border: 1px solid" + theme.colors.grey};
          }

          .dropdown-select.filled .dropdown-title {
            background-color: ${theme.colors.greyLight};
            border: 1px solid ${theme.colors.greyLight};
          }

          .dropdown-placeholder {
            color: ${theme.colors.textLight};
            overflow: hidden;
            white-space: nowrap;
          }

          .dropdown-selected {
            overflow: hidden;
            white-space: nowrap;
          }

          .dropdown-select.disabled {
            pointer-events: none;
            cursor: not-allowed;
          }
          .chevron-icon {
            position: absolute;
            right: 6px;
            top: 8px;
            ${color ? "color:" + color : "color:" + theme.colors.text};
          }

          .dropdown-title.visible .chevron-icon {
            top: 5px;
            transform: rotateX(-180deg);
          }
          .dropdown-list-container {
            display: none;
            position: absolute;
            width: 100%;
            z-index: 1;
            background-color: #fff;
            border: 1px solid ${theme.colors.grey};
            border-top: none;
            border-radius: 0px;
            border-radius: ${theme.borderRadius.base};
          }
          .dropdown-list-container.visible {
            display: block;
          }
          .list {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          .item {
            padding: 10px 8px;
            cursor: pointer;
          }
          .item:hover {
            background-color: ${theme.colors.greyLight};
          }
          .item-label {
            width: 100%;
          }
          .item.selected {
            background-color: ${theme.colors.greyLight};
          }

          .dropdown-label {
            display: block;
            margin-bottom: 8px;
            padding-left: 4px;
            overflow: hidden;
          }

          .wrap-dropdown-select .floating-label {
            position: absolute;
            width: 100%;
            top: 11px;
            left: 4px;
            pointer-events: none;
            transform: translateY(0px);
            color: ${theme.colors.textLight};
            transition: transform ${theme.transitions.base};
            overflow: hidden;
            white-space: nowrap;
          }

          .wrap-dropdown-select .floating-label.selected {
            transform: translateY(-38px);
            color: ${theme.colors.text};
            ${color ? "color:" + color : ""};
          }

          .is-focused .dropdown-title {
            ${focusColor
              ? "border: 1px solid" + focusColor
              : "border: 1px solid" + theme.colors.primary};
          }
          .is-focused .chevron-icon {
            ${focusColor
              ? "color:" + focusColor
              : "color:" + theme.colors.primary};
          }

          .is-focused .dropdown-select.filled .dropdown-title {
            ${focusColor
              ? "border: 1px solid" + focusColor
              : "border: 1px solid" + theme.colors.primary};
          }

          .wrap-sm {
            font-size: ${theme.fontSizes.sm};
          }

          .dropdown-select.sm .dropdown-title {
            font-size: ${theme.fontSizes.sm};
            height: 32px;
            padding: 7px 24px 7px 7px;
          }

          .dropdown-select.sm .dropdown-title .chevron-icon {
            right: 6px;
            top: 3px;
          }

          .dropdown-select.sm .dropdown-title.visible .chevron-icon {
            top: 1px;
            transform: rotateX(-180deg);
          }

          .wrap-lg {
            font-size: ${theme.fontSizes.lg};
          }

          .dropdown-select.lg .dropdown-title {
            font-size: ${theme.fontSizes.lg};
            height: 52px;
            padding: 11px 24px 7px 11px;
          }

          .dropdown-select.lg .dropdown-title .chevron-icon {
            right: 8px;
            top: 11px;
          }

          .dropdown-select.lg .dropdown-title.visible .chevron-icon {
            top: 7px;
            transform: rotateX(-180deg);
          }
        `}
      </style>
    </>
  );
};

export default DropdownSelectMultiple;

DropdownSelectMultiple.propTypes = propTypes;
DropdownSelectMultiple.defaultProps = defaultProps;
