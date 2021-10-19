import { defineConfig } from 'iles'

export default defineConfig({
  jsx: 'preact',
  vite: {
    optimizeDeps: {
      include: ['preact', 'preact/debug']
    }
  }
})
