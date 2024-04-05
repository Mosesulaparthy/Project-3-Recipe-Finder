import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3008,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:3005',
        secure: false,
        changeOrigin: true
      }
    }
  }
})