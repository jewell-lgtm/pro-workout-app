import { Entypo } from "@native-base/icons"
import {
  Box,
  Button,
  FormControl,
  HStack,
  Icon,
  Input,
  KeyboardAvoidingView,
  Link,
  Text,
  VStack,
} from "native-base"
import React, { useCallback, useState } from "react"
import { useHideHeader } from "../../hooks"
import { DisplayError } from "../error"
import { PageHeader, PageSubheader } from "../type"

type Props = {
  onLogIn: (email: string, password: string) => void
  loginWithGoogle: { ready: boolean; onPress: () => void }
  onPressSignUp: () => void
  error: null | Error
}

export function LogInScreenView(props: Props) {
  const { error, onLogIn, onPressSignUp, loginWithGoogle } = props
  const [email, _setEmail] = useState("")
  const [password, setPassword] = useState("")
  const setEmail = (email: string) => _setEmail(email.toLocaleLowerCase())
  const handlePressLogIn = useCallback(() => {
    onLogIn(email, password)
  }, [email, password, onLogIn])
  useHideHeader()

  return (
    <KeyboardAvoidingView>
      <Box safeArea px="2" py="8" w="90%" maxW={290} alignSelf="center">
        <PageHeader>Welcome</PageHeader>
        <PageSubheader>Sign in to continue</PageSubheader>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email Address:</FormControl.Label>
            <Input autoFocus value={email} onChangeText={setEmail} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password:</FormControl.Label>
            <Input
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </FormControl>
          {error && <DisplayError error={error} />}
          <Button colorScheme="primary" onPress={handlePressLogIn}>
            Sign In
          </Button>
          <Button
            colorScheme="secondary"
            disabled={!loginWithGoogle.ready}
            onPress={loginWithGoogle.onPress}
          >
            <HStack space={2} alignItems="center">
              <Icon as={Entypo} name="google-" color="warmGray.50" />
              <Text color="warmGray.50">Sign in with Google</Text>
            </HStack>
          </Button>

          <Link alignSelf="center" onPress={onPressSignUp}>
            Sign up as a new user
          </Link>
        </VStack>
      </Box>
    </KeyboardAvoidingView>
  )
}
