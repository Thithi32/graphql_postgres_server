import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema';
import resolvers from './resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  }),
);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}...`);
});
