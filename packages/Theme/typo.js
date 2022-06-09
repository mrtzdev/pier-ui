import css from "styled-jsx/css";
import theme from "../styles/theme";

export default css.global`
  body {
    font-family: ${theme.fontFamily.sansSerif};
    font-size: ${theme.fontSizes.base}px;
  }
  /// Typo

  h1 {
    font-size: ${theme.fontSizes.h1}px;
    font-weight: 700;
  }
  h2 {
    font-size: ${theme.fontSizes.h2}px;
    font-weight: 700;
  }
  h3 {
    font-size: ${theme.fontSizes.h3}px;
    font-weight: 700;
  }
`;
