import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_PUBLIC_PATH || '/UrbanSync',
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://urbansync-production.up.railway.app',
        changeOrigin: true
      }
    }
  }

})