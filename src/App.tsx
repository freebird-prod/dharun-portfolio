import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import CertificationsPage from './pages/CertificationsPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import { applyPageSEO } from './utils/seo';

function AppContent(): JSX.Element {
  const location = useLocation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    applyPageSEO(location.pathname);
  }, [location.pathname]);

  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white overflow-x-hidden select-none"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 12 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <ParticleBackground />

      <Toaster
        position="top-right"
        toastOptions={{
          className: 'bg-gray-800 text-white border border-cyan-500/20',
          duration: 4000,
        }}
      />

      <Navbar />

      <main className="relative z-10">
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </motion.div>
  );
}

function App(): JSX.Element {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
