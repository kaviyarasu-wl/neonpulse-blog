import { useState, useMemo } from 'react';

export function usePagination(items, perPage = 6) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / perPage);

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * perPage;
    return items.slice(start, start + perPage);
  }, [items, currentPage, perPage]);

  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    currentPage,
    totalPages,
    paginatedItems,
    goToPage,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
  };
}
