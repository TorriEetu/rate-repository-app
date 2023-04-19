import { useMutation, useApolloClient } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
  //if fails check ip non static ips are fun
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(AUTHENTICATE);

  const signIn = async ({ username, password }) => {
    console.table({ username, password });
    const result = await mutate({
      variables: { credentials: { username, password } },
    });
    const token = result.data.authenticate.accessToken;
    await authStorage.setAccessToken(token);
    apolloClient.resetStore();
    return token;
  };

  return [signIn, result];
};

export default useSignIn;
