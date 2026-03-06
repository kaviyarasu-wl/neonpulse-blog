import { motion } from 'motion/react';
import PostCard from '@components/blog/PostCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function FeaturedPosts({ posts }) {
  if (!posts || posts.length === 0) {
    return null;
  }

  const displayPosts = posts.slice(0, 3);
  const hasThreePosts = displayPosts.length === 3;

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            Featured Articles
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta rounded-full" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className={
            hasThreePosts
              ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
              : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          }
        >
          {hasThreePosts ? (
            <>
              <motion.div variants={itemVariants} className="md:col-span-1">
                <PostCard post={displayPosts[0]} variant="featured" />
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="md:col-span-1 flex flex-col gap-6"
              >
                <PostCard post={displayPosts[1]} variant="default" />
                <PostCard post={displayPosts[2]} variant="default" />
              </motion.div>
            </>
          ) : (
            displayPosts.map((post) => (
              <motion.div key={post.id} variants={itemVariants}>
                <PostCard post={post} variant="default" />
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
}
