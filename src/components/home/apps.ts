// Apps shown on the homepage "Works with" wall. Brand glyphs come from Simple Icons (CC0) and are
// inlined at build time; brands Simple Icons doesn't ship get a monogram tile instead.
// `template` marks apps with a bundled community template in the keyly repo (templates/*.keyly);
// their shortcut is taken from that template.
import {
	siArc,
	siCursor,
	siFigma,
	siGhostty,
	siGooglechrome,
	siIntellijidea,
	siLinear,
	siNotion,
	siObsidian,
	siPostman,
	siSafari,
	siSublimetext,
	siWarp,
	siXcode,
	siZedindustries,
} from 'simple-icons';

export type WallApp = {
	name: string;
	/** SVG path (24×24 viewBox) or, when absent, a two-letter monogram */
	path?: string;
	monogram?: string;
	keys: string;
	action: string;
	template?: boolean;
};

export const apps: WallApp[] = [
	{ name: 'Google Chrome', path: siGooglechrome.path, keys: '⇧⌘T', action: 'Reopen closed tab' },
	{ name: 'Safari', path: siSafari.path, keys: '⇧⌘\\', action: 'Show tab overview' },
	{ name: 'Arc', path: siArc.path, keys: '⌘S', action: 'Toggle sidebar' },
	{ name: 'Zed', path: siZedindustries.path, keys: '⇧⌘P', action: 'Command palette' },
	{ name: 'VS Code', monogram: 'VS', keys: '⇧⌘P', action: 'Show command palette', template: true },
	{ name: 'Cursor', path: siCursor.path, keys: '⌘K', action: 'Open inline edit', template: true },
	{ name: 'Xcode', path: siXcode.path, keys: '⌘B', action: 'Build' },
	{ name: 'Figma', path: siFigma.path, keys: '⌥⌘K', action: 'Create component', template: true },
	{ name: 'Photoshop', monogram: 'Ps', keys: '⌘J', action: 'New layer via copy', template: true },
	{ name: 'Illustrator', monogram: 'Ai', keys: '⌘G', action: 'Group', template: true },
	{ name: 'Premiere Pro', monogram: 'Pr', keys: '⌘K', action: 'Add edit', template: true },
	{ name: 'Notion', path: siNotion.path, keys: '⌘P', action: 'Quick find', template: true },
	{ name: 'Obsidian', path: siObsidian.path, keys: '⌘O', action: 'Quick switcher', template: true },
	{ name: 'Slack', monogram: 'Sl', keys: '⌘K', action: 'Jump to…' },
	{ name: 'Linear', path: siLinear.path, keys: '⌘K', action: 'Command menu' },
	{ name: 'Ghostty', path: siGhostty.path, keys: '⌘D', action: 'New split (right)', template: true },
	{ name: 'Warp', path: siWarp.path, keys: '⌘P', action: 'Command palette', template: true },
	{ name: 'IntelliJ IDEA', path: siIntellijidea.path, keys: '⇧ ⇧', action: 'Search everywhere', template: true },
	{ name: 'Postman', path: siPostman.path, keys: '⌘⏎', action: 'Send request', template: true },
	{ name: 'Sublime Text', path: siSublimetext.path, keys: '⇧⌘P', action: 'Command palette', template: true },
];

/** Bundled community templates in the keyly repo (ls keyly/templates | wc -l) */
export const TEMPLATE_COUNT = 31;
