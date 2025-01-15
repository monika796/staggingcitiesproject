import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          page: {
            merge(existing = {}, incoming) {
              return { ...existing, ...incoming } // Merge fields without overwriting
            },
          },
        },
      },
    },
  }),
})

export default client
