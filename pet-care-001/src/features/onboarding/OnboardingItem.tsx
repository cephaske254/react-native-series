import { OnboardingItemType } from "@models/onboarding";
import { Image, StyleSheet, View } from "react-native";
import { ITEM_IMAGE_HEIGHT, ITEM_IMAGE_WIDTH, ITEM_WIDTH } from "./constants";
import spacing from "theme/spacing";
import Typography from "components/Typography";
import { getFont } from "utils/fonts";

const OnboardingItem: React.FC<OnboardingItemProps> = ({ item }) => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={item.image}
        resizeMethod="scale"
        resizeMode="contain"
      />
    </View>

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

      {item.descriptions.map((description, index) => (
        <Typography
          color="grey.600"
          variant="caption1"
          fontFamily={getFont("SFProDisplayRegular")}
          textAlign="center"
          key={index}
        >
          {description}
        </Typography>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    flex: 1,
    justifyContent: "space-around",
    paddingTop: spacing.l,
  },

  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: ITEM_WIDTH,
  },
  textContainer: {
    paddingHorizontal: spacing.xl,
    marginVertical: spacing.m,
  },
  spacer: {
    height: spacing.l,
  },
  image: {
    width: ITEM_IMAGE_WIDTH,
    height: ITEM_IMAGE_HEIGHT,
  },
});

type OnboardingItemProps = {
  item: OnboardingItemType;
};
export default OnboardingItem;
