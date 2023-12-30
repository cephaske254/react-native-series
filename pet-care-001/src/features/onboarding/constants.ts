import { OnboardingItemType } from "@models/onboarding";
import {
  asset_dimensions,
  onboarding_image_1,
  onboarding_image_2,
  onboarding_image_3,
} from "assets";
import { Dimensions } from "react-native";
import { getColorValue } from "utils/colors";

const { width } = Dimensions.get("window");

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

export const ITEM_WIDTH = width;

const IMAGE_DIMENSIONS = asset_dimensions["onboarding_image_*"];

export const ITEM_IMAGE_WIDTH = IMAGE_DIMENSIONS.width * 0.70; // 70% of the width
export const ITEM_IMAGE_HEIGHT = IMAGE_DIMENSIONS.height * 0.70; // 70% of the width

export const FOOTER_BUTTON_SIZE = 65;
export const FOOTER_BUTTON_ICON_SIZE = 25;

export const INDICATOR_SIZE = 6;
export const INDICATOR_HORIZONTAL_SPACING = 4;
export const INDICATOR_ACTIVE_WIDTH = INDICATOR_SIZE * 4.25;
export const INDICATOR_ACTIVE_COLOR = getColorValue("grey.300");
export const INDICATOR_COLOR = getColorValue("grey.600");
