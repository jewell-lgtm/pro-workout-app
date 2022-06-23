import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import tw from "tailwind-rn";

// noinspection JSUnusedGlobalSymbols
export default function App() {
  return (
    <View style={tw("flex-1 justify-center items-center")}>
      <Text style={tw("text-blue-600")}>
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
