import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import { RouteInstance, store } from "../store/store";
import { useQuery } from "react-query";
import { useRoute } from "@react-navigation/native";

export const SelectedTheme = () => {
  const navigationRoute = useRoute<any>();
  const routeName = navigationRoute.params.routeName as string;
  const route = store.routeList.find((route) => route.Name === routeName);

  if (!route) throw new Error("Route name not found");

  const [country, setCountry] = React.useState("");
  const { isLoading, isError, data, refetch } = useQuery(
    ["SelectedTheme"],
    async () => {
      const results = await fetch(
        "https://api.covid19api.com/dayone/country/" + country
      );
      return results;
    },
    {
      enabled: false,
    }
  );
  return (
    <View>
      <Text>{route.Name}</Text>
      {/* <TextInput
        placeholder="nisto"
        value={country}
        onChangeText={(e) => setCountry(e.toLowerCase())}
      ></TextInput>
      <Button title="search" onPress={() => refetch()}></Button> */}
    </View>
  );
};
