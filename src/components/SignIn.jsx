import { View, StyleSheet, Button } from 'react-native';
import FormikTextInput from './ui/FormikTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';
import theme from '../theme';

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    marginBottom: 16.5,
    fontFamily: theme.fonts,
    fontSize: theme.fontSizes.body,
    borderColor: theme.colors.inputBox,
  },
  container: {
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  buttonContainer: {
    marginTop: 10,
    marginHorizontal: 12,
  },
});

const initialValues = {
  userName: '',
  password: '',
};

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
        <Button onPress={onSubmit} title='Sign in' />
      </View>
    </View>
  );
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Username must be greater or equal to 1')
    .required('Username is required'),
  password: yup
    .string()
    .min(1, 'Password must be greater or equal to 1')
    .required('Password is required'),
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
