import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Home from "./screens/home";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { AppNavigator } from "./route/homeStack";
const getFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });
};

export default function App() {
  const [fontloaded, setFontsLoaded] = useState(false);

  if (fontloaded) {
    return <AppNavigator />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onError={console.warn}
        onFinish={() => {
          setFontsLoaded(true);
        }}
      />
    );
  }
}
