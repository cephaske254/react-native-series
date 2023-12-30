import { FontNames, fontFiles } from "theme/fonts";

/**
 * We use this function to get a font anywhere we need to use it
 */
const getFont = (fontName: FontNames): FontNames => {
  const font = fontFiles[fontName];
  if (font) return fontName;

  if (__DEV__) throw new Error(`Font ${fontName} is not registered`);

  return "SFProDisplayRegular";
};

export { getFont };
