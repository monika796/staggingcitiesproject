// import makeClient from '../apollo-client'
import { getClient } from './server'

export async function fetchData(query) {
  const client = await getClient()
  try {
    // console.log('apolloClient', apolloClient)
    const { data } = await client.query({
      query,
      variables: {},
      // fetchPolicy: 'cache-and-network', // Optional, can be adjusted based on requirements
    })
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw new Error('Failed to fetch data') // Optionally rethrow the error
  }
}
