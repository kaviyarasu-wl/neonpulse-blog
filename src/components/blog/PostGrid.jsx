import { motion } from 'motion/react';
import PostCard from '@components/blog/PostCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function PostGrid({ posts, variant = 'default' }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="glass-card p-12 text-center">
        <div className="flex flex-col items-center gap-4">
          <svg
            className="w-12 h-12 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <p className="text-gray-400 text-lg">No posts found</p>
          <p className="text-gray-500 text-sm">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {posts.map((post) => (
        <motion.div key={post.id} variants={itemVariants}>
          <PostCard post={post} variant={variant} />
        </motion.div>
      ))}
    </motion.div>
  );
}
