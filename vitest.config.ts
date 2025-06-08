import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/shared/assets')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/shared/config/setup-tests.ts',
  },
});
