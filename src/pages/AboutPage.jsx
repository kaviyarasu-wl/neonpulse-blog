import { motion } from 'motion/react';
import GlowOrb from '@components/effects/GlowOrb';
import siteConfig from '@data/siteConfig.json';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
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

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-16 relative">
      <GlowOrb
        color="#A855F7"
        size={500}
        className="absolute -top-20 -right-40"
      />
      <GlowOrb
        color="#00F0FF"
        size={400}
        className="absolute bottom-20 -left-40"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <h1 className="font-display text-4xl md:text-5xl font-bold gradient-text mb-6">
              About {siteConfig.name}
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card p-8 md:p-12 mb-10">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {siteConfig.name} is a digital publication exploring the frontiers of
              technology, science, design, and culture. We believe the future
              isn't something that happens to us — it's something we build
              together.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Founded in 2026, we cover the breakthroughs, ideas, and trends
              shaping tomorrow's world. From quantum computing to spatial design,
              from synthetic biology to AI agents — we bring clarity to
              complexity and make the cutting edge accessible.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our team of writers and researchers are practitioners, not just
              observers. Every article is grounded in deep technical
              understanding and a genuine passion for what's next.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="font-display text-2xl font-bold text-white mb-6">
              Our Mission
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card p-6">
              <div className="text-3xl mb-4">
                <svg className="w-8 h-8 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-white mb-2">
                Illuminate
              </h3>
              <p className="text-sm text-gray-400">
                Make complex technology understandable and accessible to curious
                minds everywhere.
              </p>
            </div>
            <div className="glass-card p-6">
              <div className="text-3xl mb-4">
                <svg className="w-8 h-8 text-neon-magenta" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-white mb-2">
                Inspire
              </h3>
              <p className="text-sm text-gray-400">
                Spark curiosity and creativity by showcasing the possibilities of
                emerging technologies.
              </p>
            </div>
            <div className="glass-card p-6">
              <div className="text-3xl mb-4">
                <svg className="w-8 h-8 text-neon-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-white mb-2">
                Connect
              </h3>
              <p className="text-sm text-gray-400">
                Build a community of forward-thinkers who shape the future of
                technology together.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="font-display text-2xl font-bold text-white mb-6">
              Connect With Us
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4">
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-4 flex items-center gap-3 group"
            >
              <svg className="w-5 h-5 text-gray-400 group-hover:text-neon-cyan transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                Twitter / X
              </span>
            </a>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-4 flex items-center gap-3 group"
            >
              <svg className="w-5 h-5 text-gray-400 group-hover:text-neon-cyan transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                GitHub
              </span>
            </a>
            <a
              href={siteConfig.social.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover p-4 flex items-center gap-3 group"
            >
              <svg className="w-5 h-5 text-gray-400 group-hover:text-neon-cyan transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                Discord
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
