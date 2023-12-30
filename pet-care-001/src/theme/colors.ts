import colorAlpha from "color-alpha";

const colors = {
  "primary.main": "#93933",

  shadow: "#ECEDFF",
  shadow_A73: colorAlpha("#ECEDFF", 73),

  "background.main": "#14181D",

  "grey.50": "#fafafa",
  "grey.100": "#f5f5f5",
  "grey.200": "#eeeeee",
  "grey.300": "#e0e0e0",
  "grey.400": "#bdbdbd",
  "grey.500": "#9e9e9e",
  "grey.600": "#757575",
  "grey.700": "#616161",
  "grey.800": "#424242",
  "grey.900": "#212121",
  "grey.A100": "#f5f5f5",
  "grey.A200": "#eeeeee",
  "grey.A400": "#bdbdbd",
  "grey.A700": "#616161",
} as const;

export type Colors = typeof colors;
export type ColorNames = keyof Colors;
export default colors;
