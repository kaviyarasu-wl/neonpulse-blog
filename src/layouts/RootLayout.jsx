import { Outlet, useLocation } from 'react-router';
import { AnimatePresence } from 'motion/react';
import ParticleBackground from '@components/effects/ParticleBackground';
import ScrollProgress from '@components/common/ScrollProgress';
import Navbar from '@components/common/Navbar';
import Footer from '@components/common/Footer';
import BackToTop from '@components/common/BackToTop';
import PageTransition from '@components/common/PageTransition';

export default function RootLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-dark-950 relative">
      <ParticleBackground />
      <ScrollProgress />
      <Navbar />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
