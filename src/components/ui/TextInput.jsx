import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    borderColor: 'red',
    marginBottom: 0,
    fontFamily: theme.fonts,
    fontSize: theme.fontSizes.body,
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
