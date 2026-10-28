import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve:{
    alias:{
      '@assets':path.resolve(__dirname, 'src/assets'),
      '@patterns':path.resolve(__dirname, 'src/patterns'),
      '@components':path.resolve(__dirname, 'src/components'),
      '@scss':path.resolve(__dirname,'src/scss'),
    }
  }
})
