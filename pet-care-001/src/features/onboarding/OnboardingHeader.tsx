import Typography from "components/Typography";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { getFont } from "utils/fonts";

const OnboardingHeader = () => {
  const { top } = useSafeAreaInsets();

  return (
    <TouchableOpacity style={[styles.container, { paddingTop: top }]}>
      <Typography
        color="grey.300"
        pr="xl"
        py="m"
        mt="m"
        fontSize={16}
        fontFamily={getFont("SFProDisplaySemibold")}
      >
        Skip
      </Typography>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
export default OnboardingHeader;
