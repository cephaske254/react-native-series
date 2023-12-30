import { StyleSheet, TouchableOpacity, View } from "react-native";
import { getColorValue } from "utils/colors";
import { FOOTER_BUTTON_ICON_SIZE, FOOTER_BUTTON_SIZE } from "./constants";
import ArrowRightSvgIcon from "icons/ArrowRight";

const FooterNextButton = () => (
  <TouchableOpacity style={styles.buttonContainer}>
    <ArrowRightSvgIcon
      height={FOOTER_BUTTON_ICON_SIZE}
      width={FOOTER_BUTTON_ICON_SIZE}
      color={getColorValue("grey.900")}
    />
  </TouchableOpacity>
);

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
