import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AuthProvider } from "./hooks/useAuth";
import { StackNavigator } from "./navigation/StackNavigator";

export function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
