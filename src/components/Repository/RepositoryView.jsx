import { View, Text, Image, StyleSheet, Linking, Button, Pressable, FlatList } from 'react-native';
import theme from '../../theme';
import { useParams } from 'react-router-native';
import useRepository from '../../hooks/useRepository';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    marginHorizontal: 12,
  },
});

const RepositoryView = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);
  if (!repository) {
    return null;
  }

  function openGithub() {
    Linking.openURL(repository.url);
  }

  console.log(repository);
  return (
    <View>
      <RepositoryItem repo={repository}></RepositoryItem>
      <View style={styles.buttonContainer}>
        <Button onPress={openGithub} title='Open in GitHub' />
      </View>
    </View>
  );
};

export default RepositoryView;
