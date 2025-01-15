import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Create an Apollo Client instance
const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined', // Disables force-fetching on the server (so queries are only run once)
    link: new HttpLink({
      uri: 'https://digitractive.com/cityprojectglobal/graphql', // Replace with your GraphQL endpoint
      credentials: 'same-origin',
    }),
    cache: new InMemoryCache(),
  });
};

// Initialize Apollo Client
export const initializeApollo = (initialState = null) => {
  const client = createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, let's hydrate the cache
  if (initialState) {
    client.cache.restore(initialState);
  }

  return client;
};
