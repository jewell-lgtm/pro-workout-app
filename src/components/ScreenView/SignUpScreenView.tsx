import {
  Box,
  Button,
  FormControl,
  Input,
  KeyboardAvoidingView,
  Link,
  VStack,
} from "native-base"
import React, { useCallback, useState } from "react"
import { DisplayError, PageHeader, PageSubheader } from ".."
import { useHideHeader } from "../../hooks/useHideHeader"

export function SignUpScreenView({
  onSignUp,
  onPressLogIn: handlePressLogIn,
  error,
}: {
  onSignUp: (email: string, password: string) => void
  onPressLogIn: () => void
  error: null | Error
}): JSX.Element {
  const [email, _setEmail] = useState("")
  const [password, setPassword] = useState("")
  const setEmail = useCallback(
    (email: string) => _setEmail(email.toLocaleLowerCase()),
    [_setEmail]
  )
  const handlePressSignUp = useCallback(() => {
    onSignUp(email, password)
  }, [onSignUp])
  useHideHeader()

  const [i, setI] = useState(0)
  const handleEmailTouchEnd = () => {
    if (i >= 4) {
      setI(0)
      setEmail(Math.random().toString().slice(2, 10) + "@example.com")
    } else {
      setI(i + 1)
    }
  }

  return (
    <KeyboardAvoidingView>
      <Box safeArea px="2" py="8" w="90%" maxW={290} alignSelf="center">
        <PageHeader>Sign Up</PageHeader>
        <PageSubheader>Create your user account</PageSubheader>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email Address:</FormControl.Label>
            <Input
              autoFocus
              value={email}
              onChangeText={setEmail}
              onTouchEnd={handleEmailTouchEnd}
            />
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
          <Button colorScheme="primary" onPress={handlePressSignUp}>
            Sign Up
          </Button>
          <Link alignSelf="center" onPress={handlePressLogIn}>
            Sign in with existing account
          </Link>
        </VStack>
      </Box>
    </KeyboardAvoidingView>
  )
}
