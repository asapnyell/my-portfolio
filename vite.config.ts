import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: '/my-portfolio/', // caminho relativo para GitHub Pages
  plugins: [react()],
})
