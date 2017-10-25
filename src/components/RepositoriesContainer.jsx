import Repositories from './Repositories';
import {graphql} from 'react-apollo';
import config from './../../config.json';
import Query from './../Query/getRepositories';



const RepositoriesWithData = graphql(Query, {
    options: {variables: {number_of_repos: config.limit, before: null}},
    props: ({data}) => {

        if (data.loading) {
            return {loading: true};
        }

        return {
            viewer: data.viewer.name,
            repositories: data.viewer.repositories.nodes.map((repo) => {
                const {name, description, createdAt, updatedAt, descriptionHTML, url} = repo;
                return {
                    name,
                    description,
                    createdAt,
                    updatedAt,
                    descriptionHTML,
                    url,
                    languages: repo.languages.edges.map((lang) => {
                        return lang.node.name || ''
                    })
                }
            })
        }
    }
})(Repositories);

export default RepositoriesWithData;