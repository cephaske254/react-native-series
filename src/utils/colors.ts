import colors, { ColorNames } from "theme/colors";

const getColorName = (colorName: ColorNames): ColorNames =>
  colors[colorName] ? colorName : "primary.main";

const getColorValue = (colorName: ColorNames) => colors[colorName] ?? "#93933";
