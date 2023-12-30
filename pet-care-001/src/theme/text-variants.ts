import { BaseTheme, TextProps } from "@shopify/restyle";
import { FontNames } from "./fonts";
import { getFont } from "utils/fonts";

type VariantProps = Omit<TextProps<BaseTheme>, "fontFamily"> & {
  fontFamily?: FontNames;
};

type CreateTypography = (themeObject: VariantProps) => {};

const createTypography: CreateTypography = (val) => val;

const textVariants = {
  header: {},
  defaults: createTypography({
    fontFamily: getFont("SFProDisplayRegular"),
  }),
};

export default textVariants;
