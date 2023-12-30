// onboarding image assets

export const onboarding_image_bg = require("./onboarding/bg.png");
export const onboarding_image_1 = require("./onboarding/image-1.png");
export const onboarding_image_2 = require("./onboarding/image-2.png");
export const onboarding_image_3 = require("./onboarding/image-3.png");

// Add here if you want the images to be loaded when the app loads

export const asset_dimensions = {
  "onboarding_image_*": {
    width: 431,
    height: 520,
  },
} as const;

export default {
  onboarding_image_bg,
  onboarding_image_1,
  onboarding_image_2,
  onboarding_image_3,
};
