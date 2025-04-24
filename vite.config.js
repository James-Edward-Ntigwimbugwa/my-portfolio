import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }, server: { server: {
    port: 3000, // Bind the default port here
  },
    port: 3000, // Bind the default port here
  },
  server: {
    port: 3000, // Bind the default port here
  },
})