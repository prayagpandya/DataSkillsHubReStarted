import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import React, { useEffect } from 'react';

import PopularBlogDetailPage from './organisms/PopularBlogsDetails';
import About from './pages/About';
import AboutUs from './pages/About';
import CourseDetailedPage from './pages/CourseDetailedPage';
import Courses from './pages/Courses';
import Home from './pages/Home';
import JobInfoPage from './pages/JobInfoPage';
import Jobs from './pages/Jobs';
import Service from './pages/Service';
import MainLayout from './utils/MainLayout';

// ScrollToTop Component to handle scrolling on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]); // Trigger on pathname change

  return null; // This component doesn't render anything
};

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop component */}
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/service' element={<Service />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/blogs/:id' element={<PopularBlogDetailPage />} />
          <Route path='/jobs/:id' element={<JobInfoPage />} />
          <Route path='/courses/:courseName' element={<CourseDetailedPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
