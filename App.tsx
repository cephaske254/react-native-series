import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { fontFiles } from "theme/fonts";
import * as SplashScreen from "expo-splash-screen";
import Typography from "components/Typography";
import { ThemeProvider } from "@shopify/restyle";
import theme from "theme";

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

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Typography>Open up App.tsx to start working on your app!</Typography>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
