import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    borderColor: 'red',
    marginBottom: 0,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];
  if (error) {
    return <NativeTextInput style={styles.input} {...props} />;
  }
  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
