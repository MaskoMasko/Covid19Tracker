import React from "react";
import { View, Text, ScrollView, Button, TextInput } from "react-native";
import { store } from "../store/store";
import { useQuery } from "react-query";

export const CovidLastKnownStats = () => {
  const [country, setCountry] = React.useState("");
  const { isLoading, isError, data, refetch } = useQuery(
    ["SelectedTheme"],
    () => {
      const url = "https://api.covid19api.com/dayone/country/" + country;
      return store.readCovidStatsPerCountry(url);
    },
    {
      enabled: false,
    }
  );
  return (
    <View>
      <Text>Enter country name and get results!</Text>
      <TextInput
        placeholder="nisto"
        value={country}
        onChangeText={(e) => setCountry(e.toLowerCase())}
      ></TextInput>
      <Button title="search" onPress={() => refetch()}></Button>
      {data ? (
        <ScrollView>
          <Text>Country: {data[data.length - 1].Country}</Text>
          <Text>Last Known Informations:</Text>
          <Text>Date: {data[data.length - 1].Date.split("T")[0]}</Text>
          <Text>All Active: {data[data.length - 1].Active}</Text>
          <Text>All Confirmed: {data[data.length - 1].Confirmed}</Text>
          <Text>All Deaths: {data[data.length - 1].Deaths}</Text>
          <Text>All Recovered: {data[data.length - 1].Recovered}</Text>
          <Text>(recovered gives wrong info)</Text>
        </ScrollView>
      ) : null}
    </View>
  );
};
