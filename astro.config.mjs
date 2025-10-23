// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import remarkPrism from 'remark-prism';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins:[tailwindcss()]
    },
    markdown: {
      syntaxHighlight: false,
      // @ts-ignore
      remarkPlugins: [remarkPrism],
  },
  transitions: {
    name: 'default', // opsional, bisa juga dikosongkan
    fallback: 'none'
  },
  integrations: [react()]
});
