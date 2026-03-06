import clsx from 'clsx';

function generatePageNumbers(currentPage, totalPages) {
  const MAX_VISIBLE = 5;

  if (totalPages <= MAX_VISIBLE) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages = [];
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, startPage + MAX_VISIBLE - 1);

  if (endPage - startPage < MAX_VISIBLE - 1) {
    startPage = Math.max(1, endPage - MAX_VISIBLE + 1);
  }

  if (startPage > 1) {
    pages.push(1);
    if (startPage > 2) {
      pages.push('...');
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    if (!pages.includes(i)) {
      pages.push(i);
    }
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      pages.push('...');
    }
    pages.push(totalPages);
  }

  return pages;
}

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) {
    return null;
  }

  const pageNumbers = generatePageNumbers(currentPage, totalPages);
  const isPrevDisabled = currentPage <= 1;
  const isNextDisabled = currentPage >= totalPages;

  return (
    <nav
      className="flex gap-2 justify-center items-center"
      aria-label="Pagination"
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isPrevDisabled}
        className={clsx(
          'glass-card p-2.5 rounded-xl transition-all duration-300 cursor-pointer',
          isPrevDisabled
            ? 'opacity-30 cursor-not-allowed'
            : 'hover:bg-white/5 text-gray-400 hover:text-white'
        )}
        aria-label="Previous page"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {pageNumbers.map((page, index) =>
        page === '...' ? (
          <span
            key={`ellipsis-${index}`}
            className="px-2 text-gray-500 select-none"
            aria-hidden="true"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={clsx(
              'min-w-[40px] h-10 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer',
              page === currentPage
                ? 'bg-neon-cyan/20 text-neon-cyan shadow-neon-cyan'
                : 'glass-card text-gray-400 hover:bg-white/5 hover:text-white'
            )}
            aria-label={`Page ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        )
      )}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isNextDisabled}
        className={clsx(
          'glass-card p-2.5 rounded-xl transition-all duration-300 cursor-pointer',
          isNextDisabled
            ? 'opacity-30 cursor-not-allowed'
            : 'hover:bg-white/5 text-gray-400 hover:text-white'
        )}
        aria-label="Next page"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </nav>
  );
}
