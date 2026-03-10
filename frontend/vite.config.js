import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    allowedHosts: [
      'wuzzstore.my.id'
    ],
    cors: {
      origin: [
        'http://wuzzstore.my.id',
        'https://wuzzstore.my.id'
      ],
      credentials: true,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
});
