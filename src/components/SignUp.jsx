import { View, StyleSheet, Button } from 'react-native';
import FormikTextInput from './ui/FormikTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';
import theme from '../theme';
import useSignUp from '../hooks/useSignUp';
import { useNavigate } from 'react-router-native';

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
  username: '',
  password: '',
  identicalPassword: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Username must be greater or equal to 1')
    .max(30, 'Username must be less or equal to 30')
    .required('Username is required'),
  password: yup
    .string()
    .min(1, 'Password must be greater or equal to 5')
    .max(50, 'Password must be less or equal to 50')
    .required('Password is required'),
  identicalPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Password confirmation is required'),
});

const SignUpForm = ({ onSubmit }) => {
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
      <View>
        <FormikTextInput
          name='identicalPassword'
          placeholder='Password'
          secureTextEntry
          style={styles.input}></FormikTextInput>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onSubmit} title='Sign up' />
      </View>
    </View>
  );
};

export function SignUpContainer({ onSubmit }) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
}

const SignUp = () => {
  const [signUp] = useSignUp();
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      console.table({ username, password });
      const data = await signUp({ username, password });
      console.log(data);
      navigate('/signIn');
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
