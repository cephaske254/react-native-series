import { OnboardingItemType } from "@models/onboarding";
import {
  asset_dimensions,
  onboarding_image_1,
  onboarding_image_2,
  onboarding_image_3,
} from "assets";
import { Dimensions } from "react-native";
import { Extrapolate, interpolate } from "react-native-reanimated";
import spacing from "theme/spacing";
import { getColorValue } from "utils/colors";

const { width, height } = Dimensions.get("window");

export const items: OnboardingItemType[] = [
  {
    titles: ["Find petcare around", "your location"],
    descriptions: [
      "Just turn on your location and you will find",
      "the nearest pet care you wish.",
    ],
    image: onboarding_image_1,
  },
  {
    titles: ["Let us give the best", "treatment"],
    descriptions: ["Get the best treatment for your", "animal with us"],
    image: onboarding_image_2,
  },
  {
    titles: ["Book appointment", "with us!"],
    descriptions: ["What do you think? book our", "veterinarians now"],
    image: onboarding_image_3,
  },
];

export const ITEMS_COUNT = items.length;

const IMAGE_DIMENSIONS = asset_dimensions["onboarding_image_*"];
const ORIGINAL_ASPECT_RATIO = IMAGE_DIMENSIONS.height / IMAGE_DIMENSIONS.width; // aspect ratio = height/width

export const ITEM_WIDTH = width;
export const SCROLLVIEW_WIDTH = items.length * ITEM_WIDTH;

export const ITEM_IMAGE_WIDTH = ITEM_WIDTH * 0.7; // 70% of the original width
export const ITEM_IMAGE_HEIGHT = ITEM_IMAGE_WIDTH * ORIGINAL_ASPECT_RATIO; // calculate the width height based on the new width

export const FOOTER_BUTTON_SIZE = 65;
export const FOOTER_BUTTON_ICON_SIZE = 25;

export const INDICATOR_SIZE = 6;
export const INDICATOR_HORIZONTAL_SPACING = 4;
export const INDICATOR_ACTIVE_WIDTH = INDICATOR_SIZE * 4.25;
export const INDICATOR_ACTIVE_COLOR = getColorValue("grey.300");
export const INDICATOR_COLOR = getColorValue("grey.600");

/** On smaller screens, limit to 25 px */
export const BOTTOM_CONTENT_PADDING = interpolate(
  height,
  [300, 900],
  [25, 40],
  Extrapolate.CLAMP
);

console.log({ height, BOTTOM_CONTENT_PADDING }, spacing.xl);
