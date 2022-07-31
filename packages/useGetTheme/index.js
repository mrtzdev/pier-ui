import defaultTheme from "../Theme/theme";
import { useTheme } from "../PierUIProvider";

export default function useGetTheme() {
  const customTheme = useTheme();
  const theme = customTheme ? customTheme : defaultTheme;

  return theme;
}
