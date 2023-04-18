import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import theme from '../theme';

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
    fontFamily: theme.fonts,
  },
  scrollView: {
    marginHorizontal: 5,
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
        <Link to='/'>
          <Text style={styles.item}>Repositories</Text>
        </Link>
        <Link to='/signIn'>
          <Text style={styles.item}>Sign in</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
