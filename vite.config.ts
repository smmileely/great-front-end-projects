import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/great-front-end-projects/',
  build: {
    outDir: 'dist', // Ensure that the build output is going to the 'dist' folder
  },
});
