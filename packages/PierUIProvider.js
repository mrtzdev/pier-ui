import defaultTheme from "./Theme/theme";
import globalStyles from "./Theme/global";

import React, { useContext } from "react";

export const ThemeContext = React.createContext(defaultTheme);

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
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
      `}</style>
    </ThemeContext.Provider>
  );
}
