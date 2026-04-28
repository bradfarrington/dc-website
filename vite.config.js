import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        blueHorizon: resolve(__dirname, 'case-studies/blue-horizon.html'),
        againstTheOdds: resolve(__dirname, 'case-studies/against-the-odds.html'),
        isobex: resolve(__dirname, 'case-studies/isobex.html'),
      },
    },
  },
  publicDir: 'public',
});
