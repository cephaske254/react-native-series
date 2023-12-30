export type OnboardingItemType = {
  titles: string[];
  descriptions: string[];

  /** Image is a number since `require(...)` returns a number type */
  image: number;
};
