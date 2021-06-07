import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(process.env.GRAPHQ_HOST)

export default client
