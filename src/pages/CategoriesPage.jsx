import { motion } from 'motion/react';
import CategoryCard from '@components/categories/CategoryCard';
import categories from '@data/categories.json';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function CategoriesPage() {
  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-4">
            Categories
          </h1>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl">
            Browse articles by topic. Find the subjects that interest you most.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category) => (
            <motion.div key={category.slug} variants={itemVariants}>
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
