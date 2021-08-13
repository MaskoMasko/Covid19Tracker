import React from "react";
import { useRoute } from "@react-navigation/core";
import { CovidLastKnownStats } from "./CovidLastKnownStats";
import { store } from "../store/store";
import { Text } from "react-native";

export const SelectedTheme = () => {
  const navigationRoute = useRoute<any>();
  const routeName = navigationRoute.params.routeName as string;
  const route = store.routeList.find((route) => route.Name === routeName);
  if (!route) throw new Error("Route name not found");
  if (
    route.Name ==
    "Get List Of Cases Per Country Per Province By Case Type From The First Recorded Case"
  ) {
    return <CovidLastKnownStats></CovidLastKnownStats>;
  }
  return <Text>Yes</Text>;
};
