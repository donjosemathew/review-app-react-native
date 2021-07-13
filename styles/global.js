import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
export const globalStyles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    // marginTop: StatusBar.currentHeight,
    backgroundColor: "red",
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
});
