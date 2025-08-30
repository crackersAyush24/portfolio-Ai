// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio-ai/',  // repo name in lowercase
  plugins: [react()],
});
