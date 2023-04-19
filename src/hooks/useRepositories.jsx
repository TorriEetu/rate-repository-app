import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  //if fails check ip non static ips are fun
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  console.log(error);
  const repositories = data?.repositories;

  return { repositories, loading };
};

export default useRepositories;
