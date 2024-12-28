import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import NotFoundPage from './pages/not-found-page';
import BlogCardPage from './pages/blog-card-page';
import ProfileCardPage from './pages/profile-card-page';
import NewsletterPage from './pages/news-letter-page';

const App = () => {
  return (
    <HashRouter>
      <div>
        {/* Navigation links for testing */}
        <nav className='p-4 bg-gray-100'>
          <ul className='flex gap-4'>
            <li>
              <Link to='/' className='text-blue-600 hover:text-blue-800'>
                Blog Card
              </Link>
            </li>
            <li>
              <Link
                to='/profile-card'
                className='text-blue-600 hover:text-blue-800'
              >
                Profile Card
              </Link>
            </li>
            <li>
              <Link
                to='/news-letter'
                className='text-blue-600 hover:text-blue-800'
              >
                Newsletter
              </Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path='/' element={<BlogCardPage />} />
          <Route path='/profile-card' element={<ProfileCardPage />} />
          <Route path='/news-letter' element={<NewsletterPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
