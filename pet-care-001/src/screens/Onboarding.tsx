import { ScrollView, StyleSheet } from "react-native";
import { ITEM_WIDTH, items } from "../features/onboarding/constants";
import OnboardingItem from "features/onboarding/OnboardingItem";
import OnboardingFooter from "features/onboarding/Footer";
import OnboardingItemBg from "features/onboarding/OnboardingBackground";
import OnboardingHeader from "features/onboarding/OnboardingHeader";

const OnboardingScreen = () => {
  return (
    <OnboardingItemBg>
      <OnboardingHeader />

      <ScrollView
        horizontal
        style={styles.container}
        contentContainerStyle={styles.innerContainer}
        snapToInterval={ITEM_WIDTH}
        decelerationRate="fast"
      >
        {items.map((item, index) => {
          return <OnboardingItem {...{ item }} key={index}></OnboardingItem>;
        })}
      </ScrollView>

      <OnboardingFooter />
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
