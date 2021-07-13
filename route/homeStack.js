import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Reviewdetails from "../screens/review";
const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator>
    <Screen name="Home Page" component={Home} />
    <Screen name="Details" component={Reviewdetails} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
