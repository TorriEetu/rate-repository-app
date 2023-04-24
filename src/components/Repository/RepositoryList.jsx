import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import TextInput from '../ui/TextInput';
import { useDebounce } from 'use-debounce';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

//TODO Add css
const OrderByPicker = ({ selectedOrder, setSelectedOrder }) => {
  return (
    <Picker selectedValue={selectedOrder} onValueChange={(value, index) => setSelectedOrder(value)}>
      <Picker.Item label='Latest repositories' value='LATEST' />
      <Picker.Item label='Highest rated repositories' value='HIGHEST' />
      <Picker.Item label='Lowest rated repositories' value='LOWEST' />
    </Picker>
  );
};

//TODO Add css
const FilterBySearch = ({ filter, setFilter }) => {
  return (
    <View>
      <TextInput value={filter} onChangeText={(value) => setFilter(value)} />
    </View>
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

export const RepositoryListContainer = ({
  repositories,
  selectedOrder,
  setSelectedOrder,
  filter,
  setFilter,
}) => {
  const repositoryNodes = repositories ? repositories.edges.map((edge) => edge.node) : [];

  return (
    <View>
      <ItemSeparator></ItemSeparator>
      <FilterBySearch filter={filter} setFilter={setFilter} />
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
  const [filter, setFilter] = useState('');
  const [debouncedFilter] = useDebounce(filter, 500);
  console.log(debouncedFilter);
  const { repositories } = useRepositories({ selectedOrder, filter: debouncedFilter });

  return (
    <RepositoryListContainer
      repositories={repositories}
      selectedOrder={selectedOrder}
      setSelectedOrder={setSelectedOrder}
      filter={filter}
      setFilter={setFilter}
    />
  );
};

export default RepositoryList;
