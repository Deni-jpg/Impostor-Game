import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        criar: resolve(__dirname, 'criar-sala.html'),
        entrar: resolve(__dirname, 'entrar-sala.html'),
        jogo: resolve(__dirname, 'jogo.html'),
      },
    },
  },
});