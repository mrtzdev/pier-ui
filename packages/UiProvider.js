import theme from "./Theme/theme";
import globalStyles from "./Theme/global";

import React, { useContext } from "react";

export const ThemeContext = React.createContext(theme);

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};

export default function UiProvider(props) {
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
          font-family: ${theme.fontFamily.sansSerif};
          font-size: ${theme.fontSizes.base};
        }
      `}</style>
    </ThemeContext.Provider>
  );
}
