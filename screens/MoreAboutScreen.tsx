import * as React from "react";
import { View, Text } from "react-native";
import { SelectedTheme } from "../components/SelectedTheme";
import { store } from "../store/store";

export function MoreAboutScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <SelectedTheme></SelectedTheme>
    </View>
  );
}
