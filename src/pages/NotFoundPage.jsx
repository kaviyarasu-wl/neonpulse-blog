import { motion } from 'motion/react';
import Button from '@components/common/Button';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="font-display text-8xl md:text-9xl font-bold gradient-text mb-4">
          404
        </h1>
        <p className="text-xl text-gray-400 mb-2">Signal Lost</p>
        <p className="text-gray-500 mb-8">
          The page you're looking for has drifted into the void. It may have
          been moved, deleted, or never existed in this timeline.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="primary" href="/">
            Return Home
          </Button>
          <Button variant="secondary" href="/blog">
            Browse Blog
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
