import { motion } from 'motion/react';
import Badge from '@components/common/Badge';
import PostMeta from '@components/blog/PostMeta';

const CATEGORY_COLOR_MAP = {
  technology: '#00F0FF',
  science: '#A855F7',
  design: '#FF00E5',
  culture: '#3B82F6',
  tutorials: '#39FF14',
};

export default function PostHeader({ post }) {
  const categoryColor = CATEGORY_COLOR_MAP[post.category] || '#00F0FF';
  const categoryLabel =
    post.category.charAt(0).toUpperCase() + post.category.slice(1);

  return (
    <div className="relative w-full">
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-dark-950/20" />
      </div>

      <motion.div
        className="absolute inset-0 flex items-end"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-4xl mx-auto w-full px-6 pb-12">
          <Badge
            label={categoryLabel}
            color={categoryColor}
            className="mb-4"
          />

          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <PostMeta
            author={post.author}
            date={post.publishedAt}
            readingTime={post.readingTime}
          />
        </div>
      </motion.div>
    </div>
  );
}
