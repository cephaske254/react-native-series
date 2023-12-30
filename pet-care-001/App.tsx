import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { fontFiles } from "theme/fonts";
import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider } from "@shopify/restyle";
import theme from "theme";
import OnboardingScreen from "screens/Onboarding";
import { getColorValue } from "utils/colors";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.hideAsync();

export default function App() {
  const [fontsLoaded, fontsError] = useFonts(fontFiles);

  const onLayout = useCallback(() => {
    if (fontsError || fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  useEffect(() => {
    onLayout();
  }, [onLayout]);

  if (!fontsError && !fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <ThemeProvider theme={theme}>
          <StatusBar style="auto" />
          <OnboardingScreen />
        </ThemeProvider>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColorValue("background.main"),
    alignItems: "center",
    justifyContent: "center",
  },
});
