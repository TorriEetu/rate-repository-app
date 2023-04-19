import { useQuery } from '@apollo/client';
import { GET_REPOSITORY_REVIEWS } from '../graphql/queries';

const useReviews = (repositoryId) => {
  const { data, error, loading } = useQuery(GET_REPOSITORY_REVIEWS, {
    variables: { repositoryId },
    fetchPolicy: 'cache-and-network',
  });

  console.log(error);
  const reviews = data?.repository.reviews.edges.map((e) => e.node);
  return { reviews, loading };
};

export default useReviews;
