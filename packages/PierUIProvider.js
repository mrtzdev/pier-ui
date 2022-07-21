import defaultTheme from "./Theme/theme";
import globalStyles from "./Theme/global";
import PropTypes from "prop-types";

import React, { useContext } from "react";

export const ThemeContext = React.createContext(defaultTheme);

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};

const propTypes = {
  theme: PropTypes.object,
  children: PropTypes.any,
};

export default function PierUIProvider(props) {
  const customTheme = useTheme();
  const theme = customTheme ? customTheme : defaultTheme;

  return (
    <ThemeContext.Provider value={props.theme}>
      {props.children}
      <style jsx global>
        {globalStyles}
      </style>
      <style jsx global>{`
        body {
          ${props.theme
            ? "font-family:" + props.theme.fontFamily.sansSerif
            : "font-family:" + theme.fontFamily.sansSerif};
          ${props.theme
            ? "font-size:" + props.theme.fontSizes.base
            : "font-size:" + theme.fontSizes.base};
        }

        h1 {
          ${props.theme
            ? "font-size:" + props.theme.fontSizes.h1
            : "font-size:" + theme.fontSizes.h1};
        }

        h2 {
          ${props.theme
            ? "font-size:" + props.theme.fontSizes.h2
            : "font-size:" + theme.fontSizes.h2};
        }

        h3 {
          ${props.theme
            ? "font-size:" + props.theme.fontSizes.h3
            : "font-size:" + theme.fontSizes.h3};
        }

        h4 {
          ${props.theme
            ? "font-size:" + props.theme.fontSizes.h4
            : "font-size:" + theme.fontSizes.h4};
        }
      `}</style>
    </ThemeContext.Provider>
  );
}

PierUIProvider.displayName = "Button";
PierUIProvider.propTypes = propTypes;
