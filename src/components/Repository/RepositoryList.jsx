import { FlatList, View, StyleSheet, SafeAreaView } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();
  console.log(repositories);
  // Get the nodes from the edges array
  const repositoryNodes = repositories ? repositories.edges.map((edge) => edge.node) : [];
  console.log(repositoryNodes);

  return (
    <SafeAreaView>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem repo={item}></RepositoryItem>}
        keyExtractor={(item) => item.id}
        // other props
      />
    </SafeAreaView>
  );
};

export default RepositoryList;
