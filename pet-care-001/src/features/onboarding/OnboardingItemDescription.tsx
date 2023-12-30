import { CommonComponentProps, OnboardingItemType } from "@models/onboarding";
import Typography from "components/Typography";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { getFont } from "utils/fonts";
import { ITEMS_COUNT, ITEM_WIDTH } from "./constants";

const OnboardingItemDescription: React.FC<OnboardingItemDescriptionProps> = ({
  item: { descriptions },
  scrollOffsetIndex,
  index,
}) => {
  const animatedStyles = useAnimatedStyle(() => {
    //NOTE: enable the lines below to animate description

    // const translateX = interpolate(
    //   scrollOffsetIndex.value,
    //   [0, index, ITEMS_COUNT],
    //   [ITEM_WIDTH * index - 1, 0, (index + 1) * -ITEM_WIDTH],
    //   Extrapolate.CLAMP
    // );
    return {
      // transform: [
      //   {
      //     translateX,
      //   },
      // ],
    };
  }, [scrollOffsetIndex]);

  return (
    <Animated.View style={animatedStyles}>
      {descriptions.map((description, index) => (
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
    </Animated.View>
  );
};

type OnboardingItemDescriptionProps = CommonComponentProps & {
  item: OnboardingItemType;
  index: number;
};
export default OnboardingItemDescription;
