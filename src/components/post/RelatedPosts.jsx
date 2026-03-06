import { motion } from 'motion/react';
import PostCard from '@components/blog/PostCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

export default function RelatedPosts({ posts }) {
  if (!posts || posts.length === 0) {
    return null;
  }

  const displayPosts = posts.slice(0, 3);

  return (
    <section>
      <h2 className="font-display text-2xl font-bold text-white mb-8">
        Related Posts
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {displayPosts.map((post) => (
          <motion.div key={post.id} variants={itemVariants}>
            <PostCard post={post} variant="compact" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
