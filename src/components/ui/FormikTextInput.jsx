import { useField } from 'formik';

import TextInput from './TextInput';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    paddingLeft: 15,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  console.log(meta.error);

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
