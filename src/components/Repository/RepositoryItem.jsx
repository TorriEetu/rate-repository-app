import { View, Text, Image, StyleSheet, Button, Linking } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: theme.colors.repoContainer,
    padding: 20,
    paddingLeft: 25,
  },
  container: {
    flexDirection: 'row',
  },
  logo: {
    borderRadius: 8,
    marginTop: 8,
    width: 50,
    height: 50,
  },
  textContainer: {
    paddingLeft: 15,
    flexDirection: 'column',
    padding: 5,
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: theme.fontSizes.subheading,
    fontFamily: theme.fonts,
  },
  description: {
    color: theme.colors.backGround,
    marginBottom: 10,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts,
  },
  language: {
    backgroundColor: theme.colors.primary,
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 6,
    alignSelf: 'flex-start',
    color: theme.colors.textBar,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts,
  },
  infoContainer: {
    paddingLeft: 20,
    paddingRight: 30,
    flexDirection: 'column',
  },
  infoMainText: {
    fontWeight: 'bold',
    marginBottom: 2,
    textAlign: 'center',
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts,
  },
  infoText: {
    color: theme.colors.backGround,
    fontFamily: theme.fonts,
  },
  buttonContainer: {
    marginTop: 15,
    marginHorizontal: 12,
  },
});

const RepositoryItem = ({ repo, git = false }) => {
  function openGithub() {
    Linking.openURL(repo.url);
  }

  return (
    <View style={styles.parentContainer} testID='repositoryItem'>
      <View style={styles.container}>
        <Image style={styles.logo} source={{ uri: repo.ownerAvatarUrl }} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{repo.fullName}</Text>
          <Text style={styles.description}>{repo.description}</Text>
          <Text style={styles.language}> {repo.language}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoMainText}>{Number(repo.stargazersCount / 1000).toFixed(1)}k</Text>
          <Text style={styles.infoText}>Stars</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoMainText}>{Number(repo.forksCount / 1000).toFixed(1)}k</Text>
          <Text style={styles.infoText}>Forks</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoMainText}>{repo.reviewCount}</Text>
          <Text style={styles.infoText}>Reviews</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoMainText}>{repo.ratingAverage}</Text>
          <Text style={styles.infoText}>Rating</Text>
        </View>
      </View>
      {git && (
        <View style={styles.buttonContainer}>
          <Button onPress={openGithub} title='Open in GitHub' />
        </View>
      )}
    </View>
  );
};

export default RepositoryItem;
