import theme from "../styles/theme";

import React, { useContext, useState } from "react";

export const ThemeContext = React.createContext(theme);

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};

export function ThemeProvider(props) {
  return (
    <ThemeContext.Provider value={props.theme}>
      {props.children}
    </ThemeContext.Provider>
  );
}
