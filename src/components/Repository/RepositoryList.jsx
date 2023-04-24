import { FlatList, View, StyleSheet, Pressable, Text } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const OrderByPicker = ({ selectedOrder, setSelectedOrder }) => {
  return (
    <Picker selectedValue={selectedOrder} onValueChange={(value, index) => setSelectedOrder(value)}>
      <Picker.Item label='Latest repositories' value='LATEST' />
      <Picker.Item label='Highest rated repositories' value='HIGHEST' />
      <Picker.Item label='Lowest rated repositories' value='LOWEST' />
    </Picker>
  );
};

const RepoItem = ({ repo }) => {
  const navigate = useNavigate();
  const onPress = () => navigate(`/repo/${repo.id}`);

  return (
    <Pressable onPress={onPress}>
      <RepositoryItem repo={repo}></RepositoryItem>
    </Pressable>
  );
};

export const RepositoryListContainer = ({ repositories, selectedOrder, setSelectedOrder }) => {
  const repositoryNodes = repositories ? repositories.edges.map((edge) => edge.node) : [];

  return (
    <View>
      <OrderByPicker selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder} />
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepoItem repo={item}></RepoItem>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const RepositoryList = () => {
  const [selectedOrder, setSelectedOrder] = useState('LATEST');
  const { repositories } = useRepositories(selectedOrder);
  return (
    <RepositoryListContainer
      repositories={repositories}
      selectedOrder={selectedOrder}
      setSelectedOrder={setSelectedOrder}
    />
  );
};

export default RepositoryList;
