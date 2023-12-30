import { CommonComponentProps, OnboardingItemType } from "@models/onboarding";
import { StyleSheet, View } from "react-native";
import { ITEM_WIDTH } from "./constants";
import spacing from "theme/spacing";
import Typography from "components/Typography";
import { getFont } from "utils/fonts";
import OnboardingItemImage from "./OnboardingItemImage";
import OnboardingItemDescription from "./OnboardingItemDescription";

const OnboardingItem: React.FC<OnboardingItemProps> = (props) => {
  const { item } = props;

  return (
    <View style={styles.container}>
      <OnboardingItemImage {...props} />

      <View style={styles.textContainer}>
        {item.titles.map((title, index) => (
          <Typography
            variant="title2"
            color="grey.200"
            textAlign="center"
            key={index}
          >
            {title}
          </Typography>
        ))}

        <View style={styles.spacer} />

        <OnboardingItemDescription {...props} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    flex: 1,
    justifyContent: "space-around",
    paddingTop: spacing.l,
  },

  textContainer: {
    paddingHorizontal: spacing.xl,
    marginVertical: spacing.m,
  },
  spacer: {
    height: spacing.l,
  },
});

type OnboardingItemProps = {
  item: OnboardingItemType;
  index: number;
} & CommonComponentProps;
export default OnboardingItem;
