import { StyleSheet, View } from "react-native";
import {
  items,
  INDICATOR_SIZE,
  INDICATOR_ACTIVE_WIDTH,
  INDICATOR_HORIZONTAL_SPACING,
  INDICATOR_COLOR,
  INDICATOR_ACTIVE_COLOR,
} from "./constants";
import { CommonComponentProps } from "@models/onboarding";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";

const OnboardingFooterItemsIndicator: React.FC<CommonComponentProps> = (
  props
) => {
  return (
    <View style={styles.container}>
      {items.map((_, index) => (
        <Indicator index={index} {...props} key={index} />
      ))}
    </View>
  );
};

const Indicator: React.FC<IndicatorProps> = ({ index, scrollOffsetIndex }) => {
  const animatedStyles = useAnimatedStyle(() => {
    const width = interpolate(
      scrollOffsetIndex.value,
      [index - 1, index, index + 1],
      [INDICATOR_SIZE, INDICATOR_ACTIVE_WIDTH, INDICATOR_SIZE],
      Extrapolate.CLAMP
    );

    // Fade in between active and inactive colour based on the scroll index
    const backgroundColor = interpolateColor(
      scrollOffsetIndex.value,
      [index - 0.5, index, index + 0.5],
      [INDICATOR_COLOR, INDICATOR_ACTIVE_COLOR, INDICATOR_COLOR]
    );

    return {
      width,
      backgroundColor,
    };
  }, [scrollOffsetIndex]);

  return <Animated.View style={[styles.indicator, animatedStyles]} />;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  indicator: {
    width: INDICATOR_SIZE,
    height: INDICATOR_SIZE,
    borderRadius: INDICATOR_SIZE / 2,
    backgroundColor: INDICATOR_COLOR,
    marginHorizontal: INDICATOR_HORIZONTAL_SPACING,
  },
});

type IndicatorProps = CommonComponentProps & { index: number };

export default OnboardingFooterItemsIndicator;
