import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{
      find: "@",
      replacement: path.resolve(__dirname, "src")
    }]
  },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "./src/assets/scss/index.scss";
        `
      }
    }
  }
})
