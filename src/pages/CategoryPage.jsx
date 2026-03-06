import { useParams, Navigate } from 'react-router';
import { motion } from 'motion/react';
import PostGrid from '@components/blog/PostGrid';
import Pagination from '@components/blog/Pagination';
import posts from '@data/posts.json';
import categories from '@data/categories.json';
import { usePagination } from '@hooks/usePagination';

export default function CategoryPage() {
  const { slug } = useParams();
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return <Navigate to="/404" replace />;
  }

  const categoryPosts = posts
    .filter((p) => p.category === slug)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  const { currentPage, totalPages, paginatedItems, goToPage } =
    usePagination(categoryPosts, 6);

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: category.color }}
            />
            <span className="text-sm font-mono uppercase tracking-widest text-gray-400">
              Category
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            {category.name}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            {category.description}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {categoryPosts.length}{' '}
            {categoryPosts.length === 1 ? 'article' : 'articles'}
          </p>
        </motion.div>

        <PostGrid posts={paginatedItems} />

        <div className="mt-12">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={goToPage}
          />
        </div>
      </div>
    </div>
  );
}
