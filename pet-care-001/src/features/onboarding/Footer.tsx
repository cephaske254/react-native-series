import { StyleSheet, View } from "react-native";
import spacing from "theme/spacing";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import OnboardingFooterItemsIndicator from "./FooterItemsIndicator";
import FooterNextButton from "./FooterNextButton";
import { CommonComponentProps } from "@models/onboarding";

const OnboardingFooter: React.FC<CommonComponentProps> = (props) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: bottom }]}>
      <OnboardingFooterItemsIndicator {...props} />
      <FooterNextButton {...props} />
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
