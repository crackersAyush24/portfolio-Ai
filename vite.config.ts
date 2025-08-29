import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-Ai/', // 👈 This must match your repo name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
