import { motion } from 'motion/react';
import Button from '@components/common/Button';
import GlowOrb from '@components/effects/GlowOrb';
import GridOverlay from '@components/effects/GridOverlay';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg" />

      <GlowOrb
        color="#00F0FF"
        size={500}
        className="top-10 -left-20"
        style={{ animationDuration: '8s', opacity: 0.12 }}
      />
      <GlowOrb
        color="#A855F7"
        size={500}
        className="bottom-10 -right-20"
        style={{ animationDuration: '6s', opacity: 0.1 }}
      />

      <GridOverlay />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeSlideUp}
          className="font-mono text-sm tracking-widest text-neon-cyan mb-6 uppercase"
        >
          // EXPLORING THE DIGITAL FRONTIER
        </motion.p>

        <motion.h1
          variants={fadeSlideUp}
          className="font-display text-5xl md:text-7xl font-bold gradient-text mb-6 leading-tight"
        >
          Ideas at the Speed of Light
        </motion.h1>

        <motion.p
          variants={fadeSlideUp}
          className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Dive into the intersection of technology, science, and design.
          Dispatches from the frontier of what comes next.
        </motion.p>

        <motion.div
          variants={fadeSlideUp}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <Button variant="primary" size="lg" href="/blog">
            Explore Posts
          </Button>
          <Button variant="secondary" size="lg" href="/about">
            About Us
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
