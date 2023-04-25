import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

//TODO makeup better name
const useMe = (includeReviews) => {
  const { data, error, loading } = useQuery(ME, {
    variables: {
      includeReviews,
    },
  });

  console.log(error);
  console.log(data);
  console.log(loading);
  return { data, loading };
};

export default useMe;
