import { StyleSheet, View } from "react-native";
import {
  items,
  INDICATOR_SIZE,
  INDICATOR_ACTIVE_WIDTH,
  INDICATOR_HORIZONTAL_SPACING,
  INDICATOR_COLOR,
  INDICATOR_ACTIVE_COLOR,
} from "./constants";

const OnboardingFooterItemsIndicator = () => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <Indicator index={index} key={index} />
      ))}
    </View>
  );
};

const Indicator = ({ index }) => {
  return (
    <View
      style={[
        styles.indicator,
        index === 0 && {
          width: INDICATOR_ACTIVE_WIDTH,
          backgroundColor: INDICATOR_ACTIVE_COLOR,
        },
      ]}
    />
  );
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

export default OnboardingFooterItemsIndicator;
