import { BrowserRouter, Routes, Route } from 'react-router';
import { lazy, Suspense } from 'react';
import RootLayout from '@layouts/RootLayout';

const HomePage = lazy(() => import('@pages/HomePage'));
const BlogPage = lazy(() => import('@pages/BlogPage'));
const PostPage = lazy(() => import('@pages/PostPage'));
const CategoriesPage = lazy(() => import('@pages/CategoriesPage'));
const CategoryPage = lazy(() => import('@pages/CategoryPage'));
const AboutPage = lazy(() => import('@pages/AboutPage'));
const NotFoundPage = lazy(() => import('@pages/NotFoundPage'));

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-neon-cyan border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:slug" element={<PostPage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="categories/:slug" element={<CategoryPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
