import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // ⚠️ بۆ GitHub Pages: base دەبێت ناوی ڕیپۆزیتۆری بێت.
  //    کاتێک دەیبەیتە Netlify، ئەمە بگۆڕە بۆ '/'
  base: '/golden-base-website/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
