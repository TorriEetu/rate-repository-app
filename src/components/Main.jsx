import { Route, Routes, Navigate } from 'react-router-native';
import { View } from 'react-native';
import RepositoryList from './repository/RepositoryList';
import AppBar from './AppBar';
import SignIn from './SignIn';
import SingleRepository from './repository/SingleRepository';
import ReviewForm from './ReviewForm';
import SignUp from './SignUp';

const Main = () => {
  return (
    <View>
      <AppBar></AppBar>
      <Routes>
        <Route path='/' element={<RepositoryList />} exact />
        <Route path='/signIn' element={<SignIn />} exact />
        <Route path='/signUp' element={<SignUp />} exact />
        <Route path='/review' element={<ReviewForm />} exact />
        <Route path='/repo/:id' element={<SingleRepository />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </View>
  );
};

export default Main;
