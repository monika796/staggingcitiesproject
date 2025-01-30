import { ApolloClient, InMemoryCache, disableFragmentWarnings, HttpLink } from '@apollo/client'

export function makeClient() {
  disableFragmentWarnings()

  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    fetchOptions: { cache: 'no-store' },
    // const { data } = useSuspenseQuery(MY_QUERY, { context: { fetchOptions: { cache: "force-cache" }}});
  })

  return new ApolloClient({
    ssrMode: true,
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
    link: httpLink,
  })
}

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL, // Environment variable for GraphQL endpoint
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
