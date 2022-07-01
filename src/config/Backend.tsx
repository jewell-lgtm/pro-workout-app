import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import Constants from "expo-constants"
import React, { ReactNode } from "react"

const client = new ApolloClient({
  uri: Constants.manifest?.extra?.backendUrl,
  cache: new InMemoryCache(),
})

export function BackendProvider({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
