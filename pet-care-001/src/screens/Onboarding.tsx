import { StyleSheet, View } from "react-native";
import {
  ITEM_WIDTH,
  SCROLLVIEW_WIDTH,
  items,
} from "../features/onboarding/constants";
import OnboardingItem from "features/onboarding/OnboardingItem";
import OnboardingFooter from "features/onboarding/Footer";
import OnboardingItemBg from "features/onboarding/OnboardingBackground";
import OnboardingHeader from "features/onboarding/OnboardingHeader";
import Animated, {
  useAnimatedRef,
  useDerivedValue,
  useScrollViewOffset,
  useSharedValue,
} from "react-native-reanimated";
import { useMemo } from "react";
import spacing from "theme/spacing";

const OnboardingScreen = () => {
  const scrollViewRef = useAnimatedRef<Animated.ScrollView>();

  const scrollOffset = useScrollViewOffset(scrollViewRef);
  const contentWidth = useSharedValue(SCROLLVIEW_WIDTH);

  const scrollOffsetIndex = useDerivedValue(() => {
    return scrollOffset.value / ITEM_WIDTH;
  }, [scrollOffset]);

  const scrollProgress = useDerivedValue(
    () => scrollOffset.value / contentWidth.value,
    [scrollOffset, contentWidth]
  );

  const commonProps = useMemo(() => {
    return { scrollProgress, scrollOffset, scrollOffsetIndex, scrollViewRef };
  }, []);

  return (
    <OnboardingItemBg>
      <OnboardingHeader />

      <Animated.ScrollView
        horizontal
        style={styles.container}
        contentContainerStyle={styles.innerContainer}
        snapToInterval={ITEM_WIDTH}
        decelerationRate="fast"
        ref={scrollViewRef}
        // To make the animations smoother when user scrolls
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      >
        {items.map((item, index) => {
          return (
            <OnboardingItem
              {...commonProps}
              {...{
                item,
                index,
              }}
              key={index}
            />
          );
        })}
      </Animated.ScrollView>

      <OnboardingFooter {...commonProps} />

      {/* footer bottom spacing */}
      <View style={styles.bottomPadding} />
    </OnboardingItemBg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  innerContainer: {
    flexGrow: 1,
    backgroundColor: "transparent",
  },
  bottomPadding: {
    height: spacing.xl,
  },
});

export default OnboardingScreen;
