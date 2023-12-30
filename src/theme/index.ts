import { createTheme } from "@shopify/restyle";
import colors from "./colors";
import spacing from "./spacing";
import textVariants from "./text-variants";

const theme = createTheme({
  colors,
  spacing,
  textVariants,
});




export type Theme = typeof theme;

export default theme;
