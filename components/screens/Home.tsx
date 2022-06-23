import React from "react";
import { Button, SafeAreaView, Text } from "react-native";
import { RootStackParamList } from "../types";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export function Home(props: Props): JSX.Element {
  const { navigation } = props;

  return (
    <SafeAreaView>
      <Text>I am the home screen!</Text>
      <Button title="Go to Chat" onPress={() => navigation.navigate("Chat")} />
    </SafeAreaView>
  );
}
