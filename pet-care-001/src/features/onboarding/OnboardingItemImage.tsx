import { CommonComponentProps, OnboardingItemType } from "@models/onboarding";
import { Image, StyleSheet } from "react-native";
import { ITEM_IMAGE_HEIGHT, ITEM_IMAGE_WIDTH, ITEM_WIDTH } from "./constants";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const OnboardingItemImage: React.FC<OnboardingItemImageProps> = ({
  item,
  scrollOffsetIndex,
  index,
}) => {
  const animatedStyles = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollOffsetIndex.value,
      [index - 0.5, index, index + 0.5],
      [0, 1, 0]
    );

    const scale = interpolate(
      scrollOffsetIndex.value,
      [index - 0.5, index, index + 0.5],
      [0.7, 1, 0.7]
    );

    return {
      opacity,
      transform: [
        {
          scale,
        },
      ],
    };
  }, [scrollOffsetIndex]);

  return (
    <Animated.View style={[styles.imageContainer, animatedStyles]}>
      <Image
        style={styles.image}
        source={item.image}
        resizeMethod="scale"
        resizeMode="contain"
      />
    </Animated.View>
  );
};

type OnboardingItemImageProps = CommonComponentProps & {
  item: OnboardingItemType;
  index: number;
};

const styles = StyleSheet.create({
  image: {
    width: ITEM_IMAGE_WIDTH,
    height: ITEM_IMAGE_HEIGHT,
  },

  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: ITEM_WIDTH,
  },
});

export default OnboardingItemImage;
