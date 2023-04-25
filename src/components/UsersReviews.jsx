import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ReviewItem } from './repository/SingleRepository';
import useMe from '../hooks/useMe';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const UsersReviews = () => {
  const me = useMe(true);
  if (me.loading || !me) {
    return null;
  }
  const reviews = me.data.me.reviews.edges;
  console.log(reviews);
  return (
    <View>
      <FlatList
        ItemSeparatorComponent={ItemSeparator}
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item.node} />}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
};

export default UsersReviews;
