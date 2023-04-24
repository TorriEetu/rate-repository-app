import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (selectedOrder) => {
  //TODO figure out better way to do this
  const orderBy = selectedOrder === 'LATEST' ? 'CREATED_AT' : 'RATING_AVERAGE';
  const orderDirection = selectedOrder === 'LOWEST' ? 'ASC' : 'DESC';
  console.table(orderBy, orderDirection, selectedOrder);

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    variables: {
      orderBy: orderBy,
      orderDirection: orderDirection,
    },
    fetchPolicy: 'cache-and-network',
  });

  console.log(error);
  const repositories = data?.repositories;

  return { repositories, loading };
};

export default useRepositories;
