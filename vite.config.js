import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import nightwatchPlugin from 'vite-plugin-nightwatch'

export default defineConfig(({ command, mode }) => {
  if (command === 'build') {
      return {
        base: '/personal-website/',
        baseAssets: '/personal-website/',
        plugins: [
          vue(),
          nightwatchPlugin()
        ]
      }
  } else {
    return {
      plugins: [
        vue(),
        nightwatchPlugin()
      ]
    }
  }
})
