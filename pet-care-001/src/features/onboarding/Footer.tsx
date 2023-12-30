import { StyleSheet, View } from "react-native";
import spacing from "theme/spacing";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Extrapolate, interpolate } from "react-native-reanimated";
import { useMemo } from "react";
import OnboardingFooterItemsIndicator from "./FooterItemsIndicator";
import FooterNextButton from "./FooterNextButton";

const OnboardingFooter = () => {
  const { bottom } = useSafeAreaInsets();

  const bottomCompensation = useMemo(() => {
    // Add a reasonable amount of padding if bottom inset value is less than 78
    return interpolate(bottom, [0, 78], [78, 0], Extrapolate.CLAMP);
  }, [bottom]);

  const paddingBottom = useMemo(
    () => bottomCompensation + bottom,
    [bottomCompensation]
  );

  return (
    <View style={[styles.container, { paddingBottom }]}>
      <OnboardingFooterItemsIndicator />
      <FooterNextButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.xl,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default OnboardingFooter;
