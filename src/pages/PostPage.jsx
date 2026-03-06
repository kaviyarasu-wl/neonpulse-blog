import { useParams, Navigate } from 'react-router';
import PostHeader from '@components/post/PostHeader';
import PostContent from '@components/post/PostContent';
import TableOfContents from '@components/post/TableOfContents';
import PostNavigation from '@components/post/PostNavigation';
import RelatedPosts from '@components/post/RelatedPosts';
import posts from '@data/posts.json';

export default function PostPage() {
  const { slug } = useParams();
  const postIndex = posts.findIndex((p) => p.slug === slug);
  const post = posts[postIndex];

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const prevPost =
    postIndex < posts.length - 1
      ? { slug: posts[postIndex + 1].slug, title: posts[postIndex + 1].title }
      : null;
  const nextPost =
    postIndex > 0
      ? { slug: posts[postIndex - 1].slug, title: posts[postIndex - 1].title }
      : null;

  const relatedPosts = posts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-20 pb-16">
      <PostHeader post={post} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
          <div>
            <PostContent content={post.content} />
          </div>
          <aside className="hidden lg:block">
            {post.headings && post.headings.length > 0 && (
              <TableOfContents headings={post.headings} />
            )}
          </aside>
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          <PostNavigation prevPost={prevPost} nextPost={nextPost} />
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-20">
            <RelatedPosts posts={relatedPosts} />
          </div>
        )}
      </div>
    </div>
  );
}
