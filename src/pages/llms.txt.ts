import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// llms.txt (https://llmstxt.org): a plain-text map of the docs for AI crawlers and agents.
// Built from the docs collection, so new pages and templates show up without editing this file.
const INSTALL = 'curl -fsSL https://raw.githubusercontent.com/hoaiphongdev/keyly/main/scripts/install.sh | bash';

export const GET: APIRoute = async ({ site }) => {
	const entries = (await getCollection('docs')).filter(({ id }) => id !== 'vi' && !id.startsWith('vi/'));
	// The homepage entry is `index` in the collection but lives at `/`
	const path = (id: string) => (id === 'index' ? '/' : `/${id}/`);
	const link = ({ id, data }: (typeof entries)[number]) =>
		`- [${data.title}](${new URL(path(id), site)})${data.description ? `: ${data.description}` : ''}`;
	const section = (title: string, match: (id: string) => boolean) => {
		const items = entries.filter(({ id }) => match(id)).sort((a, b) => path(a.id).localeCompare(path(b.id)));
		return [`## ${title}`, '', ...items.map(link), ''];
	};
	const isTemplate = (id: string) => id === 'templates' || id.startsWith('templates/');
	const isResource = (id: string) => id.startsWith('resources/');
	const isCompare = (id: string) => id === 'compare' || id.startsWith('compare/');

	const body = [
		'# Keyly',
		'',
		'> Keyly is a free, open-source (GPL-3.0) keyboard shortcut viewer for macOS 12+. It lives in the menu bar: double-tap ⇪ Caps Lock and an overlay shows every keyboard shortcut of the active app, read live from its menus through the macOS Accessibility API. Shortcuts that never appear in a menu can be added with plain-text `.keyly` files, and community templates cover apps such as Cursor, VS Code, Figma, Photoshop and the JetBrains IDEs.',
		'',
		`- Install: \`brew install --cask hoaiphongdev/keyly/keyly\` or \`${INSTALL}\`, then grant Accessibility permission`,
		'- Trigger: double-tap ⇪ Caps Lock (configurable to any key combination, held or tapped)',
		'- Price and license: free, GPL-3.0',
		'- Source: https://github.com/hoaiphongdev/keyly',
		'- Docs: https://keyly-docs.com (English and Vietnamese)',
		'',
		...section('Docs', (id) => !isTemplate(id) && !isResource(id) && !isCompare(id)),
		...section('Compare', isCompare),
		...section('Templates', isTemplate),
		...section('Optional', isResource),
	].join('\n');

	return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
