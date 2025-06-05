import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 把 @ 指向 src/
    },
  },

  plugins: [
    tailwindcss(),
    react()
  ],
  build: {
    outDir: 'dist'
  },
  base: '/',
  server: {
    historyApiFallback: true
  }
})