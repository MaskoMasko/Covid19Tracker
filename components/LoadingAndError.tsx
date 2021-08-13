import React from "react";
import { Text, View } from "react-native";

export const LoadingAndError = ({
  isLoading,
  isError,
}: {
  isLoading: boolean;
  isError: boolean;
}) => {
  return (
    <View>
      {isLoading ? (
        <Text style={{ fontSize: 20 }}>Loading...</Text>
      ) : isError ? (
        <Text style={{ fontSize: 20 }}>Yes Error</Text>
      ) : null}
    </View>
  );
};
