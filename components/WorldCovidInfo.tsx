import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useQuery } from "react-query";
import { store } from "../store/store";
import { LoadingAndError } from "./LoadingAndError";

export const WorldCovidInfo = () => {
  const { isLoading, isError, data } = useQuery(["WorldCovidInfo"], () => {
    return store.readWorldCovidInfo();
  });
  if (!data) {
    return (
      <LoadingAndError
        isError={isError}
        isLoading={isLoading}
      ></LoadingAndError>
    );
  }
  return (
    <ScrollView>
      <View>
        <Text>GLOBAL</Text>

        <Text>New Confirmed: {data.Global.NewConfirmed}</Text>
        <Text>New Deaths: {data.Global.NewDeaths}</Text>
        <Text>New Recovered: {data.Global.NewRecovered}</Text>
        <Text>(ne dela as per usual)</Text>
        <Text>Total Confirmed: {data.Global.TotalConfirmed}</Text>
        <Text>Total Deaths: {data.Global.TotalDeaths}</Text>
        <Text>Total Recovered: {data.Global.TotalRecovered}</Text>
        <Text>(ne dela as per usual)</Text>
        <Text></Text>
        <Text>TOTAL PER COUNTRY</Text>
        <View>
          {data.Countries.map((country: any, id: number) => {
            return (
              <View key={id}>
                <Text>Country: {country.Country}</Text>
                <Text>Total Confirmed: {country.TotalConfirmed}</Text>
                <Text>Total Deaths: {country.TotalDeaths}</Text>
              </View>
            );
          })}
          <Text>(ovo drugo ne daje juste info paaa.....)</Text>
        </View>
      </View>
    </ScrollView>
  );
};
