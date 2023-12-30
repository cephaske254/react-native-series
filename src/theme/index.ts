import { createTheme } from "@shopify/restyle";
import colors from "./colors";
import spacing from "./spacing";
import typography from "./typography";

const theme = createTheme({
  colors,
  spacing,
  typography,
});




export type Theme = typeof theme;

export default theme;
