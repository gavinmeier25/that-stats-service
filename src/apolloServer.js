import { ApolloServer } from 'apollo-server-express';
import dataSources from './datasources';
import resolvers from './resolvers';
import typeDefs from './schema/typeDefs';

export default new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context: ({ req, res }) => ({
    req,
    res,
  }),
  tracing: true,
  cacheControl: false,
  cors: false,
  formatError: err => {
    console.error(err.message, err.path);
    return err;
  },
  formatResponse: res => {
    console.log(
      `start-time: ${res.extensions.tracing.startTime}\nend-time: ${res.extensions.tracing.endTime}`
    );
    return res;
  },
});
