import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import ReactDOM from 'react-dom';

import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory/lib';
import {ApolloProvider} from 'react-apollo';
import {setContext} from 'apollo-link-context';

import './index.css';
import config from './config.json';
import Repositories from './components/RepositoriesContainer';


const middlewareLink = setContext(() => ({
    headers: {
        authorization: `Bearer ${config.token}` || null,
    },
}));

const httpLink = createHttpLink({uri: 'https://api.github.com/graphql'});

const link = middlewareLink.concat(httpLink);

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Repositories type="slider" />
    </ApolloProvider>,
    document.getElementById('root'),
);
