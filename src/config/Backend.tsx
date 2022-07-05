import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import Constants from "expo-constants"
import React, { ReactNode, useMemo } from "react"
import { useToken } from "./auth"

const httpLink = createHttpLink({
  uri: Constants.manifest?.extra?.backendUrl,
})

function useBackendClient() {
  const token = useToken()

  return useMemo(() => {
    const authLink = setContext((_, { headers }) => {
      // return the headers to the context so httpLink can read them
      return {
        headers: token
          ? {
              ...headers,
              "auth-provider": "firebase",
              Authorization: `Bearer ${token}`,
            }
          : headers,
      }
    })

    return new ApolloClient({
      cache: new InMemoryCache(),
      link: authLink.concat(httpLink),
    })
  }, [token])
}

export function BackendProvider({ children }: { children: ReactNode }) {
  const client = useBackendClient()

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
