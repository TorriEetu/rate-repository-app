import { View, StyleSheet, Button } from 'react-native';
import FormikTextInput from './ui/FormikTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';
import theme from '../theme';
import useCreateReview from '../hooks/useCreateReview';

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
  ownerName: '',
  repositoryName: '',
  rating: 0,
  text: '',
};

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .min(1, 'Repository owner name must be greater or equal to 1')
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .min(1, 'Repositorys name must be longer than 1')
    .required('Repositorys name is a required '),
  rating: yup
    .number()
    .min(0, 'Rating must be greater than 0')
    .max(100, 'Rating cannot be more than 100')
    .required('Rating is required'),
  text: yup.string(),
});

const ReviewInputForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View>
        <FormikTextInput
          name='ownerName'
          placeholder='Repository owner name'
          style={styles.input}></FormikTextInput>
      </View>
      <View>
        <FormikTextInput
          name='repositoryName'
          placeholder='Repository name'
          style={styles.input}></FormikTextInput>
      </View>
      <View>
        <FormikTextInput
          name='rating'
          placeholder='Rating between 0 and 100'
          style={styles.input}></FormikTextInput>
      </View>
      <View>
        <FormikTextInput
          name='text'
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

export function NewReviewContainer({ onSubmit }) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <ReviewInputForm onSubmit={handleSubmit} />}
    </Formik>
  );
}

const ReviewForm = () => {
  const [createReview] = useCreateReview();
  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;
    try {
      console.table({ ownerName, repositoryName, rating, text });
      const data = await createReview({
        ownerName,
        repositoryName,
        rating: Number(rating),
        text,
      });
      console.log(data);
    } catch (e) {
      console.log(e);
    }

    console.log(values);
  };

  return <NewReviewContainer onSubmit={onSubmit} />;
};

export default ReviewForm;
