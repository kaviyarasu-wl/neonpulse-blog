import HeroSection from '@components/home/HeroSection';
import FeaturedPosts from '@components/home/FeaturedPosts';
import RecentPosts from '@components/home/RecentPosts';
import posts from '@data/posts.json';

export default function HomePage() {
  const featuredPosts = posts.filter((p) => p.featured).slice(0, 3);
  const recentPosts = posts
    .filter((p) => !p.featured)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 6);

  return (
    <>
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturedPosts posts={featuredPosts} />
        <RecentPosts posts={recentPosts} />
      </div>
    </>
  );
}
