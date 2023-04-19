import { View, StyleSheet, Button } from 'react-native';
import FormikTextInput from './ui/FormikTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  input: {
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
  reponame: '',
  rating: 0,
  review: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Username must be greater or equal to 1')
    .required('Username is required'),
  reponame: yup
    .string()
    .min(1, 'Repositorys name must be longer than 1')
    .required('Repositorys name is a required '),
  rating: yup
    .number()
    .min(0, 'Rating must be greater than 0')
    .max(100, 'Rating cannot be more than 100')
    .required('Rating is required'),
  review: yup.string(),
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
          name='reponame'
          placeholder='Reponame'
          style={styles.input}></FormikTextInput>
      </View>
      <View>
        <FormikTextInput name='rating' placeholder='Rating' style={styles.input}></FormikTextInput>
      </View>
      <View>
        <FormikTextInput
          name='review'
          placeholder='Review'
          style={styles.input}
          multiline></FormikTextInput>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onSubmit} title='Sign in' />
      </View>
    </View>
  );
};

export function SignInContainer({ onSubmit }) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
}

const ReviewForm = () => {
  const onSubmit = async (values) => {
    console.log(values);
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default ReviewForm;
