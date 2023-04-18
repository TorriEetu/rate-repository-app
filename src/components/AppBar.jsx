import { View, StyleSheet, Text, Pressable } from 'react-native';
import Constants from 'expo-constants';

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
      <Pressable onPress={() => console.log('Repositories')}>
        <Text style={styles.item}>Repositories</Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
