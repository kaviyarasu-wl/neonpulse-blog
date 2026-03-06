import { Link } from 'react-router';
import clsx from 'clsx';
import Badge from '@components/common/Badge';
import PostMeta from '@components/blog/PostMeta';

const CATEGORY_COLOR_MAP = {
  technology: '#00F0FF',
  science: '#A855F7',
  design: '#FF00E5',
  culture: '#3B82F6',
  tutorials: '#39FF14',
};

export default function PostCard({ post, variant = 'default' }) {
  const categoryColor = CATEGORY_COLOR_MAP[post.category] || '#00F0FF';
  const categoryLabel =
    post.category.charAt(0).toUpperCase() + post.category.slice(1);

  const isFeatured = variant === 'featured';
  const isCompact = variant === 'compact';

  if (isCompact) {
    return (
      <Link
        to={`/blog/${post.slug}`}
        className="glass-card glass-card-hover block overflow-hidden group"
      >
        <div className={clsx('flex gap-4', 'flex-row')}>
          <div className="relative w-32 h-28 flex-shrink-0 overflow-hidden rounded-l-2xl">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-950/40" />
          </div>

          <div className="flex flex-col justify-center gap-2 py-3 pr-4 min-w-0">
            <Badge label={categoryLabel} color={categoryColor} />
            <h3 className="font-display font-semibold text-sm text-white line-clamp-2 transition-colors duration-300 group-hover:text-neon-cyan">
              {post.title}
            </h3>
            <PostMeta
              author={post.author}
              date={post.publishedAt}
              readingTime={post.readingTime}
              className="text-xs"
            />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/blog/${post.slug}`}
      className={clsx(
        'glass-card glass-card-hover block overflow-hidden group',
        isFeatured && 'md:col-span-2'
      )}
    >
      <div className="relative overflow-hidden">
        <div className={clsx('aspect-video', isFeatured && 'md:aspect-[21/9]')}>
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />

        <div className="absolute top-4 left-4">
          <Badge label={categoryLabel} color={categoryColor} />
        </div>
      </div>

      <div className={clsx('p-5', isFeatured && 'p-6')}>
        <h3
          className={clsx(
            'font-display font-semibold text-white transition-colors duration-300 group-hover:text-neon-cyan mb-2',
            isFeatured ? 'text-2xl' : 'text-lg'
          )}
        >
          {post.title}
        </h3>

        <p className="text-gray-400 line-clamp-2 text-sm mb-4">
          {post.excerpt}
        </p>

        <PostMeta
          author={post.author}
          date={post.publishedAt}
          readingTime={post.readingTime}
        />
      </div>
    </Link>
  );
}
