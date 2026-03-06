import { useState, useEffect, useMemo } from 'react';

export function useSearch(posts, delay = 300) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), delay);
    return () => clearTimeout(timer);
  }, [query, delay]);

  const results = useMemo(() => {
    if (!debouncedQuery.trim()) return posts;
    const q = debouncedQuery.toLowerCase();
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  }, [posts, debouncedQuery]);

  return { query, setQuery, results };
}
