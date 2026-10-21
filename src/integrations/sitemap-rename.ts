import type { AstroIntegration } from 'astro';
import { rename, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';

const DOCS_DIR = 'src/content/docs';

/** Last commit date (YYYY-MM-DD) of the content file behind a sitemap URL, if git knows it */
function lastModified(pathname: string): string | undefined {
  const slug = pathname.replace(/^\/|\/$/g, '');
  const candidates = slug
    ? [`${slug}.mdx`, `${slug}.md`, `${slug}/index.mdx`, `${slug}/index.md`]
    : ['index.mdx', 'index.md'];
  const file = candidates.map((name) => join(DOCS_DIR, name)).find((path) => existsSync(path));
  if (!file) return undefined;
  try {
    return execFileSync('git', ['log', '-1', '--format=%cs', '--', file], { encoding: 'utf8' }).trim() || undefined;
  } catch {
    return undefined;
  }
}

/** A shallow clone only knows the latest commit, which would stamp every page with the same date */
function hasFullHistory(): boolean {
  try {
    return execFileSync('git', ['rev-parse', '--is-shallow-repository'], { encoding: 'utf8' }).trim() === 'false';
  } catch {
    return false;
  }
}

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

          // Tell crawlers which pages changed, using each page's last commit date
          if (hasFullHistory()) {
            const content = await readFile(sitemapXml, 'utf-8');
            let stamped = 0;
            const updated = content.replace(/<loc>([^<]+)<\/loc>/g, (match, loc: string) => {
              const date = lastModified(new URL(loc).pathname);
              if (!date) return match;
              stamped++;
              return `${match}<lastmod>${date}</lastmod>`;
            });
            await writeFile(sitemapXml, updated);
            console.log(`✓ Added lastmod to ${stamped} sitemap URLs`);
          } else {
            console.log('⚠ Shallow git history, sitemap lastmod skipped');
          }
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

