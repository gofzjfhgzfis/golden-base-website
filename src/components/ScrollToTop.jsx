import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/** هەر جارێک پەڕە دەگۆڕدرێت، بە نەرمی بگەڕێوە بۆ سەرەوە */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return; // یەکەم بارکردن — پێویست ناکات
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}
