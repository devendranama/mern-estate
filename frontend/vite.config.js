import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default {
  server: {
    proxy: {
      '/api': {
        target: 'https://mern-estate-backend-iota.vercel.app/', // Ensure the target uses HTTPS
        changeOrigin: true, // Needed to handle the origin change
        secure: true, // If using self-signed certificates, set this to false
      },
    },
  },
  plugins: [react()],
};

