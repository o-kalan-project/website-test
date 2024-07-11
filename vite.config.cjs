import { resolve } from 'path'
import { defineConfig } from 'vite'
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        eula: resolve(__dirname, 'eula.html'),
        about: resolve(__dirname, 'about.html'),
        utau: resolve(__dirname, 'utau.html'),
        changelog: resolve(__dirname, 'changelog.html'),
        404: resolve(__dirname, '404.html'),
      },
    },
  },
  base: "/website-test/",
})
