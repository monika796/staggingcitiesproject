// import { SchemaLink } from '@apollo/client/link/schema';
// import { makeExecutableSchema } from '@graphql-tools/schema'; // Import schema tools
// import { buildClientSchema, IntrospectionQuery } from 'graphql'; // Use buildClientSchema for introspection schema
// import introspectionSchema from '../../graphql.schema.json';
// import { ApolloError } from '@apollo/client';
// import { cache } from 'react';
// const schema = buildClientSchema(introspectionSchema as unknown as IntrospectionQuery);
// import CacheSettings from './cacheSettings';
import { HttpLink } from '@apollo/client'
import { ApolloClient, registerApolloClient, InMemoryCache } from '@apollo/experimental-nextjs-app-support'
import { RetryLink } from '@apollo/client/link/retry'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    link: new RetryLink({
      attempts: {
        max: 10,
        retryIf: (error, _operation) => !!error,
      },
    }).concat(
      new HttpLink({
        uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
      }),
    ),
    cache: new InMemoryCache({
      typePolicies: {
        page: {
          keyFields: ['databaseId'], // Ensure Apollo identifies different Page objects
        },
        posts: {
          keyFields: ['databaseId'], // Ensure Apollo identifies different Page objects
        },
        Query: {
          fields: {
            page: { merge: true },
            posts: { merge: true },
          },
        },
      },
    }),
  })
})
