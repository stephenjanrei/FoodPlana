import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

/**
 * @fileoverview Vite configuration for the FoodPlana React application.
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [react()],
});
