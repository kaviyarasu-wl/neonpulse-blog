import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { motion } from 'motion/react';
import PostGrid from '@components/blog/PostGrid';
import CategoryFilter from '@components/blog/CategoryFilter';
import Pagination from '@components/blog/Pagination';
import SearchInput from '@components/common/SearchInput';
import posts from '@data/posts.json';
import categories from '@data/categories.json';
import { filterPosts } from '@utils/filterPosts';
import { usePagination } from '@hooks/usePagination';
import { useSearch } from '@hooks/useSearch';

export default function BlogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get('category') || 'all'
  );

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );

  const { query, setQuery, results: searchResults } = useSearch(sortedPosts);

  const filteredPosts = filterPosts(searchResults, {
    category: activeCategory,
  });

  const { currentPage, totalPages, paginatedItems, goToPage } =
    usePagination(filteredPosts, 6);

  const handleCategorySelect = (slug) => {
    setActiveCategory(slug);
    goToPage(1);
    if (slug === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', slug);
    }
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && cat !== activeCategory) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-4">
            Blog
          </h1>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl">
            Explore articles on technology, science, design, and the culture of
            tomorrow.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8 items-start sm:items-center justify-between">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onSelect={handleCategorySelect}
          />
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Search posts..."
          />
        </div>

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
