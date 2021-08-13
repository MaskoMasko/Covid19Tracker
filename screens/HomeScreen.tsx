import * as React from "react";
import { View, Text } from "react-native";
import { Main } from "../components/Main";

export function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Main navigation={navigation}></Main>
    </View>
  );
}
