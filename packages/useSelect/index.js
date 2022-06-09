import { useState, useCallback } from "react";
import PropTypes from "prop-types";

const useSelect = (props) => {
  const [selected, setSelected] = useState({});
  const [options, setOptions] = useState([]);

  const { list } = props;

  const getOptions = useCallback(
    (itemSelected) => {
      if (itemSelected) {
        const s = { ...itemSelected, isSelected: true };
        //console.log(s);

        const addAttrSelected = list.map((v) => ({ ...v, isSelected: false }));

        const result = addAttrSelected.filter((i) => i.value != s.value);

        const options = [...result, s];
        console.log(options);

        return options;
      } else {
        const options = list.map((v) => ({ ...v, isSelected: false }));
        return options;
      }
    },
    [list]
  );

  const selectOption = useCallback(
    (key, value) => {
      const findItem = () => {
        let item = list.find((x) => x.value === key.value);
        return item;
      };
      // console.log(findItem());
      getOptions(findItem());
    },
    [list, getOptions]
  );

  return { getOptions, selectOption };
};

export default useSelect;
