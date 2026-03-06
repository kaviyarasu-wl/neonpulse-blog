export function filterPosts(posts, { category, search } = {}) {
  let filtered = [...posts];

  if (category && category !== 'all') {
    filtered = filtered.filter((p) => p.category === category);
  }

  if (search && search.trim()) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  return filtered;
}
