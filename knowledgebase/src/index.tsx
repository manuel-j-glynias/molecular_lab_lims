import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost'
import { ApolloProvider} from "react-apollo";
import { ApolloProvider as ApolloHooksProvider} from "react-apollo-hooks";
import './index.css';
import App from './App';


const client = new ApolloClient({
    uri: 'http://165.227.89.140:7474/graphql/',
    // uri: 'http://localhost:7474/graphql/',
    fetchOptions: {
        credentials: 'include'
    },
    request: async (operation) => {
        operation.setContext({
            headers: {
                authorization: `Basic bmVvNGo6b21uaQ==`
            }
        });
    },
});


ReactDOM.render(
    <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
            <App />
        </ApolloHooksProvider>
    </ApolloProvider>,
    document.getElementById('root'),
);

export default client;