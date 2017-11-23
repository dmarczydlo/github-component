import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider, createNetworkInterface, ApolloClient} from 'react-apollo';
import './index.css';
import config from './../config.json';
import Repositories from './components/RepositoriesContainer';


const networkInterface = createNetworkInterface({uri: 'https://api.github.com/graphql'});

networkInterface.use([{
    applyMiddleware(req, next) {
        if (!req.options.headers) {
            req.options.headers = {};
        }
        req.options.headers.authorization = `Bearer ${config.token}`;
        next();
    },
}]);

const client = new ApolloClient({networkInterface});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Repositories type="slider" />
    </ApolloProvider>,
    document.getElementById('root'),
);
