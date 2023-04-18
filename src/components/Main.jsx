import { View } from 'react-native';
import RepositoryList from './Repository/RepositoryList';
import AppBar from './AppBar';

const Main = () => {
  return (
    <View>
      <AppBar></AppBar>
      <RepositoryList></RepositoryList>
    </View>
  );
};

export default Main;
