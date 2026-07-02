// @ts-check
import { defineConfig } from 'astro/config';

// Custom domain (schaefer.earth) is served from the root, so `base` stays "/".
export default defineConfig({
  site: 'https://schaefer.earth',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
