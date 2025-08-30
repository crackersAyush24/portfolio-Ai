// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio-ai/',  // <-- important for GH Pages
  plugins: [react()],
});
