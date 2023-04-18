import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: 'whitesmoke',
    padding: 25,
    paddingLeft: 25,
  },
  container: {
    flexDirection: 'row',
  },
  logo: {
    borderRadius: 8,
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
    fontSize: 16,
    marginBottom: 10,
  },
  description: {
    color: 'grey',
    fontSize: 14,
    marginBottom: 10,
  },
  language: {
    backgroundColor: 'blue',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 6,
    alignSelf: 'flex-start',
    color: 'white',
    fontSize: 14,
  },
  infoContainer: {
    paddingLeft: 20,
    paddingRight: 30,
    flexDirection: 'column',
  },
  infoMainText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
    textAlign: 'center',
  },
  infoText: {
    color: 'grey',
  },
});

const RepositoryItem = ({ repo }) => {
  console.log(repo);
  return (
    <View style={styles.parentContainer}>
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
    </View>
  );
};

export default RepositoryItem;
