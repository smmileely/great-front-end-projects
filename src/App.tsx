import { Routes, Route } from 'react-router-dom';
import './App.css';
import BlogCardPage from './pages/blog-card-page';
import NotFoundPage from './pages/not-found-page';

const App = () => {
  return (
    <Routes>
      <Route path='/blog-card' element={<BlogCardPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
