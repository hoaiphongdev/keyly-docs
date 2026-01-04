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
			bgGradient: [[17, 18, 19] as const/*, [24, 21, 13] as const*/],
			border: { color: [148, 63, 205], width: 10, side: 'block-end' },
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
				'https://cdn.jsdelivr.net/fontsource/fonts/ibm-plex-sans@latest/latin-400-normal.woff2',
				'https://cdn.jsdelivr.net/fontsource/fonts/ibm-plex-sans@latest/latin-700-normal.woff2',
			],
			padding: 90,
			logo: {
				path: './assets/icon.png',
				size: [500]
			},
		};
	},
});
