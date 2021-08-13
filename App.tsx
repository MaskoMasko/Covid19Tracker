import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/HomeScreen";
import { QueryClient, QueryClientProvider } from "react-query";
import { MoreAboutScreen } from "./screens/MoreAboutScreen";

const Stack = createNativeStackNavigator();

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="MoreAbout" component={MoreAboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
