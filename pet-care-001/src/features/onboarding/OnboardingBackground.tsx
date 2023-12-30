import { StyleSheet, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { onboarding_image_bg } from "assets";

const OnboardingBackground: React.FC<OnboardingBackgroundProps> = ({
  children,
}) => {
  return (
    <ImageBackground
      source={onboarding_image_bg}
      style={styles.container}
      resizeMethod="resize"
      resizeMode="contain"
    >
      {/* Set the status bar to light since the image is dark */}

      <StatusBar style="light" translucent />
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

type OnboardingBackgroundProps = {
  children: React.ReactNode;
};

export default OnboardingBackground;
