import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback } from "react";
import { Button, SafeAreaView, Text } from "react-native";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export function Login(props: Props): JSX.Element {
  const { navigation } = props;
  const goToSignUp = useCallback(() => {
    navigation.navigate("Sign Up");
  }, [navigation]);

  return (
    <SafeAreaView>
      <Text>Time to log in, mate</Text>
      <Button title={"Sign Up"} onPress={goToSignUp} />
    </SafeAreaView>
  );
}
