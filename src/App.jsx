import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Home';
import Blog from './pages/Blog';
import BlogPostDetail from './pages/BlogPostDetail';
import PageNotFound from './PageNotFound';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPostDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}