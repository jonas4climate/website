// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Custom domain (schaefer.earth) is served from the root, so `base` stays "/".
export default defineConfig({
  site: 'https://schaefer.earth',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  // MDX lets project pages embed media components (galleries, PDF slideshows,
  // video, diagrams) inline, alongside plain Markdown.
  integrations: [mdx()],
});
