import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { observer } from "mobx-react-lite";
import { useQuery } from "react-query";
import { store } from "../store/store";
import { LoadingAndError } from "./LoadingAndError";

export const Main = observer(({ navigation }: any) => {
  const { isLoading, isError, data } = useQuery("covidInfo", () => {
    return store.readCovidInfo();
  });
  const routeList = store.routeList;
  if (!data) {
    return (
      <LoadingAndError
        isLoading={isLoading}
        isError={isError}
      ></LoadingAndError>
    );
  }
  return (
    <ScrollView>
      <View>
        {routeList.map((route) => {
          if (
            route.Path == "/countries" ||
            route.Path == "/summary" ||
            route.Path == "/dayone/country/:country"
          ) {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("MoreAbout", { routeName: route.Name });
                }}
                activeOpacity={0.5}
                key={route.Path}
                style={styles.mainList}
              >
                <Text style={styles.mainListText}>{route.Name}</Text>
                <Text>{route.Path}</Text>
                <Text>{route.Description}</Text>
              </TouchableOpacity>
            );
          }
          return;
        })}
      </View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  mainList: {
    padding: 10,
    backgroundColor: "lightgrey",
    margin: 20,
    marginVertical: 10,
    borderRadius: 20,
  },
  mainListText: { fontSize: 16, fontWeight: "bold" },
});
