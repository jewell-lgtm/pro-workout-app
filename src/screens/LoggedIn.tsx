import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, Text } from "react-native";
import { useUser } from "../hooks/useAuth";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Logged In">;

export function LoggedIn(_props: Props): JSX.Element {
  const user = useUser();

  return (
    <SafeAreaView>
      <Text>You are logged in as {user.id}</Text>
    </SafeAreaView>
  );
}
