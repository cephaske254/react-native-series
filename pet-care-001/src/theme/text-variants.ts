import { BaseTheme, TextProps } from "@shopify/restyle";
import { FontNames } from "./fonts";
import { getFont } from "utils/fonts";

type VariantProps = Omit<TextProps<BaseTheme>, "fontFamily"> & {
  fontFamily?: FontNames;
};

type CreateTypography = (themeObject: VariantProps) => {};

const createTypography: CreateTypography = (val) => val;

const textVariants = {
  title2: createTypography({
    fontFamily: getFont("SFProDisplayBold"),
    fontSize: 31,
    lineHeight: 31 * 1.25,
  }),

  caption1: {
    fontFamily: getFont("SFProDisplayRegular"),
    fontSize: 19,
    lineHeight: 19 * 1.25,
    color: "grey.800",
  },
  caption2: {
    fontFamily: getFont("SFProDisplayRegular"),
    fontSize: 16,
    lineHeight: 16 * 1.25,
    color: "grey.800",
  },

  defaults: createTypography({
    fontFamily: getFont("SFProDisplayRegular"),
  }),
};

export default textVariants;
