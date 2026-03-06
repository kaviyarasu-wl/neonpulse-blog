import PostGrid from '@components/blog/PostGrid';
import Button from '@components/common/Button';

export default function RecentPosts({ posts }) {
  if (!posts || posts.length === 0) {
    return null;
  }

  const displayPosts = posts.slice(0, 6);

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            Latest Posts
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta rounded-full" />
        </div>

        <PostGrid posts={displayPosts} />

        <div className="mt-12 flex justify-center">
          <Button variant="secondary" size="lg" href="/blog">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
}
