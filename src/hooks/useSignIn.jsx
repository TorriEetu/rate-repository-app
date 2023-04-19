import { useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';

const useSignIn = () => {
  //if fails check ip non static ips are fun
  const [mutate, result] = useMutation(AUTHENTICATE);

  const signIn = async ({ username, password }) => {
    console.table({ username, password });
    const result = await mutate({
      variables: { credentials: { username, password } },
    });
    const token = result.data.authenticate.accessToken;
    return token;
  };

  return [signIn, result];
};

export default useSignIn;
