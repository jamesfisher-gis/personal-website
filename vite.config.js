import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import nightwatchPlugin from 'vite-plugin-nightwatch'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/personal-website/',
  plugins: [
    vue(),
    nightwatchPlugin()
  ]
})
