import React from 'react';

import './../index.css';
import  '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Block from './Elements/Block';

const Repositories = ({loading, repositories}) => {

    if (loading) {
        return (
            <div>Loading data</div>
        )
    } else {
        return (
            <div>
                <Block repositories={repositories}/>
            </div>

        )
    }
};
export default Repositories;