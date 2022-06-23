import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./components/StackNavigator";

function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

// noinspection JSUnusedGlobalSymbols
export default App;
