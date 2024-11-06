import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', 
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5000', 
    },
  },
  base: '/',  // Set the base path if needed for production (e.g., '/your-app/')
});
