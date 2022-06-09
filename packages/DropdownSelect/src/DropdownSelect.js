import PropTypes from "prop-types";

import DropdownSelectSingle from "./DropdownSelectSingle";
import DropdownSelectMultiple from "./DropdownSelectMultiple";

const propTypes = {
  //value: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  className: PropTypes.string,
  width: PropTypes.string,
  onChange: PropTypes.func,
  closeOnChange: PropTypes.bool,
  label: PropTypes.string,
  floatingLabel: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  color: PropTypes.string,
  focusColor: PropTypes.string,
  size: PropTypes.oneOf(["base", "sm", "md", "lg"]),
  multiple: PropTypes.bool,
};

const defaultProps = {
  variant: "outline",
  size: "base",
  width: "auto",
  disabled: false,
  required: false,
  multiple: false,
};

const DropdownSelect = (props) => {
  const { multiple } = props;

  if (multiple && multiple !== undefined)
    return (
      <>
        <DropdownSelectMultiple {...props} />
      </>
    );
  else
    return (
      <>
        <DropdownSelectSingle {...props} />
      </>
    );
};

export default DropdownSelect;

DropdownSelect.propTypes = propTypes;
DropdownSelect.defaultProps = defaultProps;
