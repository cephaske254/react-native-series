import { StyleSheet, TouchableOpacity, View } from "react-native";
import { getColorValue } from "utils/colors";
import {
  FOOTER_BUTTON_ICON_SIZE,
  FOOTER_BUTTON_SIZE,
  ITEMS_COUNT,
  ITEM_WIDTH,
} from "./constants";
import ArrowRightSvgIcon from "icons/ArrowRight";
import { useCallback } from "react";
import { CommonComponentProps } from "@models/onboarding";

const FooterNextButton: React.FC<CommonComponentProps> = ({
  scrollViewRef,
  scrollOffsetIndex,
}) => {
  const onPress = useCallback(() => {
    const current = Math.floor(scrollOffsetIndex.value);

    const next = current >= ITEMS_COUNT - 1 ? ITEMS_COUNT - 1 : current + 1;
    scrollViewRef.current?.scrollTo({
      x: next * ITEM_WIDTH,
    });
  }, []);

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <ArrowRightSvgIcon
        height={FOOTER_BUTTON_ICON_SIZE}
        width={FOOTER_BUTTON_ICON_SIZE}
        color={getColorValue("grey.900")}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: FOOTER_BUTTON_SIZE,
    width: FOOTER_BUTTON_SIZE,
    borderRadius: FOOTER_BUTTON_SIZE / 2,
    backgroundColor: getColorValue("grey.100"),
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FooterNextButton;
