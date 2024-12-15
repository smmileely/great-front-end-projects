import { Routes, Route } from 'react-router-dom';
import './App.css';
import NotFoundPage from './pages/not-found-page';
import BlogCardPage from './pages/blog-card-page';
import ProfileCardPage from './pages/profile-card-page';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<BlogCardPage />} />
      <Route path='/profile-card' element={<ProfileCardPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
