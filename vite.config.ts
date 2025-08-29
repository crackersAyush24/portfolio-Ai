import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-Ai/', // 👈 VERY IMPORTANT for GitHub Pages
})
