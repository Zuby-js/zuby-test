import { defineConfig } from 'zuby';
import react from '@zubyjs/react';

export default defineConfig({
  outDir: '.zuby',
  jsx: react()
});
