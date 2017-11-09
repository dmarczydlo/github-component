import React from 'react';
import RepoInfoBlock from './ReposInfoBlock';

const Block = ({repositories}) => {
    return (
        <div>
            {repositories.map((repo, i) => {
                const props = {repo, i};
                return <RepoInfoBlock key={i} {...props} />
            })}
        </div>
    );
};

export default Block;