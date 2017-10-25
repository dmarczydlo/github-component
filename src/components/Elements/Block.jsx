import React from 'react';
import RepoInfo from './ReposInfo';

const Block = ({repositories}) => {
    return (
        <div>
            {repositories.map((repo, i) => {
                const props = {repo, i};
                return <RepoInfo key={i} {...props} />
            })}
        </div>
    );
};

export default Block;