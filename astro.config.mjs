import { defineConfig } from 'astro/config';
import { site } from './src/data/site.mjs';

export default defineConfig({
  ...(site.origin ? { site: site.origin } : {}),
  output: 'static',
  server: { host: true },
  vite: { server: { allowedHosts: ['terminal.local'] } },
  trailingSlash: 'always',
  compressHTML: true,
  build: { inlineStylesheets: 'never' },
  devToolbar: { enabled: false }
});
