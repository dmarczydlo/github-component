import React from 'react';

import './../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Block from './Elements/Block';
import Carusel from './Elements/Carusel';


const display = (type, repositories) => {
    if (type === 'slider') return <Carusel repositories={repositories} />;
    return <Block repositories={repositories} />;
};

const Repositories = ({loading, repositories, type = 'block'}) => {
    if (loading) {
        return (
            <div>Loading data</div>
        );
    }

    return (
        <div>
            {display(type, repositories)}
        </div>
    );
};
export default Repositories;
