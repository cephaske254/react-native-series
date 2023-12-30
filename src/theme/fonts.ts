const fontFiles = {
  SFProDisplayRegular: require("../assets/fonts/SFPRODISPLAYREGULAR.otf"),
  SFProDisplayMedium: require("../assets/fonts/SFPRODISPLAYMEDIUM.otf"),
  SFProDisplayBold: require("../assets/fonts/SFPRODISPLAYBOLD.otf"),
} as const;

const fonts = Object.values(fontFiles) as FontNames[];

export { fonts, fontFiles };

export type Fonts = typeof fontFiles;
export type FontNames = keyof Fonts;
