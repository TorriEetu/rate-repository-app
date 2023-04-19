import { View, Text, Image, StyleSheet, Linking, Button, Pressable, FlatList } from 'react-native';
import theme from '../../theme';
import { useParams } from 'react-router-native';
import useRepository from '../../hooks/useRepository';
import RepositoryItem from './RepositoryItem';
import useReviews from '../../hooks/useReviews';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  parentContainer: {
    backgroundColor: theme.colors.repoContainer,
    flexDirection: 'row',
    padding: 20,
    paddingLeft: 25,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: theme.fontSizes.subheading,
    fontFamily: theme.fonts,
  },
  date: {
    color: theme.colors.backGround,
    marginBottom: 10,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts,
  },
  textContainer: {
    backgroundColor: theme.colors.repoContainer,
    flexDirection: 'column',
    paddingLeft: 25,
    paddingRight: 25,
  },
  reviewContainer: {
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.primary,
    borderRadius: 50 / 2,
    borderWidth: 2,
    height: 50,
    width: 50,
  },
  review: {
    color: theme.colors.primary,
    fontSize: theme.fontSizes.bar,
    fontFamily: theme.fonts,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryInfo = ({ repository }) => {
  // Repository's information implemented in the previous exercise
  return (
    <View>
      <RepositoryItem repo={repository} git={true} />
      <ItemSeparator />
    </View>
  );
};

const ReviewItem = ({ review }) => {
  const date = format(new Date(review.createdAt), 'dd.MM.yyyy');

  // Single review item
  console.log(review);
  return (
    <View style={styles.parentContainer}>
      <View>
        <View style={styles.reviewContainer}>
          <Text style={styles.review}>{review.rating}</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{review.user.username}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};

const SingleRepository = () => {
  const { id } = useParams();
  const { repository } = useRepository(id);
  const { reviews } = useReviews(id);
  if (!repository || !reviews) {
    return null;
  }
  const headerComponent = () => <RepositoryInfo repository={repository} />;
  return (
    <View>
      <FlatList
        ItemSeparatorComponent={ItemSeparator}
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={headerComponent}
      />
    </View>
  );
};

export default SingleRepository;
