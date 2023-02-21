import React, { useContext } from "react";

export const RadioGroupContext = React.createContext();

export function useRadioGroupContext() {
  const context = useContext(RadioGroupContext);

  if (!context) {
    return undefined;
  }

  return context;
}
