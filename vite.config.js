import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Netlify → base دەبێت '/' بێت
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
