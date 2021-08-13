import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useQuery } from "react-query";
import { store } from "../store/store";
import { LoadingAndError } from "./LoadingAndError";

export const Countries = () => {
  const { isLoading, isError, data } = useQuery(["Countries"], () => {
    return store.readCountries();
  });
  if (!data) {
    return (
      <LoadingAndError
        isLoading={isLoading}
        isError={isError}
      ></LoadingAndError>
    );
  }
  return (
    <View>
      <Text style={{ fontSize: 20 }}>Countries:</Text>
      <ScrollView>
        {data.map((countryInfo: any, id: number) => {
          return <Text key={id}>{countryInfo.Country}</Text>;
        })}
      </ScrollView>
    </View>
  );
};
