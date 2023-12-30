const colors = {
  "primary.main": "#93933",
} as const;


export type Colors = typeof colors;
export type ColorNames = keyof Colors;
export default colors;
