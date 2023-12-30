import { TypographyProps } from "@shopify/restyle";

type CreateTextVariants = {
  [key: string]: TypographyProps<Theme>;
};

type CreateTypography = <T extends CreateTextVariants>(themeObject: T) => T;

const createTypography: CreateTypography = (val) => val;

const textVariants = createTypography({
  header: {},
});

export default textVariants;
