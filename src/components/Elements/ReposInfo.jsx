import React from 'react';
import Languages from './Languages';

const RepoInfo = ({repo, i}) => {
    return (
        <div key={i} className="col-xs-12 col-md-4">
            <div className="col-xs-12 repository-block shadow">
                <p><a href={repo.url}>{repo.name}</a></p>
                <p>{repo.description}</p>
                <p>{repo.createdAt}</p>
                <p>{repo.updatedAt}</p>
                <Languages languages={repo.languages}/>
            </div>
        </div>
    );
};
export default RepoInfo;