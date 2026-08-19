import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';

import { useLang } from './context/LanguageContext';

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { lang, t } = useLang();

  // پەڕەی بارکردن — تەنها لە یەکەم کردنەوەدا
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2300);
    return () => clearTimeout(timer);
  }, []);

  // ناونیشانی تابەکە بەپێی زمان
  useEffect(() => {
    document.title = t.company;
  }, [t, lang]);

  return (
    <>
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <ScrollToTop />
          <Navbar />

          <main>
            <AnimatePresence mode="wait">
              {/* key ـەکە زمانیشی تێدایە تا گۆڕینی زمان بە نەرمی بێت */}
              <motion.div
                key={location.pathname + lang}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <Routes location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<Home />} />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </main>

          <Footer />
          <WhatsAppFloat />
        </motion.div>
      )}
    </>
  );
}
