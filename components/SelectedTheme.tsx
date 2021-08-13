import React from "react";
import { useRoute } from "@react-navigation/core";
import { CovidLastKnownStats } from "./CovidLastKnownStats";
import { store } from "../store/store";
import { Text } from "react-native";
import { Countries } from "./Countries";

export const SelectedTheme = () => {
  const navigationRoute = useRoute<any>();
  const routeName = navigationRoute.params.routeName as string;
  const route = store.routeList.find((route) => route.Name === routeName);

  if (!route) throw new Error("Route name not found");
  if (route.Path == "/dayone/country/:country") {
    return <CovidLastKnownStats></CovidLastKnownStats>;
  } else if (route.Path == "/countries") {
    return <Countries></Countries>;
  }
  return <Text>Yes</Text>;
};
