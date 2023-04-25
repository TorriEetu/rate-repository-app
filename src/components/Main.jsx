import { Route, Routes, Navigate } from 'react-router-native';
import SingleRepository from './repository/SingleRepository';
import RepositoryList from './repository/RepositoryList';
import UsersReviews from './UsersReviews';
import ReviewForm from './ReviewForm';
import { View } from 'react-native';
import AppBar from './AppBar';
import SignIn from './SignIn';
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
        <Route path='/user/reviews' element={<UsersReviews />} exact />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </View>
  );
};

export default Main;
