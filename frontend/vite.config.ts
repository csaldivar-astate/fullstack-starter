import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
dotenv.config();

let server = {};
if (process.env.NODE_ENV === 'development') {
  server = {
    proxy: {
      "/api": {
        target: `http://${process.env.DEV_SERVER_IP}:${process.env.DEV_SERVER_PORT}`,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server
});
