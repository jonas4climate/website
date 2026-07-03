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
  // English is served from the root (schaefer.earth/); German lives under /de/.
  // `prefixDefaultLocale: false` keeps existing English URLs unchanged. Routing
  // stays fully static — the /de/ pages are authored files + getStaticPaths.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: { prefixDefaultLocale: false },
  },
  // MDX lets project pages embed media components (galleries, PDF slideshows,
  // video, diagrams) inline, alongside plain Markdown. Sitemap generates
  // /sitemap-index.xml from `site` (referenced by public/robots.txt), with
  // hreflang alternates linking each page's English/German twin.
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', de: 'de' },
      },
    }),
  ],
});
