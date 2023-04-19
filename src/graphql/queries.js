import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          fullName
          reviewCount
          ratingAverage
          stargazersCount
          forksCount
          url
          ownerAvatarUrl
          description
          language
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query Query($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id
      fullName
      reviewCount
      ratingAverage
      stargazersCount
      forksCount
      url
      ownerAvatarUrl
      description
      language
    }
  }
`;

export const GET_REPOSITORY_REVIEWS = gql`
  query Query($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id
      fullName
      reviews {
        edges {
          node {
            id
            createdAt
            rating
            text
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;

export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`;
