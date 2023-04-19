import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

//This was pain in ass to figure out
//that you cant use multiple parameters in renderItem
const RepoItem = ({ repo }) => {
  const navigate = useNavigate();
  const onPress = () => navigate(`/repo/${repo.id}`);

  return (
    <Pressable onPress={onPress}>
      <RepositoryItem repo={repo}></RepositoryItem>
    </Pressable>
  );
};

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories ? repositories.edges.map((edge) => edge.node) : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepoItem repo={item}></RepoItem>}
      keyExtractor={(item) => item.id}
    />
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
