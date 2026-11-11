import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    appType: 'spa',
    plugins: [
      tailwindcss(),
      react(),
      {
        name: 'spa-fallback',
        configureServer(server) {
          server.middlewares.use((req, _res, next) => {
            if (
              req.method === 'GET' &&
              req.url &&
              !req.url.includes('.') &&
              !req.url.startsWith('/@') &&
              !req.url.startsWith('/src') &&
              !req.url.startsWith('/node_modules')
            ) {
              req.url = '/index.html';
            }
            next();
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
  };
});
