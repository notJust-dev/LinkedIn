// Container component
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://chagallu.stepzen.net/api/coy-echidna/__graphql',
  headers: {
    Authorization:
      'apikey chagallu::stepzen.io+1000::19ef6939c01e85c5a4fd15e3cfeb93a9f0529a76d077f2fbdbbe2db8c4815de7',
  },
  cache: new InMemoryCache(),
});

export default client;
