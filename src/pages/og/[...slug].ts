import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';

const entries = await getCollection('docs');

const pages = Object.fromEntries(entries.map(({ data, id }) => [id, { data }]));

export const { getStaticPaths, GET } = OGImageRoute({
	pages,
	param: 'slug',
	getImageOptions: (_path, page: (typeof pages)[number]) => {
		return {
			title: page.data.title,
			description: page.data.description || '',
			bgGradient: [[18, 19, 22] as const],
			border: { color: [242, 75, 167], width: 10, side: 'block-end' },
			font: {
				title: {
					size: 90,
					color: [255, 255, 255],
					families: ['IBM Plex Sans'],
					weight: 'Bold',
				},
				description: {
					color: [136, 140, 150],
					families: ['IBM Plex Sans'],
					lineHeight: 1.4,
				},
			},
			fonts: [
				// Complete (non-subset) files: canvaskit keeps one file per family/weight, so
				// separate latin + vietnamese subsets left Vietnamese titles with missing glyphs
				'https://cdn.jsdelivr.net/npm/@ibm/plex-sans@1.1.0/fonts/complete/woff2/IBMPlexSans-Regular.woff2',
				'https://cdn.jsdelivr.net/npm/@ibm/plex-sans@1.1.0/fonts/complete/woff2/IBMPlexSans-Bold.woff2',
			],
			padding: 90,
			logo: {
				path: './assets/icon.png',
				// Larger logos push the title off the 630px canvas
				size: [120]
			},
		};
	},
});
