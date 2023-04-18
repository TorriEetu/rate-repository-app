import { View, StyleSheet, Button } from 'react-native';
import FormikTextInput from './ui/FormikTextInput';
import { Formik } from 'formik';

const initialValues = {
  userName: '',
  password: '',
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    borderColor: 'lightgray',
  },
  container: {
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  buttonContainer: {
    marginHorizontal: 12,
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View>
        <FormikTextInput
          name='username'
          placeholder='Username'
          style={styles.input}></FormikTextInput>
      </View>
      <View>
        <FormikTextInput
          name='password'
          placeholder='Password'
          secureTextEntry
          style={styles.input}></FormikTextInput>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={() => onSubmit()} title='Sign in' />
      </View>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
