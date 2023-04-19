import { View, StyleSheet, Text, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import theme from '../theme';
import { useApolloClient, useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backGround,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    // ...
  },
  item: {
    //Probably bad way to do this
    paddingTop: Constants.statusBarHeight / 2,
    backgroundColor: theme.colors.backGround,
    padding: 16,
    fontWeight: 'bold',
    textAlign: 'justify',
    flexDirection: 'column',
    color: theme.colors.textBar,
    fontSize: theme.fontSizes.bar,
    fontFamily: theme.fonts,
  },
  scrollView: {
    marginHorizontal: 5,
  },
  // ...
});

const AppBar = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const { data } = useQuery(ME);
  const me = data?.me;
  console.log(me);

  async function signOut() {
    console.log('Hello');
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
        <Link to='/'>
          <Text style={styles.item}>Repositories</Text>
        </Link>
        {me ? (
          <Pressable onPress={signOut}>
            <Text style={styles.item}>Sign out</Text>
          </Pressable>
        ) : (
          <Link to='/signIn'>
            <Text style={styles.item}>Sign in</Text>
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
