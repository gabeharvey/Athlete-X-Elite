import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', 
  },
  server: {
    proxy: {
      '/api': 'https://athletexelite-server.onrender.com', 
    },
  },
  base: '/', 
});
