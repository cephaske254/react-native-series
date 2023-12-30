import { SharedValue } from "react-native-reanimated";

export type OnboardingItemType = {
  titles: string[];
  descriptions: string[];

  /** Image is a number since `require(...)` returns a number type */
  image: number;
};

export type CommonComponentProps = {
  /**
   * A value between 0 and 1, representing how far the user has scrolled
   */
  scrollProgress: SharedValue<number>;
  /**
   * How far the user has scrolled in pixels. This is calculated from `scrollProgress`
   */
  scrollOffset: SharedValue<number>;
  /**
   * The index of the item, calculated from the scroll progress.
   */
  scrollOffsetIndex: SharedValue<number>;
};
