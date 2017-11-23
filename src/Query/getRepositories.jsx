import gql from 'graphql-tag';

const Query = gql`
  query ($number_of_repos: Int!, $before: String) {
  viewer {
    name
    repositories(last: $number_of_repos, before: $before) {
     
      nodes {
        name
        url
        createdAt
        updatedAt
        description,
        descriptionHTML
        languages(last: $number_of_repos) {
          edges {
            node {
              name
            }
          }
        }
      }
      edges{
        cursor
      }
    }
  }
}`;

export default Query;
