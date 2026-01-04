import type { AstroIntegration } from 'astro';
import { rename, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

export default function sitemapRename(): AstroIntegration {
  return {
    name: 'sitemap-rename',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const distPath = fileURLToPath(dir);
        const sitemap0 = join(distPath, 'sitemap-0.xml');
        const sitemapXml = join(distPath, 'sitemap.xml');
        const sitemapIndex = join(distPath, 'sitemap-index.xml');

        console.log('📁 Checking for sitemap files in:', distPath);

        if (existsSync(sitemap0)) {
          await rename(sitemap0, sitemapXml);
          console.log('✓ Renamed sitemap-0.xml → sitemap.xml');
        } else {
          console.log('⚠ sitemap-0.xml not found');
        }

        if (existsSync(sitemapIndex)) {
          const content = await readFile(sitemapIndex, 'utf-8');
          const updated = content.replace(/sitemap-0\.xml/g, 'sitemap.xml');
          await writeFile(sitemapIndex, updated);
          console.log('✓ Updated sitemap-index.xml references');
        }
      },
    },
  };
}

