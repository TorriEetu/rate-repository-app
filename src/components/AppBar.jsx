import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'gray',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    // ...
  },
  item: {
    //Probably bad way to do this
    paddingTop: Constants.statusBarHeight / 2,
    backgroundColor: 'gray',
    fontSize: 24,
    padding: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'justify',
    flexDirection: 'column',
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Link to='/'>
        <Text style={styles.item}>Repositories</Text>
      </Link>
      <Link to='/signIn'>
        <Text style={styles.item}>Sign in</Text>
      </Link>
    </View>
  );
};

export default AppBar;
