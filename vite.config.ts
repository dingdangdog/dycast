import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    // host: '0.0.0.0',
    proxy: {
      '/dy': {
        target: 'https://live.douyin.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dy/, '')
      },
      '/tts': {
        target: 'http://127.0.0.1:1773/tts',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/tts/, '')
      }
    }
  }
});
