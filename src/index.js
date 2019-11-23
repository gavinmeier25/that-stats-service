import { express as voyager } from 'graphql-voyager/middleware';
import express from 'express';
import apolloServer from './apolloServer';

const app = express();

app.use('/voyager', voyager({ endpointUrl: '/graphql' }));

apolloServer.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log('server is ready');
});
