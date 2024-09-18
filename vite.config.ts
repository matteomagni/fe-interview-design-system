/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: ["src/**/*.test.{js,ts,tsx}"],
    globals: true, //https://vitest.dev/guide/migration.html#globals-as-a-default
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
  resolve: {
    alias: { 
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@customTypes': path.resolve(__dirname, 'src/types'),
    },
},
});
