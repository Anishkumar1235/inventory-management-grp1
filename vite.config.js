import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-chartjs-2', 'chart.js'],
  },
  build: {
    rollupOptions: {
      external: ['react-chartjs-2', 'chart.js','react-icons'],
    },
  },
});
