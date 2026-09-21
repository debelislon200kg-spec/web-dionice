import path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT ?? 5173);

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  resolve: { alias: { '@': path.resolve(root, 'src') }, dedupe: ['react', 'react-dom'] },
  server: { port, strictPort: true, host: '0.0.0.0', proxy: { '/api': 'http://127.0.0.1:8080' } },
  preview: { port, host: '0.0.0.0' },
  build: { outDir: path.resolve(root, 'dist'), emptyOutDir: true }
});
