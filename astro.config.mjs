// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Custom domain (schaefer.earth) is served from the root, so `base` stays "/".
export default defineConfig({
  site: 'https://schaefer.earth',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  // MDX lets project pages embed media components (galleries, PDF slideshows,
  // video, diagrams) inline, alongside plain Markdown. Sitemap generates
  // /sitemap-index.xml from `site` (referenced by public/robots.txt).
  integrations: [mdx(), sitemap()],
});
