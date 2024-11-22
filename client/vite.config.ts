import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { PluginOption } from 'vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react() as PluginOption],
  server: {
    port: 3000, // Typically, the front-end runs on a different port than the back-end
    host: '127.0.0.1',
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // This should point to your back-end server
        secure: false,
        changeOrigin: true,
      },
    },
  },
});
