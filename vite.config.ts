import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    watch: false,
    setupFiles: './setup.ts',
    css: true,
    include: ['src/**/*.test.{ts,tsx}'],
    coverage: {
      enabled: true,
      reporter: ['text', 'json', 'html'],
      include: ['src/**'],
      exclude: [
        '**/*.stories.tsx',
        '**/*.stories.ts',
        'src/stories/**',
        'src/vite-env.d.ts',
        'src/components',
        'src/index.css',
        'src/main.tsx',
      ],
      thresholds: {
        100: true,
      },
    },
  },
})
