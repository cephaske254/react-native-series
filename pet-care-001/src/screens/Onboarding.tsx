import { LayoutChangeEvent, StyleSheet, useAnimatedValue } from "react-native";
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
  useAnimatedScrollHandler,
  useDerivedValue,
  useScrollViewOffset,
  useSharedValue,
} from "react-native-reanimated";

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

  const onScroll = useAnimatedScrollHandler({
    onScroll(e) {
      // contentWidth.value = e.contentSize.width;
    },
  });

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
        onScroll={onScroll}
        // To make the animations smoother when user scrolls - 16FPS
        scrollEventThrottle={16}
      >
        {items.map((item, index) => {
          return <OnboardingItem {...{ item }} key={index} />;
        })}
      </Animated.ScrollView>

      <OnboardingFooter
        {...{ scrollProgress, scrollOffset, scrollOffsetIndex }}
      />
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
});

export default OnboardingScreen;
