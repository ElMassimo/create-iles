import { defineConfig } from 'iles'

export default defineConfig({
  jsx: 'solid',
  vite: {
    optimizeDeps: {
      include: ['solid-js']
    }
  }
})
