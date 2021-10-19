import { defineConfig } from 'iles'

export default defineConfig({
  svelte: true,
  vite: {
    optimizeDeps: {
      include: ['svelte']
    }
  }
})
